import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
  RefreshControl,
  StyleSheet,
  Image,
} from 'react-native';
import { images } from '../utils/images';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const UserList = ({
  users,
  search,
  onSearch,
  loading,
  refreshing,
  hasMore,
  onLoadMore,
  onRefresh,
  onPressItem,
}) => {

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPressItem(item)} style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{'User List'}</Text>

      <View style={styles.inputWrapper}>
        <Image
          source={images.Search}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search by name..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={onSearch}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent) && !loading && hasMore) {
            onLoadMore();
          }
        }}
        ListFooterComponent={() =>
          hasMore && !loading ? (
            <TouchableOpacity
              onPress={onLoadMore}
              style={styles.loadMoreImageContainer}
            >
              <Image
                source={images.Reload}
                style={styles.loadMoreImage}
              />
            </TouchableOpacity>
          ) : loading ? (
            <ActivityIndicator style={{ marginVertical: 16 }} color="#3B82F6" />
          ) : null
        }
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F4F6', 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#E0E7FF',
    borderBottomColor: '#c7d2fe',
    borderBottomWidth: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    paddingVertical: 0,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937', 
  },
  email: {
    marginTop: 4,
    fontSize: 14,
    color: '#6B7280',
  },
  loadMoreImageContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  loadMoreImage: {
    width: 26,
    height: 26,
    tintColor: '#3B82F6',
  },
});
