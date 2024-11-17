import { SafeAreaView, StyleSheet } from 'react-native';
import HabitCard from './components/HabitCard'; // Importa el componente HabitCard

export default function App() {
    function handleHabitDeletion(habit) {
        console.log("Deleting " + habit);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Le pasamos el nombre del habito y la funcion que se ejecutara al apretar borrar */}
            <HabitCard name="Habito 1" onDelete={handleHabitDeletion} /> 
            <HabitCard name="Habito 2" onDelete={handleHabitDeletion} />
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
});
