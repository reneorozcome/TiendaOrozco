import Shop from './Shop'
import CartStack from './Cart'
import OrdersStack from './Orders'
import { View, Text } from 'react-native'
import { styles } from '../constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons.js'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const BottomTabs = createBottomTabNavigator()

const Tabs = () => <BottomTabs.Navigator initialRouteName="Shop" screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBar
}}>
    <BottomTabs.Screen name="Shop" component={Shop} options={{tabBarIcon: ({ focused }) => <View styles={styles.tabIcon}><Ionicons name="md-home" size={24} color="black" /><Text>Tienda</Text></View> }} />
    <BottomTabs.Screen name="Cart" component={CartStack} options={{tabBarIcon: ({ focused }) => <View styles={styles.tabIcon}><Ionicons name="md-cart" size={24} color="black" /><Text>Carrito</Text></View> }} />
    <BottomTabs.Screen name="Orders" component={OrdersStack} options={{tabBarIcon: ({ focused }) => <View styles={styles.tabIcon}><Ionicons name="list-outline" size={24} color="black" /><Text>Órdenes</Text></View> }} />
</BottomTabs.Navigator>
export default Tabs