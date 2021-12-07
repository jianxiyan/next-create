import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
//安装浏览器可视化插件
import { composeWithDevTools } from 'redux-devtools-extension';
 
const countInitialState = {
	count: 0
}

const userInitialState = {
	username: 'jokcy'
}

const ADD = 'ADD'
function countReducer(state = countInitialState, action) {
  console.log(state, action)
	switch(action.type) {
    case ADD:
      	return { count: state.count + (action.num || 1) }
    default:
      	return state
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer(state = userInitialState, action) {
	switch(action.type) {
    case UPDATE_USERNAME:
      	return {
          ...state,
        	username: action.name
        }
    default:
      	return state
  }
}

//合并reducer
const allReducers = combineReducers({
	counter: countReducer,
    user: userReducer
})

//action creatore
function add(num) {
	return {
  	type: ADD,
    num
  }
}

function addAsync(num) {
	return (dispatch, getState) => {
  	setTimeout(() => {
    	dispatch(add(num))
    }, 1000)
  }
}

export default function initialzeStore(state) {
	const store = createStore(
      allReducers, 
     	Object.assign({}, {
        counter: countInitialState,
        user: userInitialState,
      }, state),
      composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}