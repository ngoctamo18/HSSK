import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';

import {
  check,
  PERMISSIONS,
  request,
  openSettings,
} from 'react-native-permissions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useToast, Icon} from 'native-base';

export default function GetInforCMND({navigation}) {
  const toast = useToast();

  //   const demo = () => {
  //     toast.show({
  //       title: 'Wrong password',
  //       placement: 'bottom',
  //       status: 'warning',
  //     });
  //   };
  const [step, setStep] = useState(1);
  const [viewImage, setViewImage] = useState(false);
  const [uriImage, setUriImage] = useState('');
  const [inforUser, setInforUser] = useState({});
  const [permission, setPermission] = useState(false);
  const [openRequestPermission, setOpenRequestPermission] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contentRequestPermission, setContentRequestPermission] = useState(
    'Bạn chưa cấp quyền cho thiết bị này',
  );
  const [hideComfirm, setHideComfirm] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [title, setTitle] = useState('Ảnh mặt trước CMND/CCCD');
  const [userImage, setUserImage] = useState({
    truoc: '',
    sau: '',
    avt: '',
  });

  const checkPermission = () => {
    let plantform = PERMISSIONS.ANDROID.CAMERA;
    if (Platform.OS == 'ios') {
      plantform = PERMISSIONS.IOS.CAMERA;
    }

    check(plantform)
      .then(resultCheck => {
        console.log('result', resultCheck);
        if (resultCheck === 'granted') {
          setPermission(true);
        } else {
          request(plantform).then(resultRequest => {
            console.log('resultRequest', resultRequest);
            if (resultRequest === 'granted') {
              setPermission(true);
            } else if (resultRequest === 'blocked') {
              setOpenRequestPermission(true);
            } else {
              navigation.navigate('LoginScreen');
            }
          });
        }
      })
      .catch(error => {
        console.log('loi xin quyen', error);
      });
  };

  const handlePermission = chose => {
    navigation.navigate('LoginScreen');
    if (chose) {
      openSettings().catch(() => console.warn('Không thể mở setting'));
    }
  };

  const takePictureAgain = () => {
    setUriImage('');
    setViewImage(false);
    setHideComfirm(false);
    setMessageError('');
  };

  const selectPicker = () => {
    setUriImage('');
    setViewImage('');
    setHideComfirm(false);
    setMessageError('');
    switch (step) {
      case 1:
        setStep(2);
        let data = userImage;
        data.truoc = uriImage;
        setUserImage(data);
        break;

      case 2:
        setStep(3);
        let data = userImage;
        data.sau = uriImage;
        setUserImage(data);
        break;

      default:
        let data = userImage;
        data.avt = uriImage;
        setUserImage(data);
        break;
    }
  };

  const renderImage = () => {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: 'data:image/png;base64,' + uriImage,
          }}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            width: Dimensions.get('window').width,
            alignItems: 'center',
            bottom: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.ButtonConfirm,
                {backgroundColor: 'rgb(220, 0, 78)'},
              ]}
              onPress={() => takePictureAgain()}>
              <Text style={{color: '#fff'}}>Chụp lại</Text>
            </TouchableOpacity>
            {hideComfirm || loading ? null : (
              <TouchableOpacity
                style={[
                  styles.ButtonConfirm,
                  {marginLeft: 10, backgroundColor: '#1976d2'},
                ]}
                onPress={() => selectPicker()}>
                <Text style={{color: '#fff'}}>Đồng ý</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgb(72, 73, 74)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            opacity: 0.7,
            position: 'absolute',
            width: Dimensions.get('window').width,
            top: 0,
            height: gui.headerHeight,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              alignContent: 'center',
              height: gui.headerHeight,
              justifyContent: 'center',
              paddingHorizontal: 15,
            }}>
            <FontAwesome5 name="arrow-left" size={24} style={{color: '#fff'}} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              alignSelf: 'center',
            }}>
            {title}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              alignContent: 'center',
              opacity: 0,
              height: gui.headerHeight,
              justifyContent: 'center',
              paddingHorizontal: 15,
            }}
          />
        </View>
        {messageError ? (
          <View
            style={{
              position: 'absolute',
              opacity: 0.7,
              backgroundColor: 'rgb(72, 73, 74)',
              width: '65%',
              alignSelf: 'center',
              top: '45%',
              borderRadius: 8,
            }}>
            <Text
              style={{
                color: gui.mainColor,
                fontSize: 16,
                padding: 15,
                textAlign: 'center',
              }}>
              {messageError}
            </Text>
          </View>
        ) : null}
        <View
          style={{
            backgroundColor: 'rgb(72, 73, 74)',
            width: 150,
            opacity: 0.7,
            position: 'absolute',
            top: Dimensions.get('window').height / 2 - 20,
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 8,
          }}>
          {loading ? (
            <>
              <Text style={{fontSize: 16, color: gui.mainColor}}>
                Đang xử lý
              </Text>
              <ActivityIndicator size="large" color={gui.mainColor} />
            </>
          ) : null}
        </View>
      </View>
    );
  };

  const renderCamera = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 0.7,
            // borderRadius: Dimensions.get('window').width / 2,
            // overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: Dimensions.get('window').width * 0.9,
              // borderRadius: 300 / 2,
              // overflow: 'hidden',
            }}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              ratio="1:1"
              // cameraViewDimensions
              style={styles.camview}
              type={this.state.typeCamera}
              // flashMode={RNCamera.Constants.FlashMode.auto}
              autoFocus={RNCamera.Constants.AutoFocus.on}
              captureAudio={false}
              onFacesDetected={res => this.checkStatusFace(res.faces[0])}
              onFaceDetectionError={res => {
                console.log('loi vao', res);
              }}
              // faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
              faceDetectionClassifications={
                RNCamera.Constants.FaceDetection.Classifications.all
              }
            />
            <BarcodeMask
              width={Dimensions.get('window').width * 0.9 + 10}
              height={Dimensions.get('window').width * 0.9 + 10}
              showAnimatedLine={false}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '30%',
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 17,
            }}>
            {this.state.checkFromScreen &&
            this.state.checkFromScreen == 'RegistetrationScreen'
              ? strings.GetInforCmtScreen.vui_long_dat_cmnd
              : strings.GetInforCmtScreen.tai_ho_chieu}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ComfirmModalYN
        isOpen={openRequestPermission}
        content={contentRequestPermission}
        selectOption={choose => handlePermission(choose)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ButtonConfirm: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgb(220, 0, 78)',
    marginTop: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
});
