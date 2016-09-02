import React from 'react';
import { Icon, Input, InputGroup, ListItem } from 'native-base';

// Export Form components

export const InputInlineLabel = ({ input, meta, ...props }) => {
    // console.log('InputInlineLabel', props);
    return (
        <ListItem>
            <InputGroup>
                <Input
                    {...props}
                    {...input}
                    errorText={ meta.touched && meta.error }
                />
            </InputGroup>
        </ListItem>
    );
};

export const InputIconLabel = ({ input, meta, ...props }) => {
    // console.log('InputIconLabel', props);
    const { iconName } = props;
    return (
        <ListItem>
            <InputGroup>
                <Icon name={iconName} />
                <Input
                    {...props}
                    {...input}
                    errorText={ meta.touched && meta.error }
                />
            </InputGroup>
        </ListItem>
    );
};