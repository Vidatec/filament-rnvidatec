/*
 * app/{{path}}/{{name}}/stories.js
 */

import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import {{name}} from '.';

storiesOf('{{name}}', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('no props', () => (
    <{{name}} />
  ));