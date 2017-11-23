import {combineReducers} from 'redux';
import CarsReducers from './car';
import CarActive from './car-active';

const allReducers = combineReducers({
    cars: CarsReducers,
    active: CarActive 
});

export default allReducers;