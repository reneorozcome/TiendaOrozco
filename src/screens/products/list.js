import { View, Text } from 'react-native'
import { Button } from '../../constants/utils'
import { styles as theme } from '../../constants/theme'

const Products = ({ navigation }) => {
	return <View style={theme.screen}>
		<Text>Products Screen</Text>
		<Button action={() => { navigation.navigate('Product') }}>Ir al detalle</Button>
	</View>
}
export default Products