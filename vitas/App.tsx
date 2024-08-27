import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [exerciseOfTheDay, setExerciseOfTheDay] = useState('');
  const [foodImages, setFoodImages] = useState<string[]>([]);
  const [sleepTimer, setSleepTimer] = useState(0);
  const [sleepStarted, setSleepStarted] = useState(false);
  
  const handleFrameChange = (frameNumber: number) => {
    setCurrentFrame(frameNumber);
  };

  const handleExerciseClick = (day: string) => {
    switch (day) {
      case 'Quarta':
        setExerciseOfTheDay('Natação');
        break;
      // Adicione outros dias da semana com seus exercícios aqui
      default:
        setExerciseOfTheDay('');
    }
  };

  const addFoodImage = (image: string) => {
    setFoodImages([...foodImages, image]);
  };

  const startSleepTimer = () => {
    setSleepStarted(true);
  };

  const stopSleepTimer = () => {
    setSleepStarted(false);
  };

  useEffect(() => {
    if (sleepStarted) {
      const timer = setInterval(() => {
        setSleepTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [sleepStarted]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>vitas</Text>
      </View>
      <View style={styles.content}>
        {currentFrame === 1 && (
          <View style={styles.frame}>
            <Text style={styles.title}>Seja bem vindo!</Text>
            <Text style={styles.subtitle}>Cadastre-se</Text>
            <TextInput style={styles.input} placeholder="Insira seu email" />
            <TextInput style={styles.input} placeholder="Insira sua senha" />
            <TextInput style={styles.input} placeholder="Confirme sua senha" />
            <TouchableOpacity style={styles.button} onPress={() => handleFrameChange(2)}>
              <Text style={styles.buttonText}>Já tem uma conta? Entre aqui</Text>
            </TouchableOpacity>
          </View>
        )}
        {currentFrame === 2 && (
          <View style={styles.frame}>
            <View style={styles.navigation}>
              <TouchableOpacity onPress={() => handleFrameChange(1)}>
                <Image style={styles.icon} source={require('./assets/back-arrow.png')} />
              </TouchableOpacity>
              <Text style={styles.navigationText}>Bem vindo(a), Usuário!</Text>
              <Image style={styles.icon} source={require('./assets/settings.png')} />
            </View>
            <View style={styles.menu}>
              <TouchableOpacity style={styles.menuButton} onPress={() => handleFrameChange(3)}>
                <Text style={styles.menuButtonText}>Exercícios</Text>
                <Image style={styles.menuIcon} source={require('./assets/running.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => handleFrameChange(5)}>
                <Text style={styles.menuButtonText}>Sono</Text>
                <Image style={styles.menuIcon} source={require('./assets/sleeping.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => handleFrameChange(4)}>
                <Text style={styles.menuButtonText}>Nutrição</Text>
                <Image style={styles.menuIcon} source={require('./assets/carrot.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => handleFrameChange(6)}>
                <Text style={styles.menuButtonText}>Coração</Text>
                <Image style={styles.menuIcon} source={require('./assets/heart.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => handleFrameChange(7)}>
                <Text style={styles.menuButtonText}>Medidas corporais</Text>
                <Image style={styles.menuIcon} source={require('./assets/scale.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => handleFrameChange(8)}>
                <Text style={styles.menuButtonText}>Registros Médicos</Text>
                <Image style={styles.menuIcon} source={require('./assets/medical-record.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => handleFrameChange(10)}>
                <Text style={styles.menuButtonText}>Fast Check</Text>
                <Image style={styles.menuIcon} source={require('./assets/fast-check.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Image style={styles.icon} source={require('./assets/calendar.png')} />
              <Image style={styles.icon} source={require('./assets/location.png')} />
              <Image style={styles.icon} source={require('./assets/star.png')} />
            </View>
          </View>
        )}
        {currentFrame === 3 && (
          <View style={styles.frame}>
            <View style={styles.navigation}>
              <TouchableOpacity onPress={() => handleFrameChange(2)}>
                <Image style={styles.icon} source={require('./assets/back-arrow.png')} />
              </TouchableOpacity>
              <Text style={styles.navigationText}>Exercícios</Text>
              <Image style={styles.icon} source={require('./assets/settings.png')} />
            </View>
            <View style={styles.exercise}>
              <Text style={styles.subtitle}>Exercício do dia:</Text>
              <Text style={styles.title}>{exerciseOfTheDay}</Text>
            </View>
            <View style={styles.exerciseDays}>
              <TouchableOpacity style={styles.exerciseDay} onPress={() => handleExerciseClick('Quarta')}>
                <Text style={styles.exerciseDayText}>Quarta</Text>
              </TouchableOpacity>
              {/* Adicione os demais dias da semana aqui */}
            </View>
            <View style={styles.footer}>
              <Image style={styles.icon} source={require('./assets/calendar.png')} />
              <Image style={styles.icon} source={require('./assets/location.png')} />
              <Image style={styles.icon} source={require('./assets/star.png')} />
            </View>
          </View>
        )}
        {currentFrame === 4 && (
          <View style={styles.frame}>
            <View style={styles.navigation}>
              <TouchableOpacity onPress={() => handleFrameChange(2)}>
                <Image style={styles.icon} source={require('./assets/back-arrow.png')} />
              </TouchableOpacity>
              <Text style={styles.navigationText}>Nutrição</Text>
              <Image style={styles.icon} source={require('./assets/settings.png')} />
            </View>
            <View style={styles.nutrition}>
              <Text style={styles.subtitle}>Horário das refeições</Text>
              <Text style={styles.subtitle}>Horários selecionados: 9:00, 12:30, 19:00</Text>
              <Text style={styles.subtitle}>Registre a sua refeição</Text>
              <TouchableOpacity style={styles.button} onPress={() => addFoodImage('https://i.ibb.co/hQ6zM4G/placeholder-image.jpg')}>
                <Text style={styles.buttonText}>Adicionar alimento</Text>
                <Image style={styles.icon} source={require('./assets/add-icon.png')} />
              </TouchableOpacity>
              <Text style={styles.subtitle}>Receita do dia</Text>
              <View style={styles.foodImages}>
                {foodImages.map((image, index) => (
                  <Image key={index} style={styles.foodImage} source={{ uri: image }} />
                ))}
              </View>
              <TouchableOpacity style={styles.button} onPress={() => console.log('Ver receitas')}>
                <Text style={styles.buttonText}>Ver receitas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Image style={styles.icon} source={require('./assets/calendar.png')} />
              <Image style={styles.icon} source={require('./assets/location.png')} />
              <Image style={styles.icon} source={require('./assets/star.png')} />
            </View>
          </View>
        )}
        {currentFrame === 5 && (
          <View style={styles.frame}>
            <View style={styles.navigation}>
              <TouchableOpacity onPress={() => handleFrameChange(2)}>
                <Image style={styles.icon} source={require('./assets/back-arrow.png')} />
              </TouchableOpacity>
              <Text style={styles.navigationText}>Sono</Text>
              <Image style={styles.icon} source={require('./assets/settings.png')} />
            </View>
            <View style={styles.sleep}>
              <Text style={styles.subtitle}>Seu sono hoje:</Text>
              <View style={styles.sleepStats}>
                <View style={styles.sleepStat}>
                  <Text style={styles.sleepStatText}>44%</Text>
                  <Text style={styles.sleepStatText}>Acordado</Text>
                  <Text style={styles.sleepStatText}>2h 45m</Text>
                </View>
                <View style={styles.sleepStat}>
                  <Text style={styles.sleepStatText}>30%</Text>
                  <Text style={styles.sleepStatText}>Sono leve</Text>
                  <Text style={styles.sleepStatText}>3h 20m</Text>
                </View>
              </View>
              <Text style={styles.subtitle}>Tempo de sono</Text>
              <Text style={styles.title}>3h 20m</Text>
              <Text style={styles.subtitle}>Fatores do Sono</Text>
              <TouchableOpacity style={styles.sleepFactor} onPress={() => console.log('Leite quente')}>
                <Image style={styles.icon} source={require('./assets/milk.png')} />
                <Text style={styles.sleepFactorText}>Leite quente</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sleepFactor} onPress={() => console.log('Alongamento')}>
                <Image style={styles.icon} source={require('./assets/stretching.png')} />
                <Text style={styles.sleepFactorText}>Alongamento</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sleepFactor} onPress={() => console.log('Yoga')}>
                <Image style={styles.icon} source={require('./assets/yoga.png')} />
                <Text style={styles.sleepFactorText}>Yoga</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sleepFactor} onPress={() => console.log('Refeição tardia')}>
                <Image style={styles.icon} source={require('./assets/dinner.png')} />
                <Text style={styles.sleepFactorText}>Refeição tardia</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sleepFactor} onPress={() => console.log('Estresse')}>
                <Image style={styles.icon} source={require('./assets/stress.png')} />
                <Text style={styles.sleepFactorText}>Estresse</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sleepFactor} onPress={() => console.log('Cafeína')}>
                <Image style={styles.icon} source={require('./assets/coffee.png')} />
                <Text style={styles.sleepFactorText}>Cafeína</Text>
              </TouchableOpacity>
              <Text style={styles.subtitle}>Outras páginas para você ver:</Text>
              <TouchableOpacity style={styles.button} onPress={() => console.log('Exercícios')}>
                <Text style={styles.buttonText}>Exercícios</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => startSleepTimer()}>
                <Text style={styles.buttonText}>Dormir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => stopSleepTimer()}>
                <Text style={styles.buttonText}>Acordar</Text>
              </TouchableOpacity>
              <Text style={styles.sleepTimer}>Tempo dormindo: {sleepTimer} segundos</Text>
            </View>
            <View style={styles.footer}>
              <Image style={styles.icon} source={require('./assets/calendar.png')} />
              <Image style={styles.icon} source={require('./assets/location.png')} />
              <Image style={styles.icon} source={require('./assets/star.png')} />
            </View>
          </View>
        )}
        {/* Adicione as outras telas aqui... */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    height: 80,
    backgroundColor: '#00A368',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  frame: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00A368',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00A368',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  navigationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  menu: {
    flex: 1,
    marginBottom: 20,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 10,
  },
  menuButtonText: {
    fontSize: 16,
    marginRight: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  exercise: {
    marginBottom: 20,
  },
  exerciseDays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  exerciseDay: {
    backgroundColor: '#00A368',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 80,
    alignItems: 'center',
  },
  exerciseDayText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  nutrition: {
    marginBottom: 20,
  },
  foodImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  foodImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
  sleep: {
    marginBottom: 20,
  },
  sleepStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sleepStat: {
    alignItems: 'center',
  },
  sleepStatText: {
    fontSize: 16,
  },
  sleepFactor: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 10,
  },
  sleepFactorText: {
    fontSize: 16,
    marginLeft: 10,
  },
  sleepTimer: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default App;