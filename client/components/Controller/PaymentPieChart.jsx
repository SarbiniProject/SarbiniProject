import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PaymentPieChart = () => {
  const data = [
    { name: 'Mon', population: 100, color: '#3498db', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Tue', population: 150, color: '#e74c3c', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Wed', population: 80, color: '#2ecc71', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Thu', population: 200, color: '#f39c12', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Fri', population: 120, color: '#9b59b6', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
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

export default PaymentPieChart;
