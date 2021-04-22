import { NavigationContainer, StackRouter } from '@react-navigation/native'
import React from 'react'
import { StackRoutes } from './stack.routes'

const Routes = () => (
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
)

export {Routes}
