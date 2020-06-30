import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './theme/theme.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'user']
}

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);