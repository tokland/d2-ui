import React, { Children } from 'react';
import { identity, CustomPropTypes } from '../helpers';
import CardPrimary from './CardPrimary';
import CardText from './CardText';

import '@material/card/dist/mdc.card.css';

function getCardClasses(darkTheme, additionalClasses) {
    const classes = [
        'mdc-card',
        darkTheme ? 'mdc-card--theme-dark' : undefined,
        additionalClasses,
    ];

    return classes
        .filter(identity)
        .join(' ');
}

export default function Card({ children, darkTheme, className }) {
    return (
        <div className={getCardClasses(darkTheme, className)}>
            {children}
        </div>
    );
}
Card.propTypes = {
    children: CustomPropTypes.onlyChildrenOfTypes([
        CardPrimary,
        CardText,
    ]),
}
