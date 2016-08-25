import { Meteor } from 'meteor/meteor';

import fs from 'fs';
import { convert } from 'imagemagick';

// Uploader class

export default class Uploader {
    
    constructor() {
        this.version;
        this.baseUrl = Meteor.settings.public.upload.baseUrl;
        this.basePath = Meteor.settings.public.upload.basePath;
        this.images = Meteor.settings.public.app.images;
    }
    
    init() {
        if (!this.instance) {
            this.instance = new Meteor.Files({
                storagePath: this.basePath,
                collectionName: 'uploads',
                chunkSize: 256*128,
                permissions: 777,
                allowClientCode: true,
                namingFunction: () => {
                    return this.fileName;
                }
            });
        }
    }

    getInstance() {
        if (!this.instance) {
            this.init();
        }
        return this;
    }

    startUpload(component, file, onBeforeUpload, onAfterUpload) {

        if (_.isFunction(onBeforeUpload)) {
            onBeforeUpload();
        }

        this.instance.insert({
            file: file,
            streams: 8,
            meta: {
                userId: Meteor.userId(),
                fileName: this._getFileName()
            },
            onUploaded: (error, fileObj) => {
                component.setState({ progress: 100 });
                fileObj.fileName = this.fileName;
                if (_.isFunction(onAfterUpload)) {
                    onAfterUpload(fileObj);
                }
            },
            onProgress: _.throttle((progress) => {
                if (progress <= 100) {
                    component.setState({ progress: parseInt(progress) });
                }
            }, 500)
        });
    }

    setOwnerImages(fileObj, callback) {
        const original = fileObj.path;
        // Create images paths to be created
        const images = {};
        _.each(this.images, (dim, version) => {
            images[version] = this._getVersionFile(fileObj, version);
        });
        // Call method to create cropped images
        Meteor.call('createCroppedImages', original, images, fileObj, (error, avatarUrl) => {
            if (!!avatarUrl) {
                callback(avatarUrl);
            }
        });
    }

    // SERVER METHODS

    addImageVersion(fileObj, version) {
        const newVersion = this._getUpdtVersionObject(fileObj, version);
        this.instance.collection.update(fileObj._id, { '$set': {
            versions: newVersion
        }});
    }

    deleteImage(fileObj) {
        let images = {};
        const fileId = arguments[1] || null;

        if (fileId) {
            images = this.instance.collection.find({ _id: fileId });
        } else {
            images = this.instance.collection.find({ 'meta.userId': Meteor.userId() });
        }

        if (images.count() > 0) {
            images.forEach((image) => {
                if (!fileObj || fileObj._id !== image._id) {
                    _.each(image.versions, function(version) {
                        let path = version.path;
                        if (path) {
                            fs.exists(path, (exist) => {
                                if (exist) {
                                    fs.unlink(path, (err) => {
                                        if (err) console.log('unlink error', err);
                                    });
                                }
                            });
                        }
                    });
                    this.instance.collection.remove({_id: image._id});
                }
            });
            return true;
        }
        return false;
    }

    compressOriginalFile(original) {
        const copy = original;
        convert([
            original,
            '-resize', '800x800^',
            '-auto-level',
            '-auto-orient',
            '+repage',
            copy
        ]);
    }

    // PRIVATE METHODS

    _getFileName() {
        this.fileName = Meteor.userId() + '_' + new Date().getTime();
        return this.fileName;
    }

    _getVersionFile(fileObj, version) {
        const versionName = this._buildFileName(fileObj.fileName, fileObj.extension, version);
        return this.basePath + '/' + versionName;
    }

    _buildFileName(fileName, ext, version) {
        if (version) {
            fileName = fileName + '_' + version;
        }
        return fileName + '.' + ext.toLowerCase();
    }

    _buildUrlName(fileName) {
        const baseUrl = this.baseUrl + '/';
        return baseUrl + fileName;
    }

    _getUpdtVersionObject(fileObj, version) {
        const file = this.instance.collection.findOne({_id: fileObj._id});
        if (file.versions) {
            file.versions[version] = this._getVersionObject(fileObj, version);
        }
        return file.versions;
    }

    _getVersionObject(fileObj, version) {
        return {
            path: this._getVersionFile(fileObj, version),
            size: fileObj.size,
            type: fileObj.type,
            extension: fileObj.extension
        };
    }
    
}