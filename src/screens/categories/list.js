import { View, Text } from 'react-native'
import { Button } from '../../constants/utils'
import { styles as theme } from '../../constants/theme'

const Categories = ({ navigation }) => {
	return <View style={theme.screen}>
		<Text>Category Screen</Text>
		<Button action={() => { navigation.navigate('Products') }}>Ir a los productos</Button>
	</View>
}
export default Categories