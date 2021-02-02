import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/routes/MainStack';

export default () => {
  return(
    <UserContextProvider>
       <NavigationContainer>
         <MainStack/>
        </NavigationContainer>
    </UserContextProvider>
  );
}
