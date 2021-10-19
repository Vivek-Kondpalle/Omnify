import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllNews from '../screens/AllNews';
import OneNews from '../screens/OneNews';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="AllNews"
                    component={AllNews}
                />
                <Stack.Screen
                    name="OneNews"
                    component={OneNews}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator