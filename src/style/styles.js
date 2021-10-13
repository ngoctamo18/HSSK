import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

//dif iphone 6-6plus check margin, width, height device info
export const StylesShare = {
  mainColor: 'red',
  bgMainColor: 'rgb(247,248,250)',
  colorIcon: 'rgb(199,199,204)',
  colorText: '#1e2432',
  colorPrimary: '#00adee',
  colorPrimaryActive: '#008dbf',
  colorDanger: '#f86c6b',
  colorSuccess: '#4dbd74',
  colorWarning: '#ffc107',
  colorInfo: '#20a8d8',
  colorGray: '#8f9ba6',
  colorDark: '#2f353a',
  colorLight: '#fff',
  colorSecondary: '#c8ced3',
  linearMain: ['rgb(246,73,36)', 'rgb(255,194,38)'],
  linearButton: ['rgb(255,194,38)', 'rgb(246,73,36)'],
  headerHeight: 50,
  normalFontSize: 14,
  smallFontSize: 13,
  memSizeText: 15,
  titleFontSize: 17,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight:
    Platform.OS === 'ios'
      ? height === 812 || width === 812 || height === 896 || width === 896
        ? 80
        : 64
      : 44, // check navBarHeight iphone X, Xm
  marginTop:
    Platform.OS === 'ios'
      ? height === 812 || width === 812 || height === 896 || width === 896
        ? 34
        : 18
      : 6,
  iconTop: Platform.OS === 'ios' ? 28 : 12,
  imageRandom: 'https://unsplash.it/1000/1000',
  shadowMain: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
};

export default StylesShare;
