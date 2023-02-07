import { Categories, Products, Product } from '../screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Shop = () => <NavigationContainer>
	<Stack.Navigator initialRouteName="Categories">
		<Stack.Screen name="Categories" component={Categories} />
		<Stack.Screen name="Products" component={Products} />
		<Stack.Screen name="Product" component={Product} />
	</Stack.Navigator>
</NavigationContainer>
export default Shop