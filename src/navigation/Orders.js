import { Orders } from '../screens'
import { colors } from '../constants/theme'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
const OrdersStack = () => <Stack.Navigator initialRouteName="Cart" screenOptions={{
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}}>
    <Stack.Screen name="Orders" component={Orders} options={{ title: 'Ordenes' }} />
</Stack.Navigator>
export default OrdersStack