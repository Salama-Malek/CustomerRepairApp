import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateRepair, deleteRepair, setRepairs } from '../actions/repairActions';
import { getAllRepairs, updateRepair as updateRepairInDB, deleteRepair as deleteRepairFromDB } from '../database/database';
import DateTimePicker from '@react-native-community/datetimepicker'; // Ensure you have installed this package


const EditRepairScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch();
  const repairs = useSelector((state) => state.repairs.repairs);

  useEffect(() => {
    getAllRepairs((data) => {
      dispatch(setRepairs(data));
    }, (error) => {
      console.log(error);
    });
  }, [dispatch]);

  const handleUpdateRepair = () => {
    if (selectedRepair) {
      updateRepairInDB(selectedRepair, () => {
        dispatch(updateRepair(selectedRepair));
        alert('Repair updated successfully');
        setSelectedRepair(null);
      }, (error) => {
        alert('Failed to update repair');
        console.log(error);
      });
    }
  };

  const handleDeleteRepair = (id) => {
    deleteRepairFromDB(id, () => {
      dispatch(deleteRepair(id));
      alert('Repair deleted successfully');
    }, (error) => {
      alert('Failed to delete repair');
      console.log(error);
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedRepair.repairDate;
    setShowDatePicker(false);
    setSelectedRepair({ ...selectedRepair, repairDate: currentDate });
  };

  const filteredRepairs = repairs.filter(repair =>
    repair.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by Customer Name"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <FlatList
        data={filteredRepairs}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text onPress={() => setSelectedRepair(item)}>{item.customerName}</Text>
            <Button title="Delete" onPress={() => handleDeleteRepair(item.id)} />
          </View>
        )}
      />
      {selectedRepair && (
        <View style={styles.editContainer}>
          <TextInput
            placeholder="Customer Name"
            value={selectedRepair.customerName}
            onChangeText={text => setSelectedRepair({ ...selectedRepair, customerName: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Device Brand"
            value={selectedRepair.deviceBrand}
            onChangeText={text => setSelectedRepair({ ...selectedRepair, deviceBrand: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Device Model"
            value={selectedRepair.deviceModel}
            onChangeText={text => setSelectedRepair({ ...selectedRepair, deviceModel: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Issue Description"
            value={selectedRepair.issueDescription}
            onChangeText={text => setSelectedRepair({ ...selectedRepair, issueDescription: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Spare Parts"
            value={selectedRepair.spareParts}
            onChangeText={text => setSelectedRepair({ ...selectedRepair, spareParts: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Total Price"
            value={selectedRepair.totalPrice}
            onChangeText={text => setSelectedRepair({ ...selectedRepair, totalPrice: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Repair Date"
            value={selectedRepair.repairDate.toLocaleDateString()}
            onFocus={() => setShowDatePicker(true)}
            style={styles.input}
          />
          {showDatePicker && (
            <DateTimePicker
              value={new Date(selectedRepair.repairDate)}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <Button title="Update Repair" onPress={handleUpdateRepair} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
  item: {
    padding: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editContainer: {
    marginTop: 20,
  },
});

export default EditRepairScreen;