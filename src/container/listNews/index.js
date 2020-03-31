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
        console.log('constructor');
        this.state = {
            content: {},
            hadContent: false,
            showPopup: false,
            text: 'text',
            contentSelected: null,
        }


    }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.dispatch({
            type: CreateActionType.GET_NEWS_ASYNC,
            params: {
                num: 0,
            }
        });
    };

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log(this.state.content);
        if (nextProps.data.length > 0) {
            this.setState({ content: nextProps.data, hadContent: true });
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate`);
        console.log('props', this.props.data);
        console.log('props', nextProps);
        console.log('state', this.state);
        console.log('nextState', nextState);
        // if (this.state.hadContent === nextState.hadContent) {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        debugger;
        console.log('componentWillUnmount');
    }

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



    reRender = () => {
        this.setState({
            text: 'hello world'
        });
    }

    render() {
        console.log('render');
        const item = this.state.hadContent ? <ListItem data={this.state.content} getData={this.getDataFromChild} /> : <Loading />;
        return (
            <div className="app">
                <div className="container">
                    <div className="list">
                        <Modal closePopup={this.closePopup} show={this.state.showPopup} data={this.state.contentSelected} />
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

                        <p>{this.state.text ? this.state.text : null}</p>
                        <button onClick={this.reRender}>Update</button>
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
