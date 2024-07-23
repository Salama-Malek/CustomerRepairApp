import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRepairs } from '../actions/repairActions';
import { getAllRepairs } from '../database/database';

const ViewRepairsScreen = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const repairs = useSelector((state) => state.repairs.repairs);

  useEffect(() => {
    getAllRepairs((data) => {
      dispatch(setRepairs(data));
    }, (error) => {
      console.log(error);
    });
  }, [dispatch]);

  const filteredRepairs = repairs.filter(repair =>
    repair.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search by Customer Name" value={search} onChangeText={setSearch} style={styles.input} />
      <FlatList
        data={filteredRepairs}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.customerName}</Text>
            <Text>{item.deviceBrand}</Text>
            <Text>{item.deviceModel}</Text>
            <Text>{item.issueDescription}</Text>
            <Text>{item.spareParts}</Text>
            <Text>{item.totalPrice}</Text>
            <Text>{item.repairDate}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
  item: { padding: 16, borderBottomColor: 'gray', borderBottomWidth: 1 },
});

export default ViewRepairsScreen;
