import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from './MainLayout';

function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
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

export default HomeScreen;