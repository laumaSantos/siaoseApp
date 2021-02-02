import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../Componentes/CustomTabBar';

import Home from '../Telas/Home';
import Appointments from '../Telas/Appointments';
import Profile from '../Telas/Profile';

const tab = createBottomTabNavigator();

export default () => (
    <tab.Navigator tabBar= {props=><CustomTabBar {...props}/>}>
        <tab.Screen  name="Home" component={Home}/>
        <tab.Screen  name="Appointments" component={Appointments}/>
        <tab.Screen  name="Profile" component={Profile}/>
    </tab.Navigator>
);