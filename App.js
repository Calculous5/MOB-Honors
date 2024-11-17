import { SafeAreaView, StyleSheet, Text, TextInput, Button, FlatList, View, Keyboard, Alert } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import HabitCard from './components/card'; 

export default function App() {
    const [habits, setHabits] = useState([]); 
    const [newHabit, setNewHabit] = useState(''); 

    function handleAddHabit() {
        if (newHabit.trim()) {
            setHabits([...habits, newHabit]); 
            setNewHabit(''); 
        } else {
          Alert.alert('El nombre del habito no puede estar vacio')
        }
        Keyboard.dismiss()
    }

    function handleHabitDeletion(habit) {
        setHabits(habits.filter(item => item !== habit)); 
    }

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    var elapsado = 0;
    const contador_tiempo = () => {
      intervalRef.current = setInterval(() => {
          setTime(elapsado += 1)
      }, 1000);
    };

    useEffect(() => {
      contador_tiempo() }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Ingresa tu nuevo Hábito</Text>
            <Text style={styles.clock}> La apliacion lleva {time} segundos abierta </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nuevo hábito"
                    value={newHabit}
                    onChangeText={setNewHabit}
                />
                <Button title="Agregar" onPress={handleAddHabit} />
            </View>


            <FlatList
                data={habits}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <HabitCard name={item} onDelete={() => handleHabitDeletion(item)} />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },

    clock: {

      fontSize: 14,
      textAlign: 'center',

    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginRight: 10,
        borderRadius: 4,
    },
});
