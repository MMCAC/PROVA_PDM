import { Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import Component from '../../components/component'

import { styles } from './style'

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState('');

  function addTask() {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Math.random().toString(), text: task, isEditing: false }]);
      setTask('');
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(item) {
    setEditingTaskId(item.id);
    setEditingText(item.text);
    setTasks(tasks.map(task => task.id === item.id ? { ...task, isEditing: true } : task));
  }

  function saveTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: editingText.trim(), isEditing: false } : task
    ));
    setEditingTaskId(null);
    setEditingText('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TREINO</Text>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={task}
          placeholder='Insert a new exercise'
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.button}>
          <Entypo name='circle-with-plus' size={40} onPress={addTask} />
        </TouchableOpacity>
      </View>

      <FlatList style={styles.flat} data={tasks} renderItem={({ item }) =>
          <Component info={item.text} onPress={() => deleteTask(item.id)} onEdit={() => editTask(item)} onSave={() => saveTask(item.id)} isEditing={item.isEditing} editingText={editingText} setEditingText={setEditingText}
          />}
          keyExtractor={(item) => item.id}
      />
    </View>
  )
}

