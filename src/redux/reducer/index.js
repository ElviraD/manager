// reducer
// import { combineReducers } from 'redux';
import { type } from '../actions'

const menuchange = (state, action) => {
  switch(action.type){
    case type.SWITCH_MENU: 
      return {
        ...state,
        menuName: action.menuName
      };
    default: 
      return {...state};
  }
}
// export default combineReducers({menuchange});
export default menuchange;