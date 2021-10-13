import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from '../../components/Loading';
import {set} from 'react-native-reanimated';

export default function FogotPass({navigation}) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View>
          <Header title={'Quên mật khẩu'} leftFunction={goBack} />
        </View>
        <View style={styles.container}>
          <View style={styles.logo}>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                width: 130,
                height: 130,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#ccc',
              }}>
              <Image
                source={require('../../assets/logo1.png')}
                style={styles.imgLogo}
              />
            </View>
          </View>

          <View
            style={{
              padding: 16,
              color: '#3B3F4A',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '70%'}}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  Nhập email của bạn
                </Text>
                <TextInput
                  style={{
                    fontSize: 16 * 1.5,
                  }}
                  placeholder={'Nhập email tại đây'}
                  value={email}
                  onChangeText={val => {
                    if (_isMounted) {
                      setEmail(val);
                    }
                  }}
                />
              </View>
              <TouchableHighlight
                // onPress={this.requestActivateCode.bind(this)}
                style={styles.Button}>
                <View
                  style={{
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 50,
                    backgroundColor: 'red',
                  }}>
                  {isLoading ? (
                    <ActivityIndicator size={28} color="#fff" />
                  ) : (
                    <Icon name="arrow-right" style={{color: '#fff'}} />
                  )}
                </View>
              </TouchableHighlight>
            </View>

            <View
              style={{
                borderBottomColor: '#D1D2D4',
                borderBottomWidth: 1,
                marginTop: 5,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 120,
    height: 120,
  },
  Button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
  },
});
