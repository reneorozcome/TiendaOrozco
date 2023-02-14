import Category from './Item'
import { CATEGORIES } from '../../data'
import { View, FlatList } from 'react-native'
import { styles as theme } from '../../constants/theme'

const Categories = ({ navigation }) => {
	const selectCategory = item => {
		navigation.navigate('Products', {
			name: item.title,
			categoryID: item.id
		})
	}
	const renderItem = ({ item }) => <Category item={item} onSelect={selectCategory} />

	return <View style={theme.screen}>
		<FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderItem} numColumns={3} />
	</View>
}
export default Categories