/*
 * @Author: Tiny
 * @Date: 2019-09-03 14:33:58
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-03 18:09:07
 */

// import React from 'react';
import loadable from '@loadable/component';

export const lazy = async path => loadable(() => import(path));