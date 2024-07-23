import Realm from 'realm';

const RepairSchema = {
  name: 'Repair',
  properties: {
    id: 'int',
    customerName: 'string',
    deviceBrand: 'string',
    deviceModel: 'string',
    issueDescription: 'string',
    spareParts: 'string',
    totalPrice: 'float',
    repairDate: 'date',
  },
  primaryKey: 'id',
};

const realm = new Realm({ schema: [RepairSchema] });

export const createRepair = (repair) => {
  realm.write(() => {
    realm.create('Repair', repair);
  });
};

export const getAllRepairs = () => {
  return realm.objects('Repair');
};

export const updateRepair = (repair) => {
  realm.write(() => {
    realm.create('Repair', repair, Realm.UpdateMode.Modified);
    // realm.create('Repair', repair, Realm.UpdateMode);

  });
};

export const deleteRepair = (id) => {
  realm.write(() => {
    const repair = realm.objectForPrimaryKey('Repair', id);
    realm.delete(repair);
  });
};
