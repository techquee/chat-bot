import { MESSAGE } from '../actions/types';
import { ITS_ME } from '../actions/types';
import { createStore } from 'redux';
import pipeline from 'redux-pipeline';


const initialState={
    item: {},
    items:[]
}

export default function(state = initialState, action){
    switch (action.type){
        case MESSAGE:
           return {
               ...state,
               item: action.payload
           };
        default:
           return state;
    }
}
/*
function bot_message(state = 0, action){
    switch (action.type){
        case ITS_ME:
           return {
               ...state,
               item: action.payload
           };
        default:
           return state;
    }
}

export default createStore(
    pipeline(user_message, bot_message)
);*/