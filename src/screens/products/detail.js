import { View, Text } from 'react-native'
import { Button } from '../../constants/utils'
import { useSelector, useDispatch } from 'react-redux'
import { styles as theme } from '../../constants/theme'
import { addItem } from '../../store/actions/cart.action'

const ProductDetail = ({ navigation }) => {
	const dispatch = useDispatch()
	const product = useSelector(state => state.product.selected)
	const onAddItem = () => dispatch(addItem(product))
	//const products = useSelector(state => state.product.products)

	return <View style={theme.screen}>
		<Text>{product.name}</Text>
		<Text>{product.description}</Text>
		<Text>$ {product.price}</Text>
		<Button action={onAddItem}>Agregar al carrito</Button>
		<Button action={() => navigation.navigate('Cart')} color="gray">Ir al carrito</Button>
	</View>
}
export default ProductDetail