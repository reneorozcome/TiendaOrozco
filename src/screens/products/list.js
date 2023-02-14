import Product from './Item'
import { PRODUCTS } from '../../data'
import { View, FlatList } from 'react-native'
import { styles as theme } from '../../constants/theme'

const Products = ({ navigation, route }) => {
	const products = PRODUCTS.filter(p => p.category === route.params.categoryID)
	const selectProduct = item => {
		navigation.navigate('Product', {
			product: item,
			name: item.name,
			productID: item.id
		})
	}
	const renderItem = ({ item }) => <Product item={item} onSelect={selectProduct} />

	return <View style={theme.screen}>
		<FlatList data={products} keyExtractor={item => item.id} renderItem={renderItem} numColumns={1} />
	</View>
}
export default Products