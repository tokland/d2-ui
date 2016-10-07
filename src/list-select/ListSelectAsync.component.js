import React, { PropTypes } from 'react';
import ListSelect from './ListSelect.component';
import { Observable } from 'rx';
import log from 'loglevel';

const ListSelectAsync = React.createClass({
    propTypes: {
        source: PropTypes.instanceOf(Observable),
        onItemDoubleClick: PropTypes.func.isRequired,
        listStyle: PropTypes.object,
    },

    getInitialState() {
        return {
            listSource: [],
        };
    },

    componentWillMount() {
        if (!this.props.source) {
            return;
        }

        this.disposable = this.props.source
            .subscribe(
                (listValues) => this.setState({ listSource: listValues }),
                (error) => log.error(error)
            );
    },

    componentWillUnmount() {
        if (this.disposable) {
            this.disposable.dispose();
        }
    },

    render() {
        return (
            <ListSelect
                {...this.props}
                onItemDoubleClick={this.props.onItemDoubleClick}
                source={this.state.listSource}
                listStyle={this.props.listStyle}
            />
        );
    },
});

export default ListSelectAsync;
