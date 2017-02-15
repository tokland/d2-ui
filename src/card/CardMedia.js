import React from 'react';
import { identity } from '../helpers';

function getCardMediaClasses(additionalClasses) {
    const classes = [
        'mdc-card__media',
        additionalClasses,
    ];

    return classes
        .filter(identity)
        .join(' ');
}

export default function CardMedia({ className, children }) {
    const clonedChildren = React.Children.map(children, (child) => {
        const classes = child.props.className || '';
        return React.cloneElement(child, { className: classes.concat(' mdc-card__media-item') })
    });

    return (
        <div className={getCardMediaClasses(className)}>
            {clonedChildren}
        </div>
    );
}
