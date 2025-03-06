import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DeviceInfoProps {
  unitNumber: string;
}

export default function DeviceInfo({ unitNumber }: DeviceInfoProps) {
  if (!unitNumber) return null;
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Gate Number: {unitNumber}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003399',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    color: '#FFCC00',
    textAlign: 'center',
    fontWeight: '500',
  },
});