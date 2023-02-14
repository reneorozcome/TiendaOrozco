import Tabs from './navigation/Tabs'
import { useFonts } from 'expo-font'
import { styles, colors } from './constants/theme'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
	const [loaded] = useFonts({
		'Sofia-Regular': require('../assets/fonts/SofiaSansSemiCondensed-Regular.ttf'),
		'Sofia-Bold': require('../assets/fonts/SofiaSansSemiCondensed-Bold.ttf')
	})
	if(!loaded)
		return <View style={{...styles.screen, ...styles.verticalCenter}}>
			<ActivityIndicator size="large" color={colors.primary} />
		</View>
	return <NavigationContainer>
		<Tabs />
	</NavigationContainer>
}
export default App