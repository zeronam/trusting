import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';


class ListItem extends Component {
    getData(data) {
        this.props.getData(data);
    }

    render() {
        const { data } = this.props;
        const listItems = this.props.data ? this.props.data.map(
            (data, index) => {
                return (<li key={data._id} className="col-md-3 col-xs-12 col-sm-6">
                    <div className="inner" onClick={() => this.getData(data)} >
                        <h1>{data.headline.main ? data.headline.main : null}</h1>
                        <p className="product-content">{data.snippet}{data.snippet ? data.snippet : null}</p>
                        <p className="product-multimedia">{data.multimedia === null ? data.multimedia : null}</p>
                        <p className="product-pubdate">{data.pub_date ? <Moment format="YYYY/MM/DD">{data.pub_date}</Moment> : null}</p>
                        <p className="product-source">{data.source ? data.source : null}</p>
                    </div>
                </li>)
            }) : null;
        return (<ul className="row list-group">
            {listItems}
        </ul>
        );
    }
}

ListItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    list: PropTypes.shape({
        main: PropTypes.string,
        snippet: PropTypes.string,
        text: PropTypes.string,
        number: PropTypes.number,
        array: PropTypes.array
    }),

    item: PropTypes.objectOf(
        PropTypes.number
    ),
}

export default ListItem;