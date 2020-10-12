import React from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
export default class Loading extends React.Component {
    render() {
        return (
            
            <View style={styles.container}>
                <ActivityIndicator size="large" color="lightgreen" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor:'white',
        zIndex: 1
    }
})