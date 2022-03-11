import { combineReducers } from 'redux'
import App from './App.reducer'
import User from './User.reducer'
import State from './State.reducer'
import Options from './Options.reducer'

export default combineReducers({
	App,
	User,
	State,
	Options
})
