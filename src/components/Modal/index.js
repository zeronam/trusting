import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

class PopOver extends Component {

    onClose() {
      this.props.onClose();
    }
    render(){
      if(!this.props.show){
        return null;
      }
      return (
          <Modal show={this.props.show}>

            <Modal.Header>
            <button type="button" className="close" onClick={(e) => this.onClose(e)}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <Modal.Title>{this.props.data.headline.main}</Modal.Title>
            </Modal.Header>

            <Modal.Body>              
              <p>{this.props.data.snippet ? this.props.data.snippet : 'No content'}</p>
              <p>{this.props.data.multimedia === null ? this.props.data.multimedia : null}</p>
              <p>Time: {this.props.data.pub_date ? <Moment format="YYYY/MM/DD">{this.props.data.pub_date}</Moment> : null}</p>
              <p>Source: {this.props.data.source ? this.props.data.source : null}</p>
              <NavLink target='_blank' to={this.props.data.web_url ? this.props.data.web_url : null} className="navlink" title={this.props.data.headline.main ? this.props.data.headline.main : null }><i className="fa fa-external-link"></i></NavLink>
            </Modal.Body>

        </Modal>
      )
    }
}

export default PopOver;