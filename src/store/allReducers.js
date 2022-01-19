import {combineReducers} from 'redux';
import AccountReducer from '../screens/Account/redux/reducer';
import Explore from '../screens/Explore/redux/reducer';
import HelpCenterReducer from '../screens/HelpCenter/redux/reducer';
import Home from '../screens/Home/redux/reducer';
import LoginReducer from '../screens/Login/redux/reducer';
import MyListReducer from '../screens/MyList/redux/reducer';
import Play from '../screens/Play/redux/reducer';
import RegisterReducer from '../screens/Register/redux/reducer';


export const allReducers = combineReducers({
  Home,
  Explore,
  Play,
  AccountReducer,
  HelpCenterReducer,
  LoginReducer,
  MyListReducer,
  RegisterReducer,
});
