import React, { PropTypes } from 'react';
import colorbrewer from './colorbrewer';

// Returns one color scale based on a code and number of classes
export default function ColorScale({ scale, classes, style = {}, onClick }) {
    const colors = colorbrewer[scale][classes];

    const styles = {
        scale: {
            marginRight: 30,
            paddingLeft: 0,
            height: 36,
            cursor: 'pointer',
            boxShadow: '0 1px 6px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.12)',
            display: 'inline-block',
            ...style,
        },

        item: {
            marginLeft: 0,
            display: 'inline-block',
            width: 36,
            height: '100%',
        },
    };

    const items = colors.map((color, index) => (
        <li key={index} style={Object.assign({ backgroundColor: color }, styles.item)} />
    ));

    return (
        <ul style={styles.scale} onClick={(event => onClick(event, scale))}>
            {items}
        </ul>
    );
}

ColorScale.propTypes = {
    scale: PropTypes.string.isRequired,
    classes: PropTypes.number.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
};
