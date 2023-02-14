import { Cart } from '../screens'
import { colors } from '../constants/theme'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
const CartStack = () => <Stack.Navigator initialRouteName="Cart" screenOptions={{
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}}>
    <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito' }} />
</Stack.Navigator>
export default CartStack