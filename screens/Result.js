import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Result(props) {
  const {score} = props.route.params;
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
        <Text style={styles.text}>Your score is {score}</Text>
        {score < 7 ? (
          <>
            <Text style={styles.feedback}>Keep practicing.</Text>
            <Text style={styles.feedback}>Improvement is key.</Text>
          </>
        ) : (
          <Text style={styles.feedback}>Great job! Almost perfect score!</Text>
        )}
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
    marginTop: 25,
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
  feedback: {
    fontSize: 25,
    color: 'red',
    fontFamily: 'fantasy',
    textAlign: 'center',
  },
});
