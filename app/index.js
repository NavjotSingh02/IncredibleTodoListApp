
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  const addTask = (task) => {
    // Implement the logic to add a new task
    setTasks([...tasks, task]);

  };
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Styles can be removed from here as they are already defined in the respective components
});

export default App;
