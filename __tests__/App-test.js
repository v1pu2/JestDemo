/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
test('App snapshot', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});

test('answer', () => {
  expect(3 * 3).toEqual(9)
});
