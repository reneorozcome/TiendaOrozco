import Category from './Item'
import { View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { styles as theme } from '../../constants/theme'
import { selectCategory } from '../../store/actions/category.action'

const Categories = ({ navigation }) => {
	const dispatch = useDispatch()
	const categories = useSelector(state => state.category.categories)
	const handlerSelectCategory = item => {
		dispatch(selectCategory(item.id))
		navigation.navigate('Products', {
			name: item.title
		})
	}
	const renderItem = ({ item }) => <Category item={item} onSelect={handlerSelectCategory} />

	return <View style={theme.screen}>
		<FlatList data={categories} keyExtractor={item => item.id} renderItem={renderItem} numColumns={3} />
	</View>
}
export default Categories