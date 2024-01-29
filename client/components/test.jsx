import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory-native';

const Test = () => {
  const data = [
    { x: 'Mon', y: 120 },
    { x: 'Tue', y: 150 },
    { x: 'Wed', y: 80 },
    { x: 'Thu', y: 200 },
    { x: 'Fri', y: 120 },
    // Add more data points as needed
  ];

  return (
    <View style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis tickValues={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} />
        <VictoryAxis dependentAxis />
        <VictoryLine data={data} />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Test;
