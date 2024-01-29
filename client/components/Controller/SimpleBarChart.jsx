import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const SimpleBarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [100, 150, 80, 200, 120],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={300}
        height={200}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
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

export default SimpleBarChart;
