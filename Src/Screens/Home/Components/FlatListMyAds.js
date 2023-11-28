import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FlatlistMyAds = ({onPress, onDeletePress, AllAds}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress(AllAds?.item?.id)}
        style={styles.touchableOpacityStyle}>
        <Image
          style={styles.imageStyle}
          source={{uri: AllAds?.item?.thumbnail}}
        />
        <View>
          <Text style={styles.textStylesProductName}>
            Title: {AllAds?.item?.title}
          </Text>
          <Text style={styles.textStylesProductName}>
            Price: ${AllAds?.item?.price}
          </Text>
          <TouchableOpacity
            onPress={onDeletePress}
            style={styles.onDeletePressStyle}>
            <Text style={styles.deleteitStyle}> Delete it</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 110,
    marginTop: 20,
  },
  touchableOpacityStyle: {
    backgroundColor: '#fff',
    borderRadius: 4,
    width: '90%',
    flexDirection: 'row',
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
    elevation: 2,
    padding: 5,
  },
  textStylesProductName: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'normal',
    margin: 10,
    width: '90%',
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  textStylesDelete: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 2,
  },
  TouchableOpacityText: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#567866',
    padding: 10,
    borderRadius: 10,
  },

  onDeletePressStyle: {
    borderRadius: 4,
    margin: 1,
    width: '70%',
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
    elevation: 2,
    padding: 5,
  },
  deleteitStyle: {
    color: '#FF0000',
    marginBottom: 1,
    fontWeight: 'bold',
  },
});

export default FlatlistMyAds;
