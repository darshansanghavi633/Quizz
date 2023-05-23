import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function Home(props) {
  return (
    <View>
      <Title />
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
        <TouchableOpacity onPress={() => props.navigation.navigate('Quizz')}>
          <Text>Start</Text>
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
