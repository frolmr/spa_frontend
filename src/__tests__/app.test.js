import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import { shallow  } from 'enzyme';
import { configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()  });

test('app main should be rendered', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
})
