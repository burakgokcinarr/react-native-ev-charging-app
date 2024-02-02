import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// Custom MapView Style
import MapViewStyle from '../../../styles/MapViewStyle.json';
import * as Location from 'expo-location';
import { Octicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

const dummy_data = require('../../../../dummy.json');

export default function ChargeFind() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      //console.log(location.coords.latitude)
      //console.log(location.coords.longitude)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        initialRegion={
          {
            latitude: location?.coords?.latitude,
            longitude: location?.coords?.longitude,
          }
        }
        minZoomLevel={4}  // default => 0
        maxZoomLevel={10} // default => 20
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
      >
      {
        location && (
          <>
            <Marker 
              coordinate={
                {
                  latitude: location.coords.latitude, 
                  longitude: location.coords.longitude
                }
              }
              title=''
              description=''
            >
            <Image source={require('../../../../assets/images/marker.png')} width={30} height={30} />
            </Marker>
            {
              dummy_data.map((item, index) => {
                return (
                  <Marker 
                    key={index}
                    coordinate={
                      {
                        latitude: item.latitude, 
                        longitude: item.longitude
                      }
                    }
                    title={item.title}
                    description={item.description}
                  >
                  <Image source={require('../../../../assets/images/marker2.png')} width={30} height={30} />
                  </Marker>
                )
              })
            }
          </>
        )
      }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});