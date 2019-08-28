import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { restoreSession } from '../redux/actions/session/actions'
class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            populardata: [],
            loading: true,
        }
    }
    getData() {
        axios.get('https://reduxblog.herokuapp.com/api/posts?key=didik4511')
            .then(res => {
                this.setState({
                    populardata: res.data,
                    loading: false
                })
            })
    }
    componentDidMount() {
        this.props.restore()
        this.getData()
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        console.log(this.props)
        let renderData;
        if (this.state.loading) {
            renderData =
                <ScrollView horizontal={true}>
                    <View style={{ width: 200, height: 140, backgroundColor: 'grey', margin: 10, borderBottomLeftRadius: 10, justifyContent: 'center', flex: 1 }}>
                        <ActivityIndicator
                            size="large" color="#0000ff"
                        />
                    </View>
                    <View style={{ width: 200, height: 140, backgroundColor: 'grey', margin: 10, borderBottomLeftRadius: 10, justifyContent: 'center', flex: 1 }}>
                        <ActivityIndicator
                            size="large" color="#0000ff"
                        />
                    </View>
                </ScrollView>
        } else {
            renderData =
                <ScrollView horizontal={true}>
                    {
                        this.state.populardata.map((pData, index) =>
                            <View key={pData.id} style={{ width: 200, height: 140, backgroundColor: 'grey', margin: 10, borderBottomLeftRadius: 10 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Detail', pData)}
                                >
                                    <Image
                                        source={{ uri: pData.categories }}
                                        style={{ width: 200, height: 100 }}
                                    />
                                    <Text>{pData.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </ScrollView>
        }

        return (
            <View>
                <ScrollView>
                    <View>
                        <View style={{ flex: 2, flexDirection: 'row', alignContent: 'space-between' }}>
                            <Text>Popular</Text>
                            <Text>See all</Text>
                        </View>
                        {renderData}
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({ sessionReducer,  }) => ({
    user: sessionReducer
});

const mapDispatchToProps = {
    restore: restoreSession
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
