import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScoreBoard from './src/components/ScoreBoard';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Menyediakan nama tim untuk komponen ScoreBoard */}
      <ScoreBoard teamA="Team A" teamB="Team B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});