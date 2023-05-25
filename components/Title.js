import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.text}>Quizz</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    marginBottom: 15,
  },
  text: {
    fontSize: 50,
    fontFamily: 'fantasy',
    fontWeight: 'bold',
  },
});
