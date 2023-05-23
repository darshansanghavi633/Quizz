import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Result(props) {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfv77RQ_3dToqHCgfgqJGv6ZHw5LMqNq-WES8Lxr_sBpquJtOE',
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
