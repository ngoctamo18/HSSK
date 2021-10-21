import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import gui from '../style/gui';
import FontAwesome5 from 'react-native-vector-icons/AntDesign';
export default class ComfirmModalYN extends Component {
  /**
   * @param {String} title tiêu đề
   * @param {String} content nội dung
   *  @param {boolean} isOpen chế độ bật tắt
   * @param {String} typeModal noComfirm || null
   */

  constructor(props) {
    super(props);
    this.state = {
      selectId: '',
      language: 'vi',
      returnClass: false,
      isOpen: this.props.isOpen,
    };
  }

  componentWillReceiveProps(prop) {
    if (this.state.isOpen !== prop.isOpen) {
      this.setState({
        isOpen: prop.isOpen,
      });
    }
  }
  //Method
  handleComfirm(type) {
    this.setState({
      isOpen: type,
    });
    this.props.selectOption(type);
  }

  render() {
    return (
      <Modal isVisible={this.state.isOpen}>
        <View style={styles.wraperModal}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.content ? (
            <Text style={styles.content}>{this.props.content}</Text>
          ) : (
            <FontAwesome5
              name="checkcircle"
              size={45}
              style={styles.iconSuccess}
            />
          )}
          {this.props.typeModal === 'noComfirm' ? (
            <View>
              <TouchableOpacity
                onPress={this.handleComfirm.bind(this, true)}
                style={styles.ButtonSuccessNoComfirm}>
                <Text style={styles.TextSuccessNoComfrim}>OK</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={this.handleComfirm.bind(this, true)}
                style={styles.ButtonSuccessComfirm}>
                <Text style={styles.TextSuccessComfirm}>Xác nhận</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.handleComfirm.bind(this, false)}
                style={styles.ButtonCancelComfirm}>
                <Text style={styles.TextCancelComfirm}>Hủy bỏ</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  wraperModal: {
    width: '75%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
  },
  content: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  iconSuccess: {
    color: '#46AB2B',
    paddingVertical: 10,
    alignSelf: 'center',
  },
  ButtonSuccessNoComfirm: {
    borderTopColor: '#80808030',
    borderTopWidth: 1,
    paddingVertical: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  TextSuccessNoComfrim: {color: gui.mainColor, alignSelf: 'center'},
  ButtonSuccessComfirm: {
    borderTopColor: '#80808030',
    borderTopWidth: 1,
    paddingVertical: 10,
    alignItems: 'flex-start',
    width: '50%',
  },
  TextSuccessComfirm: {color: gui.mainColor, alignSelf: 'center'},
  ButtonCancelComfirm: {
    borderTopColor: '#80808030',
    borderTopWidth: 1,
    paddingVertical: 10,
    alignItems: 'flex-end',
    width: '50%',
    borderLeftColor: '#80808030',
    borderLeftWidth: 1,
  },
  TextCancelComfirm: {color: 'red', alignSelf: 'center'},
});
