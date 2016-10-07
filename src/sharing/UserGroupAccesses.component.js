import { PropTypes, createClass, default as React } from 'react';
import AccessMaskSwitches from '../sharing/AccessMaskSwitches.component';

export default createClass({
    propTypes: {
        userGroupAccesses: PropTypes.array,
        onChange: PropTypes.func.isRequired,
    },

    getDefaultProps() {
        return {
            userGroupAccesses: [],
            onChange: () => {},
        };
    },

    render() {
        const onChange = (currentItem) => (newAccessMask) => {
            const modifiedUserGroupAccesses = this.props.userGroupAccesses
                .map(item => Object.assign({}, item))
                .map(item => {
                    if (item.id === currentItem.id) {
                        item.access = newAccessMask; //eslint-disable-line
                    }
                    return item;
                });

            this.props.onChange(modifiedUserGroupAccesses);
        };

        return (
            <div>
                {this.props.userGroupAccesses.map(item => (
                    <AccessMaskSwitches
                        accessMask={item.access}
                        name={item.name}
                        label={item.name}
                        onChange={onChange(item)}
                    />
                ))}
            </div>
        );
    },
});
