import OrderItem from './Item'
import { ORDERS } from '../../data'
import { View, FlatList } from 'react-native'
import { styles as theme } from '../../constants/theme'

const Order = ({ navigation, route }) => {
	const orders = ORDERS
	const deleteItem = () => console.log('Eliminar elemento')
	const renderItem = ({ item }) => <OrderItem item={item} onDelete={deleteItem} />

	return <View style={theme.screen}>
		<View>
			<FlatList data={orders} keyExtractor={item => item.id} renderItem={renderItem} numColumns={1} />
		</View>
	</View>
}
export default Order