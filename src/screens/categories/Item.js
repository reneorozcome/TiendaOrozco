import { styles } from '../../constants/theme'
import { View, Text, TouchableOpacity } from 'react-native'

const Category = ({ item, onSelect }) => {
    return <TouchableOpacity onPress={() => onSelect(item)}>
        <View style={{ ...styles.card, ...styles.listItem }}>
            <Text>{item.title}</Text>
        </View>
    </TouchableOpacity>
}
export default Category