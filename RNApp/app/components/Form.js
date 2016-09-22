import React, { Component, PropTypes } from 'react';
import { ListView, ScrollView, View, Text } from 'react-native';
import { Field } from 'redux-form';
import { Button } from './';
import * as s from '../styles/styles';

class Form extends Component {

    applyErrorContainer(items) {
        let error = null;
        if (this.props.errorMessage) {
            error = (
                <View key="errorMsg" style={[s.styles.formErrorContainer, this.props.errorStyle]}>
                    <Text style={[s.styles.formErrorMessage]}>
                        {this.props.errorMessage}
                    </Text>
                </View>
            );
            switch (true) {
                case (this.props.errorPosition == 'top'):
                    items.unshift(error);
                    break;
                case (this.props.errorPosition == 'bottom'):
                    items.push(error);
                    break;
                default:
                    items.splice(items.length-1, 0, error);
            }
        }
        return items;
    }

    renderFormContainer(formItems) {
        const items = this.applyErrorContainer(formItems);
        if (items) {
            return (
                <View style={[s.styles.formContainer, this.props.formStyle]}>
                    {items}
                </View>
            );
        }
        return null;
    }

    render() {
        if (this.props.children) {
            var hasButton = false;
            let items = React.Children.map(this.props.children, (child, i) => {
                switch (true) {
                    case (child && child.type == Field):
                        return React.cloneElement(child, {
                            key: 'item' + i,
                            style: [s.styles.formField, this.props.fieldStyle]
                        });
                    case (child && child.type == Button):
                        hasButton = true;
                        return React.cloneElement(child, {
                            key: 'item' + i,
                            style: [s.styles.formButton, this.props.buttonStyle]
                        });
                }
            });
            return this.renderFormContainer(items);
        }
        return null;
    }
}

Form.propTypes = {
    formStyle: PropTypes.object,
    fieldStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    errorMessage: PropTypes.string,
    errorPosition: PropTypes.oneOf(['top', 'bottom', 'beforeButton']),
};

export {
    Form,
    Field,
};