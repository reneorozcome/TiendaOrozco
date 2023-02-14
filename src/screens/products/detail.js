import { View, Text } from 'react-native'
import { styles as theme } from '../../constants/theme'

const ProductDetail = ({ navigation, route }) => {
	const product = route.params.product

	return <View style={theme.screen}>
		<Text>{product.name}</Text>
		<Text>{product.description}</Text>
		<Text>$ {product.price}</Text>
	</View>
}
export default ProductDetail