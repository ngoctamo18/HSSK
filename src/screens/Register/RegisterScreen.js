import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useToast} from 'native-base';

export default function RegisterScreen({navigation}) {
  const toast = useToast();

  const demo = () => {
    toast.show({
      title: 'Wrong password',
      placement: 'bottom',
      status: 'warning',
    });
  };
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={demo}
          style={{
            width: 100,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <Text>RegisterScreen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
