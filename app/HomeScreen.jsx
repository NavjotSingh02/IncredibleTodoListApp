import React, { useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from './MainLayout';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function HomeScreen({ navigation }) {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} tasks={tasks} />
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