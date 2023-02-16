import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { styles as theme } from '../../constants/theme'

const ProductDetail = () => {
	const product = useSelector(state => state.product.selected)

	return <View style={theme.screen}>
		<Text>{product.name}</Text>
		<Text>{product.description}</Text>
		<Text>$ {product.price}</Text>
	</View>
}
export default ProductDetail