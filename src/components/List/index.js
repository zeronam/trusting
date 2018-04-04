import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import Moment from 'react-moment';


class ListItem extends Component {
    constructor(props) {
        super(props);

        this.listItems = props.data.map(
            
            (data, index) => <li key={data._id} className="col-md-3 col-xs-12 col-sm-6" onClick={() => this.getData(data)}>                
                <div className="inner">
                    <NavLink to={data.web_url ? data.web_url : null} className="navlink" title={data.snippet ? data.snippet : null }>{data.headline.main ? data.headline.main : null }</NavLink>
                    <p className="product-content">{data.snippet}{data.snippet ? data.snippet : null}</p>
                    <p className="product-multimedia">{data.multimedia === null ? data.multimedia : null}</p>
                    <p className="product-pubdate">{data.pub_date ? <Moment format="YYYY/MM/DD">{data.pub_date}</Moment> : null}</p>
                    <p className="product-source">{data.source ? data.source : null}</p>
                    
                </div>           
                
            </li>
        );
    }

    getData = (data) => {
        this.props.getData(data);
    }


    render() {
        return(<ul className="row list-group">
                {this.listItems}
            </ul>
        );
    }
}

export default ListItem;