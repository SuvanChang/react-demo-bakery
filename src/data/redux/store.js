import {createStore} from 'redux'
import {reducers,initState} from './reducers.js'

function store(){
	return createStore(reducers,initState)
}

export default store