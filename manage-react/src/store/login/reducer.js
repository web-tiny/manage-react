/*
 * @Author: Tiny 
 * @Date: 2019-07-24 14:02:52 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-02 13:31:31
 */
import { SET_USERINFO } from './action-types';

let defaultState = {
  name: '',
  password: ''
};

export const userInfo = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SET_USERINFO:
      
      return {
        ...state,
        name: action.name,
        password: action.password
      }
  
    default:
      return 'reducer error！'
  }
}