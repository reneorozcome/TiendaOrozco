import Product from './Item'
import { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { styles as theme } from '../../constants/theme'
import { selectProduct, filteredProducts } from '../../store/actions/product.action'

const Products = ({ navigation }) => {
	const dispatch = useDispatch()
	const category = useSelector(state => state.category.selected)
	const products = useSelector(state => state.product.filteredProducts)
	const handlerSelectProduct = item => {
		dispatch(selectProduct(item.id))
		navigation.navigate('Product', { name: item.name })
	}
	const renderItem = ({ item }) => <Product item={item} onSelect={handlerSelectProduct} />

	useEffect(() => {
		dispatch(filteredProducts(category.id))
	}, [])

	return <View style={theme.screen}>
		<FlatList data={products} keyExtractor={item => item.id} renderItem={renderItem} numColumns={1} />
	</View>
}
export default Products