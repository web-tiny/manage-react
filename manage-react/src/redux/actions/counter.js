/*
 * @Author: Tiny 
 * @Date: 2019-07-23 15:03:58 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-23 15:08:31
 */
// actions
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const RESET = 'counter/RESET';

export function increment () {
  return {
    type: INCREMENT
  }
}

export function decrement () {
  return {
    type: DECREMENT
  }
}

export function reset () {
  return {
    type: RESET
  }
}