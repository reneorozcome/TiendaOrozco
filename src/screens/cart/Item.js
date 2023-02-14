import { styles } from '../../constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons.js'
import { View, Text, TouchableOpacity } from 'react-native'

const toCurrency = price => price
const CartProduct = ({ item, onDelete }) => {
    return <View style={{ ...styles.card, ...styles.listItem }}>
        <TouchableOpacity onPress={() => onDelete(item)}>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                <Text>$ {toCurrency(item.price)}</Text>
            </View>
            <View>
                <Text>{item.quantity}</Text>
            </View>
            <View><Ionicons name="trash" size={24} color="black" /></View>
        </TouchableOpacity>
    </View>
}
export default CartProduct