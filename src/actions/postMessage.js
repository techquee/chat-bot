import { MESSAGE } from './types';
import { ITS_ME } from './types';

export const postMessage = (message) => {
   return{
       type: MESSAGE,
       payload: message 
}
};

/*
export const botMessage = (message) => {
    return{
        type: ITS_ME,
        payload: message 
 }
 };
*/