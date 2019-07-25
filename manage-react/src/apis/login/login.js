/*
 * @Author: Tiny 
 * @Date: 2019-07-25 16:54:11 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-25 16:55:42
 */
import axios from '../../https'

export function getImgCode () {
  return axios({
    url: '/shiro/getImgCode',
    method: 'get'
  })
}

export function loginByUsername (loginForm) {
  return axios({
    url: '/shiro/login',
    method: 'post',
    data: loginForm
  })
}

export function logout () {
  return axios({
    url: '/shiro/logout',
    method: 'get'
  })
}
