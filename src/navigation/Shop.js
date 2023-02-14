import { colors } from '../constants/theme'
import { Categories, Products, ProductDetail } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Shop = () => <Stack.Navigator initialRouteName="Categories" screenOptions={{
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? colors.primary : ''
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}}>
	<Stack.Screen name="Categories" component={Categories} options={{ title: 'Mis productos' }} />
	<Stack.Screen name="Products" component={Products} options={({ route }) => ({ title: route.params.name })} />
	<Stack.Screen name="Product" component={ProductDetail} options={({ route }) => ({ title: route.params.name })} />
</Stack.Navigator>
export default Shop