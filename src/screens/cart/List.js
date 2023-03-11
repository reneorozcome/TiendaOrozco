import CartProduct from './Item'
import { useDispatch, useSelector } from 'react-redux'
import { styles as theme } from '../../constants/theme'
import { removeItem, confirmItems } from '../../store/actions/cart.action'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

const Cart = () => {
	const dispatch = useDispatch()
	const onRemoveItem = id => dispatch(removeItem(id))
	const total = useSelector(state => state.cart.total)
	const products = useSelector(state => state.cart.items)
	const onConfirmCart = () => dispatch(confirmItems(products, total))
	const renderItem = ({ item }) => <CartProduct item={item} onDelete={onRemoveItem} />

	return <View style={theme.screen}>
		<View>
			<FlatList data={products} keyExtractor={item => item.id} renderItem={renderItem} numColumns={1} />
		</View>
		<View>
			<TouchableOpacity onPress={onConfirmCart}>
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