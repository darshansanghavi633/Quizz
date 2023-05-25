import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

export default function Quiz(props) {
  const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

  const [quizz, setQuizz] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [wrong, setWrong] = useState(null);
  const [count, setCount] = useState(0);

  const getQuiz = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuizz(data.results[count].question);
    setCorrect(data.results[count].correct_answer);
    setWrong(data.results[count].incorrect_answers);
  };
  useEffect(() => {
    getQuiz();
  }, [count]);

  const nextQuestion = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {quizz && <Text style={styles.question}>{quizz}</Text>}
      </View>
      <View>
        <TouchableOpacity style={styles.options}>
          {wrong && <Text style={styles.option}>{wrong[0]}</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          {wrong && <Text style={styles.option}>{wrong[1]}</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          {correct && <Text style={styles.option}>{correct}</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          {wrong && <Text style={styles.option}>{wrong[2]}</Text>}
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextQuestion}>
          <Text>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Result')}>
          <Text>END</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    marginTop: 50,
    width: 100,
    height: 50,
    backgroundColor: '#56cfe1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  question: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  option: {
    fontSize: 20,
    textAlign: 'center',
  },
  options: {
    height: 40,
    width: '100%',
    backgroundColor: '#56cfe1',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
