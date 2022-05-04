import {combineReducers} from 'redux';
import userReducer from '../ducks/user/reducers';
import datePickerReducer from '../ducks/datePickersValues/reducers';

export default combineReducers({
  user: userReducer,
  datePickerValues: datePickerReducer,
});
