import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MessageSquare } from 'lucide-react-native';
import { Gate } from '../components/CustomIcons';
import Header from '../components/Header';
import DeviceInfo from '../components/DeviceInfo';

export default function HomePage() {
  const router = useRouter();
  const [unitNumber, setUnitNumber] = useState('');
  const [password, setPassword] = useState('1234');
  const [relaySettings, setRelaySettings] = useState({
    accessControl: 'AUT',
    latchTime: '000',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedUnitNumber = await AsyncStorage.getItem('unitNumber');
      const savedPassword = await AsyncStorage.getItem('password');
      const savedRelaySettings = await AsyncStorage.getItem('relaySettings');

      if (savedUnitNumber) setUnitNumber(savedUnitNumber);
      if (savedPassword) setPassword(savedPassword);
      if (savedRelaySettings) setRelaySettings(JSON.parse(savedRelaySettings));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const sendSMS = (command) => {
    const smsUrl = Platform.select({
      ios: `sms:${unitNumber}&body=${encodeURIComponent(command)}`,
      android: `sms:${unitNumber}?body=${encodeURIComponent(command)}`,
      default: `sms:${unitNumber}?body=${encodeURIComponent(command)}`,
    });
    
    Linking.canOpenURL(smsUrl)
      .then(supported => {
        if (!supported) {
          alert('SMS is not available on this device');
          return;
        }
        return Linking.openURL(smsUrl);
      })
      .catch(err => console.error('An error occurred', err));
  };

  const turnRelayOn = () => sendSMS(`${password}CC`);
  const turnRelayOff = () => sendSMS(`${password}DD`);

  return (
    <View style={styles.container}>
      <Header title="Gate Control" />
      <DeviceInfo unitNumber={unitNumber} />
      
      <View style={styles.content}>
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.button} onPress={turnRelayOn}>
            <View style={styles.buttonContent}>
              <Gate size={48} color="#FFCC00" />
              <Text style={styles.buttonText}>Open Gate</Text>
            </View>
            <MessageSquare size={24} color="#FFCC00" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={turnRelayOff}>
            <View style={styles.buttonContent}>
              <Gate size={48} color="#FFCC00" />
              <Text style={styles.buttonText}>Close Gate</Text>
            </View>
            <MessageSquare size={24} color="#FFCC00" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.setupButton} 
          onPress={() => router.push('/setup')}
        >
          <Text style={styles.setupButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  controlsContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: '#003399',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFCC00',
  },
  setupButton: {
    backgroundColor: '#FFCC00',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  setupButtonText: {
    color: '#003399',
    fontSize: 18,
    fontWeight: '600',
  },
});