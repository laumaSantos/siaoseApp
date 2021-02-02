import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 
import Preload from '../Telas/Preload';
import SignIn from '../Telas/SignIn';
import SignUp from '../Telas/SignUp';
import MainTab from './MainTab';
import Search from '../Telas/Search';
import Maquiador from '../Telas/Maquiador';
import ProfileUpdate from '../Telas/ProfileUpdate';
import CreateService from '../Telas/CreateService';
import MyServices from '../Telas/MyServices';
import UpdateService from '../Telas/UpdateService';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false 
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Maquiador" component={Maquiador}/>
        <Stack.Screen name="ProfileUpdate" component={ProfileUpdate}/>
        <Stack.Screen name="CreateService" component={CreateService}/>
        <Stack.Screen name="MyServices" component={MyServices}/>
        <Stack.Screen name="UpdateService" component={UpdateService}/>
    </Stack.Navigator>


);