import React, { createElement } from 'react';
import { identity } from '../helpers';

function getCardPrimaryClasses(additionalClasses) {
    const classes = [
        'mdc-card__primary',
        additionalClasses,
    ];

    return classes
        .filter(identity)
        .join(' ');
}

export default function CardPrimary({ children, className }) {
    return (
        <section className={getCardPrimaryClasses(className)}>
            {children}
        </section>
    );
}
