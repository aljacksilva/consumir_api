// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import auth from './auth/reducer';

export default combineReducers({
  auth,
});
