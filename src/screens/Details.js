import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Details extends Component {
    
    static navigationOptions
    render() {
        console.log('data detail', this.props)
        const {title, categories} = this.props.navigation.state.params
        return (
            <View>
                <Text> {title} </Text>
                <Image 
                    source={{uri: categories}}
                    style={{width: '100%', height: 200}}
                />
            </View>
        )
    }
}
