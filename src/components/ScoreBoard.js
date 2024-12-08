import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

export default function ScoreBoard({ teamA, teamB }) {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncrement = (team) => {
    if (team === 'A') {
      if (scoreA + 1 === 10) Alert.alert(`${teamA} Wins!`);
      setScoreA(scoreA + 1);
    } else {
      if (scoreB + 1 === 10) Alert.alert(`${teamB} Wins!`);
      setScoreB(scoreB + 1);
    }
  };

  const handleDecrement = (team) => {
    if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
    if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      {/* Tampilan Tim A */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrement('A')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleDecrement('A')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tampilan Tim B */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrement('B')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleDecrement('B')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2A2A2A', // Dark gray background
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    margin: 15,
    width: '95%',
  },
  teamContainer: {
    marginVertical: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4C4C4C', // Slightly lighter gray for team containers
    borderRadius: 10,
    borderColor: '#FFAA00', // Goldish border for better contrast
    borderWidth: 2,
    width: '90%',
  },
  teamName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFAA00', // Gold color for team names
    marginBottom: 10,
  },
  score: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#F1F1F1', // Light color for scores
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#FFAA00', // Gold background for buttons
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#2A2A2A', // Dark text color for contrast
    fontSize: 28,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#FF5733', // Red-orange background for reset button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
