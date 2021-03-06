import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PostPage from '../components/PostPage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerCustom} from './../commons/DrawerCustom';
import {TouchableOpacity, Text} from 'react-native';
import PostAdd from './../components/PostAdd';
import UpdatePost from './../components/UpdatePost';

const drawer = createDrawerNavigator();

const Drawer = navigation => {
  return (
    <drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{drawerType: 'slide'}}>
      <drawer.Screen
        name="Post"
        component={PostPage}
        options={{
          headerTitle: 'Postlar',
        }}
      />
      <drawer.Screen name="PostAdd" component={PostAdd} />
      <drawer.Screen name="PostUpdate" component={UpdatePost} />
    </drawer.Navigator>
  );
};

export default Drawer;
