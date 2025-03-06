import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  backTo?: string;
}

export default function Header({ title, showBack = false, backTo = '/setup' }: HeaderProps) {
  const router = useRouter();
  
  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(backTo)}
        >
          <ArrowLeft color="#FFCC00" size={24} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003399',
    paddingVertical: 16,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: '#FFCC00',
    fontSize: 24,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
});