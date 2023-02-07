import Shop from './navigation/Shop'
import { useFonts } from 'expo-font'
import { styles, colors } from './constants/theme'
import { View, ActivityIndicator } from 'react-native'

const App = () => {
	const [loaded] = useFonts({
		'Sofia-Regular': require('../assets/fonts/SofiaSansSemiCondensed-Regular.ttf'),
		'Sofia-Bold': require('../assets/fonts/SofiaSansSemiCondensed-Bold.ttf')
	})
	if(!loaded)
		return <View style={{...styles.screen, ...styles.verticalCenter}}>
			<ActivityIndicator size="large" color={colors.primary} />
		</View>
	return <Shop />
}
export default App