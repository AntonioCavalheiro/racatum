import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <Text></Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>99999</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Bem vindo(a), Usuário!</Text>
        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Exercícios</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Notícias</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Sono</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Nutrição</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionIcon}>♥</Text>
            <Text style={styles.actionText}>Coração</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionIcon}>🧘</Text>
            <Text style={styles.actionText}>Medidas corporais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionIcon}>📝</Text>
            <Text style={styles.actionText}>Registros Médicos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.callButton}>
          <TouchableOpacity style={styles.callIcon}>
            <Text>📞</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerIcon}>🗓️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerIcon}>🗃️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerIcon}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerIcon}>⭐</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuButton: {
    padding: 8,
  },
  searchButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    marginBottom: 16,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  actionText: {
    fontSize: 16,
  },
  callButton: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  callIcon: {
    fontSize: 32,
    backgroundColor: '#ff4d4d',
    borderRadius: 50,
    padding: 8,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footerButton: {
    padding: 8,
  },
  footerIcon: {
    fontSize: 24,
  },
});

export default Tab;
