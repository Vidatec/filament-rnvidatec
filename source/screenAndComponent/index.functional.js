/*
 * app/{{path}}/{{name}}/index.js
 */

// import react and react-native elements
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

const {{name}} = props => {
    // Store states here
    const [name, setName] = useState({{ name }}.name);
    /**
     * Render component
     */
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello from {{ path }}/{name}! State "name" is equal to {name}</Text>
        </View>
    );
}

{{name}}.defaultProps = {
  text: 'default string'
};

{{name}}.propTypes = {
  text: PropTypes.string
};

export default {{name}};
