/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Home from '../src/Home';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
// test('Home snapshot', () => {
//   const snap = renderer.create(<Home />).toJSON();
//   expect(snap).toMatchSnapshot();
// });

it('function and state test case', () => {
  let HomeData = renderer.create(<Home />).getInstance();
  console.log(HomeData);
  // expect(homeData.change(2)).toEqual(20);
});
