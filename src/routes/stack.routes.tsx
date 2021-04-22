import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors';
import Welcome from '../pages/Welcome';
import Confirmation from '../pages/Confirmation';
import UserIdentification from '../pages/UserIdentification';

const Routes = createStackNavigator() 

const StackRoutes: React.FC = () => (
    <Routes.Navigator headerMode='none' screenOptions={{cardStyle: {
        backgroundColor: colors.white
    }}}>
        <Routes.Screen name='Welcome' component={Welcome}/>
        <Routes.Screen name='UserIdentification' component={UserIdentification}/>
        <Routes.Screen name='Confirmation' component={Confirmation}/>
    </Routes.Navigator>
)

export {StackRoutes};