import React, { Component } from 'react';
import * as CreateActionType from './constants';
import { connect } from 'react-redux';
import { Loading } from '../../components/Loading';
import ListItem from '../../components/List';
import ReactPaginate from 'react-paginate';
import Modal from '../../components/Modal';

import './styles.css';

class ListNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: {},
            hadContent: false,
            showPopup: false,
            contentSelected: null
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: CreateActionType.GET_NEWS_ASYNC,
            params: {
                num: 0,
            }
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.length > 0) {
            this.setState({ content: nextProps.data, hadContent: true });
        }
    };

    handlePageClick = (data) => {
        let selected = data.selected;
        this.props.dispatch({
            type: CreateActionType.GET_NEWS_ASYNC,
            params: {
                num: selected,
            }
        });
        this.setState({ hadContent: false });
    };

    getDataFromChild = (data) => {
        this.setState({ contentSelected: data, showPopup: true });
    }

    closePopup = () => {
        this.setState({ showPopup: false });
    }

    render() {
        const item = this.state.hadContent ? <ListItem data={this.state.content} getData={this.getDataFromChild} /> : <Loading />;
        return (
            <div className="app">
                <div className="container">
                    <div className="list">
                        <Modal show={this.state.showPopup} onClose={this.closePopup} data={this.state.contentSelected} />
                        {item}
                        <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            breakLabel={<a href="">...</a>}
                            breakClassName={"break-me"}
                            pageCount={20}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"list-group pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.NewsStore;
};

export default connect(mapStateToProps, null)(ListNews);
