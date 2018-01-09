import React from 'react';
import ReactDOM from 'react-dom';
import PostForm from '../components/post_form';
import { shallow  } from 'enzyme';
import { configure  } from 'enzyme';
import configureStore from 'redux-mock-store'
import initialState from '../reducers/initialState'
import Adapter from 'enzyme-adapter-react-16';
import { shallowWithIntl } from '../intl-enzyme-test-helper.js';

configure({ adapter: new Adapter()  });
const mockStore = configureStore();

test('home component should be rendered', () => {
  const store = mockStore(initialState);
  const wrapper = shallowWithIntl(<PostForm store={store}/>);
    expect(wrapper).toMatchSnapshot();
})
