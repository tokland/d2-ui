import { Children } from 'react';
import getDisplayName from 'recompose/getDisplayName';

export const identity = v => v;

export const CustomPropTypes = {
    onlyChildrenOfTypes(allowedTypes) {
        return (props, propName, componentName) => {
            const prop = props[propName]

            let error = null
            Children.forEach(prop, function (child) {
                if (!allowedTypes.includes(child.type)) {
                    error = new Error('`' + componentName + '` children should be one of the allowed types (' + allowedTypes.map(v => v.name || v.componentName).join(', ') + '). You passed a ' + getDisplayName(child.type));
                }
            });
            return error
        };
    },
};