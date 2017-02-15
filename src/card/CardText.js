import React from 'react';

export default function CardText({ className = '', children }) {
    const classes = [
        'mdc-card__supporting-text',
        className,
    ].join(' ');

    return (
        <section className={classes}>{children}</section>
    );
}
