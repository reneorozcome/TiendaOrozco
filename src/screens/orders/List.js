import OrderItem from './Item'
import { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { styles as theme } from '../../constants/theme'
import { getOrders, deleteOrder } from '../../store/actions/order.action'

const Order = () => {
	const dispatch = useDispatch()
	const onDelete = id => dispatch(deleteOrder(id))
	const orders = useSelector(state => state.orders.list)
	const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />

	useEffect(() => {
		dispatch(getOrders())
	}, [])

	return <View style={theme.screen}>
		<View>
			<FlatList data={orders} keyExtractor={item => item.id} renderItem={renderItem} numColumns={1} />
		</View>
	</View>
}
export default Order