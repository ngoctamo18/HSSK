import React, {Component} from 'react';
import gui from '../style/gui';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewHeader}>
        <TouchableOpacity
          style={styles.IconLeft}
          onPress={this.props.leftFunction}>
          <Icon name="arrow-round-back" style={{color: '#fff'}} />
        </TouchableOpacity>
        <View style={styles.ContentHeader}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {this.props.title}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewHeader: {
    height: gui.headerHeight,
    width: gui.screenWidth,
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  IconLeft: {
    width: '20%',
    justifyContent: 'center',
    height: '100%',
  },
  ContentHeader: {
    width: '60%',
    justifyContent: 'center',
  },
  contentBox: {
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
});
