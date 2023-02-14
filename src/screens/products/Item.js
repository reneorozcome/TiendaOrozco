import { styles } from '../../constants/theme'
import { View, Text, TouchableOpacity } from 'react-native'

const toCurrency = price => price
const Product = ({ item, onSelect }) => {
    return <View style={{ ...styles.card, ...styles.listItem }}>
        <TouchableOpacity onPress={() => onSelect(item)}>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                <Text>$ {toCurrency(item.price)}</Text>
            </View>
        </TouchableOpacity>
    </View>
}
export default Product