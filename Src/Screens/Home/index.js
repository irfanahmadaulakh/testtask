import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {log} from 'console';
import FlatlistMyAds from './Components/FlatListMyAds';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [ads, setads] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getAllAds();
  }, []);

  const getAllAds = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: 'https://dummyjson.com/products',
      responseType: 'json',
    }).then(function (response) {
      //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));
      console.log('Resjkfsdsfdfsds: ', response?.data?.products);
      setads(response?.data?.products);
      setLoading(false);
    });
  };

  const DeleteAd = id => {
    console.log(' 45345', id);
    // Show an alert for confirmation
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this ad?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Filter out the item with the specified id
            const updatedAds = ads.filter(item => item.id !== id);
            // Update the state to reflect the new array without the deleted item
            setads(updatedAds);
            // Optionally, you can perform an API call to delete the ad on the server
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <CustomHeader title={t('myAds')} onPress={() => goBack} /> */}
        <View style={styles.flatListStyle}>
          <FlatList
            contentContainerStyle={{paddingHorizontal: 10}}
            showsVerticalScrollIndicator={false}
            numColumns={'1'}
            data={ads}
            renderItem={item => (
              <FlatlistMyAds
                AllAds={item}
                onPress={id => navigation.navigate('ProductsDetails', {item})}
                onDeletePress={() => DeleteAd(item.item.id)}
              />
            )}
          />
        </View>
      </ScrollView>
      {/* {loading && <ActivityIndicator size="large" color={'#000'} />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35353',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListStyle: {
    marginTop: 20,
    alignSelf: 'center',
  },
  textStyleNotingFound: {
    marginTop: 50,
    alignSelf: 'center',
    color: '#564752',
    fontSize: 5,
  },
});
export default Home;
