import { styles } from '../theme'
import { View } from 'react-native'

const Card = ({ children, cardStyles }) => {
	return <View style={{...styles.card, ...cardStyles}}>
		{children}
	</View>
}
export default Card