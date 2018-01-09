import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/home';
import { shallow  } from 'enzyme';
import { configure  } from 'enzyme';
import configureStore from 'redux-mock-store'
import initialState from '../reducers/initialState'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()  });
const mockStore = configureStore();

test('home component should be rendered', () => {
  const store = mockStore(initialState);
  const wrapper = shallow(<Home store={store}/>);
    expect(wrapper).toMatchSnapshot();
})
