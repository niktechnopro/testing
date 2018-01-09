import { combineReducers } from 'redux';
import SearchActionReducer from './SearchActionReducer';
import AuthReducer from './AuthReducer';
import SelectMarkerReducer from './SelectMarkerReducer';



const RootReducer = combineReducers({
	searchResults : SearchActionReducer, //when user is searching for doctor
	auth: AuthReducer, //for login and reg
	selectMarker: SelectMarkerReducer
})

export default RootReducer;