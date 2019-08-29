/*
 * @Author: Tiny 
 * @Date: 2019-07-23 17:23:36 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-25 16:55:16
 */
import axios from 'axios'
import { message } from 'antd';
import router from '../router/router'
axios.defaults.withCredentials = true

const service = axios.create({
  baseURL: '/dzcx_management_api' // api的baseur
  // timeout: 5000 // 请求超时时间,
})
service.defaults.withCredentials = true

// download url
const downloadUrl = url => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}

// 拦截响应response，并做一些错误处理
service.interceptors.response.use((response) => {
  // 处理excel文件
  if (response.config.method !== 'post') {
    if (response.headers && (response.headers['content-type'] === 'application/vnd.ms-excel;charset=UTF-8')) {
      downloadUrl(response.request.responseURL)
    }
  }
  if (response.data && response.data.code) {
    switch (response.data.code) {
      case 200:
        return response
      default:
        message.warning({
          content: response.data.msg,
          duration: 5 * 1000
        })
        return response
    }
  } else {
    return response
  }
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        message.warning({
          content: '请求错误',
          duration: 5 * 1000
        })
        break

      case 401 :
        message.warning({
          content: err.response.data.message,
          duration: 5 * 1000
        })
        router.push('/login')
        break

      case 403 :
        message.warning({
          content: err.response.data.message,
          duration: 5 * 1000
        })
        break

      case 406 :
        message.warning({
          content: err.response.data.message,
          duration: 5 * 1000
        })
        break

      case 417 :
        message.warning({
          content: err.response.data.message,
          duration: 5 * 1000
        })
        break

      case 404:
        message.warning({
          content: '请求地址出错',
          duration: 5 * 1000
        })
        break

      case 500:
        message.warning({
          content: '服务器内部错误',
          duration: 5 * 1000
        })
        break

      case 504:
        message.warning({
          content: '连接服务器超时',
          duration: 5 * 1000
        })
        break
      default:
    }
  } else {
    message.warning({
      content: '连接服务器失败',
      duration: 5 * 1000
    })
  }
  return Promise.reject(err)
})

export default service
