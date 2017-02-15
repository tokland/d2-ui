import React, { createElement } from 'react';
import { identity } from '../helpers';
import pure from 'recompose/pure';
import setDisplayName from 'recompose/setDisplayName';

function getCardTitleClasses(large, additionalClasses) {
    const classes = [
        'mdc-card__title',
        large ? 'mdc-card__title--large' : undefined,
        additionalClasses,
    ];

    return classes
        .filter(identity)
        .join(' ');
}

function CardTitle({
    large=true,
    children,
    className,
    subTitle=false,
}) {
    const titleTagName = subTitle ? 'h2' : 'h1';

    return createElement(
        titleTagName, 
        { className: getCardTitleClasses(!subTitle && large, className) },
        children,
    );
}

export default setDisplayName('CardTitle')(pure(CardTitle));
