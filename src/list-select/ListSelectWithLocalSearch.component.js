import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField/TextField';
import ListSelect from '../list-select/ListSelect.component';
import addD2Context from '../component-helpers/addD2Context';

const styles = {
    list: {
        width: '100%',
        outline: 'none',
        border: 'none',
        padding: '0rem 1rem',
        overflowX: 'auto',
    },

    searchField: {
        marginLeft: '1rem',
    },
};

class ListSelectWithLocalSearch extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            textSearch: '',
        };

        this.i18n = context.d2.i18n;
    }

    _filterList = (event) => {
        this.setState({
            textSearch: event.target.value,
        });
    }

    render() {
        const source = this.props.source
            .filter(option => option.label.toLowerCase().indexOf(this.state.textSearch.toLowerCase()) !== -1);

        return (
            <div>
                <TextField
                    style={styles.searchField}
                    hintText={this.i18n.getTranslation('search_by_name')}
                    onChange={this._filterList}
                    value={this.state.textSearch}
                />
                <ListSelect
                    {...this.props}
                    listStyle={styles.list}
                    source={source}
                    size={10}
                />
            </div>
        );
    }
}
ListSelectWithLocalSearch.propTypes = {
    source: PropTypes.array.isRequired,
};
ListSelectWithLocalSearch.defaultProps = {
    source: [],
};

export default addD2Context(ListSelectWithLocalSearch);
