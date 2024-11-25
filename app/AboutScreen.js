import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from './MainLayout';

function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;