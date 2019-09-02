/*
 * @Author: Tiny 
 * @Date: 2019-08-29 17:51:12 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-02 13:31:30
 */

import { SET_USERINFO } from './action-types';

export const setUserInfo = (info) => {
  return {
    type: SET_USERINFO,
    name: info.username,
    password: info.password
  }
}
