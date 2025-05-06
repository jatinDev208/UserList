import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Header = ({ title, onPressSearch }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPressSearch} style={styles.searchIconWrapper}>
        <Image
          source={require('../assets/search.png')} // Ensure you have a search icon in your assets
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchIconWrapper: {
    padding: 8,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
  },
});
