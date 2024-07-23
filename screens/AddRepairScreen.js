import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addRepair } from '../actions/repairActions';
import { createRepair } from '../database/database';

const AddRepairScreen = () => {
  const [customerName, setCustomerName] = useState('');
  const [deviceBrand, setDeviceBrand] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [spareParts, setSpareParts] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [repairDate, setRepairDate] = useState('');

  const dispatch = useDispatch();

  const handleAddRepair = () => {
    const newRepair = {
      customerName,
      deviceBrand,
      deviceModel,
      issueDescription,
      spareParts,
      totalPrice,
      repairDate,
    };

    createRepair(newRepair, () => {
      dispatch(addRepair(newRepair));
      alert('Repair added successfully');
    }, (error) => {
      alert('Failed to add repair');
      console.log(error);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Customer Name" value={customerName} onChangeText={setCustomerName} style={styles.input} />
      <TextInput placeholder="Device Brand" value={deviceBrand} onChangeText={setDeviceBrand} style={styles.input} />
      <TextInput placeholder="Device Model" value={deviceModel} onChangeText={setDeviceModel} style={styles.input} />
      <TextInput placeholder="Issue Description" value={issueDescription} onChangeText={setIssueDescription} style={styles.input} />
      <TextInput placeholder="Spare Parts" value={spareParts} onChangeText={setSpareParts} style={styles.input} />
      <TextInput placeholder="Total Price" value={totalPrice} onChangeText={setTotalPrice} style={styles.input} />
      <TextInput placeholder="Repair Date" value={repairDate} onChangeText={setRepairDate} style={styles.input} />
      <Button title="Add Repair" onPress={handleAddRepair} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
});

export default AddRepairScreen;
