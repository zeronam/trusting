import React, {Component} from 'react';

class DetailNews extends Component {
    render() {
        const text = this.props.location.data ? this.props.location.data.headline.main : 'No data';
        return (
            <p>{text}</p>
        )
    }
}

export default DetailNews;