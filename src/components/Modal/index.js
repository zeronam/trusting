import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link, NavLink } from 'react-router-dom';

class PopOver extends Component {

  onClose() {
    this.props.closePopup();
  }
  render() {

    if (!this.props.show) {
      return null;
    }
    console.log(this.props);
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <button type="button" className="close" onClick={(e) => this.onClose()}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <Modal.Title>{this.props.data.headline.main}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{this.props.data.snippet ? this.props.data.snippet : 'No content'}</p>
          <p>{this.props.data.multimedia === null ? this.props.data.multimedia : null}</p>
          <p>Time: {this.props.data.pub_date ? <Moment format="YYYY/MM/DD">{this.props.data.pub_date}</Moment> : null}</p>
          <p>Source: {this.props.data.source ? this.props.data.source : null}</p>
          <Link to={{ pathname: `/detail/${this.props.data._id}`, data: this.props.data }} className="navlink" title={this.props.data.headline.main ? this.props.data.headline.main : null}><i className="fa fa-external-link"></i></Link>
          <NavLink exact activeStyle={{
            backgroundColor: 'black',
            color: 'red'
          }} to="/" className="my-link">Trang Chu</NavLink>
        </Modal.Body>

      </Modal>
    )
  }
}

PopOver.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.bool,
  data: PropTypes.object
};

export default PopOver;