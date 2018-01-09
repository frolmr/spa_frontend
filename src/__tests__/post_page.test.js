import React from 'react';
import ReactDOM from 'react-dom';
import PostPage from '../components/post_page';
import { shallow  } from 'enzyme';
import { configure  } from 'enzyme';
import configureStore from 'redux-mock-store'
import initialState from '../reducers/initialState'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()  });
const mockStore = configureStore();

test('home component should be rendered', () => {
  const store = mockStore(initialState);
  const match = {"params": 1}
  const wrapper = shallow(<PostPage match={match} store={store}/>);
    expect(wrapper).toMatchSnapshot();
})

