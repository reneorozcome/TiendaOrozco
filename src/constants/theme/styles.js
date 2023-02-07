import { colors } from './colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	screen: {
		padding: 80
	},
	header: {
		alignItems: "center",
		backgroundColor: colors.primary,
		justifyContent: "center",
		padding: 40,
		title: {
			color: 'white',
			fontFamily: 'Sofia-Bold-Italic',
			fontSize: 22,
			textTransform: 'uppercase'
		}
	},
	card: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
		elevation: 5,
		flexDirection: 'row',
		flexWrap: 'wrap',
		maxWidth: '90%',
		padding: 20,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 6
	},
	button: {
		backgroundColor: colors.primary,
		padding: 8,
		minWidth: 140
	},
	buttonDisabled: {
		backgroundColor: colors.gray,
		opacity: 0.5
	},
	buttonColors: {
		gray: {
			backgroundColor: colors.gray
		},
		secondary: {
			backgroundColor: colors.secondary
		},
		accent: {
			backgroundColor: colors.accent
		}
	},
	buttonText: {
		color: 'white',
		fontSize: 14,
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	verticalCenter: {
		height: '100%',
		justifyContent: 'center'
	}
})
export default styles