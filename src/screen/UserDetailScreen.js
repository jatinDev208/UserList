import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const UserDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{'User Detail'}</Text>

      <View style={styles.card}>
        <Text style={styles.name}>{user.name}</Text>

        <View style={styles.detailRow}>
          <Text style={styles.label}>{'Email:'}</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>{'Phone:'}</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>{'Address:'}</Text>
          <Text style={styles.value}>
            {user.address?.street}, {user.address?.city}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'Back'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f2f5',
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    fontSize: 24,
    color: '#1E3A8A',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 18,
    backgroundColor: '#E0E7FF',
    borderBottomWidth: 1,
    borderBottomColor: '#c7d2fe',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 18,
    textAlign: 'center',
  },
  detailRow: {
    marginBottom: 16,
  },
  label: {
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#111827',
  },
  backButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 25,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
