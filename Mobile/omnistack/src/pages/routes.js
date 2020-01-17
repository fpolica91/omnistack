import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from './Main';
import Profile from './Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: { title: "Home" }
        },
        Profile: {
            screen: Profile,
            navigationOptions: { title: "Profile" }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: "#FFF",
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#7D40E7",
            }
        }
    }
    )
)

export default Routes;