import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Result(props) {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.text}>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: 'https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?w=740&t=st=1684906737~exp=1684907337~hmac=5f7ed230d943f4f2afffa86ac4f9cb568b1e1aa286d6bb15f8644b99044a3672',
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bannerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
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
  button: {
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor: '#56cfe1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    marginBottom: 15,
  },
  text: {
    fontSize: 40,
    fontFamily: 'fantasy',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 25,
  },
});
