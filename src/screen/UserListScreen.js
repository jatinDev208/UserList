import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import UserList from '../component/UserList';

const PAGE_LIMIT = 5;

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const loadUsers = async (pageNumber) => {
    if (loading && !refreshing) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=${PAGE_LIMIT}`
      );

      const newUsers = response.data;

      if (pageNumber === 1) {
        setUsers(newUsers);
      } else {
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
      }

      setHasMore(newUsers.length === PAGE_LIMIT);
    } catch (error) {
      Alert.alert('Error', 'Failed to load users');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setHasMore(true);
    setPage(1);         
    loadUsers(1);       
  };
  

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleUserPress = (user) => {
    setSearch('');
    navigation.navigate('UserDetail', { user });
  };

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  return (
    <UserList
      users={users}
      search={search}
      onSearch={setSearch}
      loading={loading}
      refreshing={refreshing}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
      onRefresh={handleRefresh}
      onPressItem={handleUserPress}
    />
  );
};

export default UserListScreen;
