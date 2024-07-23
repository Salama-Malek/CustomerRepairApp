export const addRepair = (repair) => ({
    type: 'ADD_REPAIR',
    payload: repair,
  });
  
  export const setRepairs = (repairs) => ({
    type: 'SET_REPAIRS',
    payload: repairs,
  });
  
  export const updateRepair = (repair) => ({
    type: 'UPDATE_REPAIR',
    payload: repair,
  });
  
  export const deleteRepair = (id) => ({
    type: 'DELETE_REPAIR',
    payload: id,
  });
  