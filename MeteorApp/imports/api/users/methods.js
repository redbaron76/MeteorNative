import { Meteor } from 'meteor/meteor';
import { convert } from 'imagemagick';
import { Owner } from './users';

Meteor.methods({
    updateOwnerUser(formData) {
        const owner = Owner.findOne(Meteor.userId());
        owner.profile.name = formData.name;
        owner.profile.location = formData.location;
        owner.profile.telephone = formData.telephone;
        owner.profile.email = formData.email;

        owner.validate({
            fields: [
                'profile.name',
                'profile.email',
                'profile.location',
                'profile.telephone'
            ],
            stopOnFirstError: true,
            simulation: false
        }, (error) => {
            if (error && error.reason) {
                throw new Meteor.Error(403, error.reason);
            } else {
                owner.emails[0].address = formData.email;
                owner.save();
            }
        });
        
        return true;
    },
    createCroppedImages: function(original, images, fileObj) {
        const uploader = Meteor.Uploader;
        // Get settings images
        const settingImages = Meteor.settings.public.app.images;
        // Load owner
        const owner = Owner.findOne(Meteor.userId());
        // collect validate fields
        const validate = [];
        
        // Loop image paths
        _.each(images, (path, version) => {
            let dim = settingImages[version];
            uploader.addImageVersion(fileObj, version);

            convert([
                original,
                '-resize', dim + '^',
                '-gravity', 'Center',
                '-crop', dim + '+0+0',
                '-auto-level',
                '-auto-orient',
                '+repage',
                path
            ]);

            owner.profile[version] = uploader._buildUrlName(uploader._buildFileName(fileObj.fileName, fileObj.extension, version));
            validate.push('profile.' + version);
        });

        uploader.deleteImage(fileObj);
        // uploader.compressOriginalFile(original);

        owner.validate({
            fields: validate,
            stopOnFirstError: true,
            simulation: false
        }, (error) => {
            if (error && error.reason) {
                throw new Meteor.Error(403, error.reason);
            } else {
                owner.save();
            }
        });

        return owner.profile['avatar'];
    }
});