import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { theme } from "../global/theme";
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >

      <Screen name="Home" component={Home} />

      <Screen name="AppointmentDetails" component={AppointmentDetails} />

      <Screen name="AppointmentCreate" component={AppointmentCreate} />

    </Navigator>
  );
}
