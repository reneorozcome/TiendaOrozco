import { styles } from '../../constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons.js'
import { View, Text, TouchableOpacity } from 'react-native'

const toCurrency = price => price
const FormatDay = time => {
    const date = new Date(time)
    return date.toLocaleDateString()
}
const OrderItem = ({ item, onDelete }) => {
    return <View style={{ ...styles.card, ...styles.listItem }}>
        <TouchableOpacity onPress={() => onDelete(item)}>
            <View>
                <Text>{FormatDay(item.date)}</Text>
            </View>
            <View>
                <Text>$ {toCurrency(item.total)}</Text>
            </View>
            <View><Ionicons name="trash" size={24} color="black" /></View>
        </TouchableOpacity>
    </View>
}
export default OrderItem