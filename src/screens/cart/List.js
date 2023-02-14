import CartProduct from './Item'
import { CART } from '../../data'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles as theme } from '../../constants/theme'

const Cart = ({ navigation, route }) => {
	const total = 425000
	const products = CART
	const confirm = () => console.log('Confirmar carrito')
	const deleteItem = () => console.log('Eliminar elemento')
	const renderItem = ({ item }) => <CartProduct item={item} onDelete={deleteItem} />

	return <View style={theme.screen}>
		<View>
			<FlatList data={products} keyExtractor={item => item.id} renderItem={renderItem} numColumns={1} />
		</View>
		<View>
			<TouchableOpacity onPress={confirm}>
				<Text>Confirmar</Text>
				<View>
					<Text>Total:</Text>
					<Text>$ {total}</Text>
				</View>
			</TouchableOpacity>
		</View>
	</View>
}
export default Cart