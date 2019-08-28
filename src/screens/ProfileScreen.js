import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import axios from 'axios'

export default class ProfileScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            categories: '',
            content: ''
        }
        this.onSendData = this.onSendData.bind(this)
    }


    onSendData(){
        axios.post('https://reduxblog.herokuapp.com/api/posts?key=didik451', {
            title: this.state.title,
            categories: this.state.categories,
            content: this.state.content
        })
        .then(res => {
            alert('Data tersimpan')
            this.props.navigation.navigate('Home')

        })
    }

    static navigationOptions = {
        title: 'Profile'
    }
   render() {
        console.log('profile', this.props);
        
        return (
            <View>
                <Text> Add Items </Text>
                <TextInput
                    style={{ height: 40 }}
                     placeholder="Title"
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Image Link"
                    onChangeText={(categories) => this.setState({ categories })}
                    value={this.state.categories}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Content"
                    onChangeText={(content) => this.setState({ content })}
                    value={this.state.content}
                />
                <Button 
                    title = "Send"
                    onPress={this.onSendData}
                />
            </View>
        )
    }
}
