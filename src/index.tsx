import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './navigator';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default App;
