import {log} from 'console';
import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import CustomHeader from '../Components/CustomHeader';

const ProductsDetails = ({route}) => {
  const {item} = route?.params?.item;
  console.log('6789', route?.params);
  return (
    <ScrollView style={styles.container}>
      {/* <CustomHeader title={'myAds'} onPress={() => goBack} /> */}
      <Image style={styles.thumbnail} source={{uri: item?.thumbnail}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.rating}>Rating: {item.rating}</Text>
        <Text style={styles.stock}>Stock: {item.stock}</Text>
        <Text style={styles.brand}>Brand: {item.brand}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
      </View>
      <View style={styles.imageContainer}>
        {item?.images?.map((image, index) => (
          <Image
            key={index}
            style={styles.productImage}
            source={{uri: image}}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  detailsContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
  },
  stock: {
    fontSize: 16,
    marginBottom: 8,
  },
  brand: {
    fontSize: 16,
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
  },
  imageContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImage: {
    width: '30%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default ProductsDetails;
