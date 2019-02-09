import { combineReducers } from 'redux';
import messReducer from './messReducer';

export default combineReducers({
    message: messReducer
});