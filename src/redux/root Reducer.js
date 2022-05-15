import {combineReducers} from 'redux';
import userReducer from '../ducks/user/reducers';
import datePickerReducer from '../ducks/datePickersValues/reducers';
import searchReducer from '../ducks/search/reducers';
import selectReducer from '../ducks/selectValue/reducers';

export default combineReducers({
  user: userReducer,
  datePickerValues: datePickerReducer,
  search: searchReducer,
  selectValue: selectReducer,
});
