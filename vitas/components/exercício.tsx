import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Exercises = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const exercises = {
    Domingo: {
      icon: '🏃', 
      description: 'Corrida de 5km'
    },
    Segunda: {
      icon: '🏋', 
      description: 'Treino de musculação'
    },
    Terça: {
      icon: '🏊', 
      description: 'Natação'
    },
    Quarta: {
      icon: '🚲', 
      description: 'Ciclismo'
    },
    Quinta: {
      icon: '🧘', 
      description: 'Yoga'
    },
    Sexta: {
      icon: '🚶', 
      description: 'Caminhada'
    },
    Sábado: {
      icon: '🤸', 
      description: 'Treino funcional'
    },
  };

  const handleDayPress = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios</Text>
      <Text style={styles.subtitle}>Exercício do dia</Text>

      <View style={styles.exerciseContainer}>
        {selectedDay ? (
          <>
            <Text style={styles.exerciseIcon}>{exercises[selectedDay].icon}</Text>
            <Text style={styles.exerciseDescription}>{exercises[selectedDay].description}</Text>
          </>
        ) : (
          <Text style={styles.placeholder}>Selecione um dia</Text>
        )}
      </View>

      <View style={styles.daysContainer}>
        {Object.keys(exercises).map((day) => (
          <TouchableOpacity
            key={day}
            style={[styles.dayButton, selectedDay === day && styles.selectedDay]}
            onPress={() => handleDayPress(day)}
          >
            <Text style={styles.dayButtonText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  exerciseIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  exerciseDescription: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
    color: '#999',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: '48%',
  },
  selectedDay: {
    backgroundColor: '#007bff',
  },
  dayButtonText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },
});

export default Exercises;