import { combineReducers } from 'redux';
import YoutubeReducer from './YoutubeReducer';

const rootReducer = combineReducers({
  youtube: YoutubeReducer,
});

export default rootReducer;
