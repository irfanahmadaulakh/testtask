import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({onPress, title, isNoBack}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewHeaderstyle}>
      {!isNoBack && (
        <TouchableOpacity
          style={styles.iconViewStyle}
          onPress={() => navigation.goBack()}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
      )}
      {/* <View style={styles.textViewStyle}> */}
      <Text style={styles.textStyle}>{title}</Text>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewHeaderstyle: {
    backgroundColor: '#745862',
    flexDirection: 'row',
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  iconViewStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    width: 10,
    left: 2,
  },
  textViewStyle: {
    marginStart: 3,
    alignItems: 'center',
    width: 100,
  },
  textViewStyleFalse: {
    marginLeft: 2,
    // alignSelf: 'center',
    alignItems: 'center',
    width: 100,
  },
  checkViewStyle: {
    flexDirection: 'row',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 4.5,
    color: '#fff',
  },
});

export default CustomHeader;
