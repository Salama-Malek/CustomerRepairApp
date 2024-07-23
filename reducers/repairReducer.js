const initialState = {
    repairs: [],
  };
  
  const repairReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_REPAIR':
        return {
          ...state,
          repairs: [...state.repairs, action.payload],
        };
      case 'SET_REPAIRS':
        return {
          ...state,
          repairs: action.payload,
        };
      case 'UPDATE_REPAIR':
        return {
          ...state,
          repairs: state.repairs.map((repair) =>
            repair.id === action.payload.id ? action.payload : repair
          ),
        };
      case 'DELETE_REPAIR':
        return {
          ...state,
          repairs: state.repairs.filter((repair) => repair.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default repairReducer;
  