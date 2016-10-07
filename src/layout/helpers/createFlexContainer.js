import React, { PropTypes, Children, cloneElement } from 'react';

const addFlexValueToStyleOfChildComponent = (flexValue) => (child) => cloneElement(child, { style: Object.assign({}, { flex: flexValue }, child.props.style) });

export default function createFlexContainer(defaultFlexStyle, displayName = 'FlexContainer') {
    function FlexContainer({ style = {}, flexValue = '1 0 auto', children }) {
        const flexContainerStyle = Object.assign({ display: 'flex' }, defaultFlexStyle, style);
        const flexedChildren = Children.map(children, addFlexValueToStyleOfChildComponent(flexValue));

        return (
            <div style={flexContainerStyle}>
                {flexedChildren}
            </div>
        );
    }

    FlexContainer.propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(React.PropTypes.node),
            PropTypes.node,
        ]),
        flexValue: PropTypes.string,
        style: PropTypes.object,
    };

    FlexContainer.displayName = displayName;

    return FlexContainer;
}
