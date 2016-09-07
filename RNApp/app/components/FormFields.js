import React from 'react';
import { resetError } from '../utils';
import {
    Icon,
    Input,
    InputGroup,
    ListItem,
    Text
} from './';

// Export Form components

export const InputInlineLabel = ({ input, meta, ...props }) => {
    resetError(meta, input);
    return (
        <ListItem>
            <InputGroup>
                <Input
                    {...props}
                    {...input}
                />
            </InputGroup>
        </ListItem>
    );
};

export const InputIconLabel = ({ input, meta, ...props }) => {
    resetError(meta, input);
    const { iconName } = props;
    return (
        <ListItem>
            <InputGroup>
                <Icon name={iconName} />
                <Input
                    {...props}
                    {...input}
                />
            </InputGroup>
        </ListItem>
    );
};