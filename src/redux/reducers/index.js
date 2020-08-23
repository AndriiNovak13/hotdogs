import HotDog from './HotDogReducers'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    HotDog,
    form: formReducer
});

export default rootReducer;