
import React from 'react';
import { connect } from 'react-redux';
import { shallowWithState } from 'enzyme-redux';
import ListItem from '../components/List';
import Modal from '../components/Modal';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('example shallowWithState', () => {
  const ListItem = () => ('error');

  it('works', () => {
    const expectedState = 'expectedState';
    const mapStateToProps = (state) => ({
      state,
    });
    const ConnectedComponent = connect(mapStateToProps)(ListItem);
    const component = shallowWithState(<ConnectedComponent />, expectedState);
    expect(component.props().state).toBe(expectedState);
  });

  it('works', () => {
    const expectedState = 'expectedState';
    const mapStateToProps = (state) => ({
      state,
    });
    const ConnectedComponent = connect(mapStateToProps)(Modal);
    const component = shallowWithState(<ConnectedComponent />, expectedState);
    expect(component.props().state).toBe(expectedState);
  });
});