
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { getPromptResponse } from './PromptService';

export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const result = await getPromptResponse(input);
    setResponse(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Gemini Prompt Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your thoughts..."
        value={input}
        onChangeText={setInput}
        multiline
      />
      <Button title="Generate Insight" onPress={handleSubmit} />
      <ScrollView style={styles.outputBox}>
        <Text style={styles.output}>{response}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 10, height: 120 },
  outputBox: { marginTop: 20 },
  output: { fontSize: 16 },
});
