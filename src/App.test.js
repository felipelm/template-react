import React from 'react';
import App from './App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    const app = <App />;
    wrapper = mount(app);
  });

  it('Mounts', () => {
    expect(
      wrapper
        .find('a')
        .at(0)
        .text()
    ).toBe('Learn React');
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
