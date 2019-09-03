/*
 * @Author: Tiny
 * @Date: 2019-09-03 13:46:11
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-03 18:10:04
 */
// import { lazy } from './lazy';
import loadable from '@loadable/component';

// const BaseInfo = lazy('../pages/baseInfo/');
// const OutwardInfo = lazy('../pages/baseInfo/outwardInfo/');
// const InnerInfo = lazy('../pages/baseInfo/innerInfo/');
// const EducatInfo = lazy('../pages/baseInfo/educatInfo/');

// const Vita = lazy('../pages/vita/');
// const EmotVita = lazy('../pages/vita/emotVita/');
// const JobVita = lazy('../pages/vita/jobVita/');

// const Diary = lazy('../pages/diary/');
// const DiaryEmot = lazy('../pages/diary/diaryEmot/');
// const DiaryLife = lazy('../pages/diary/diaryLife/');

// const Home = lazy('../pages/home/');
// const Login = lazy('../pages/login/')
// const Counter = lazy('../pages/counter/')

const BaseInfo = loadable(() => import('../pages/baseInfo/'));
const OutwardInfo = loadable(() => import('../pages/baseInfo/outwardInfo/'));
const InnerInfo = loadable(() => import('../pages/baseInfo/innerInfo/'));
const EducatInfo = loadable(() => import('../pages/baseInfo/educatInfo/'));

const Vita = loadable(() => import('../pages/vita/'));
const EmotVita = loadable(() => import('../pages/vita/emotVita/'));
const JobVita = loadable(() => import('../pages/vita/jobVita/'));

const Diary = loadable(() => import('../pages/diary/'));
const DiaryEmot = loadable(() => import('../pages/diary/diaryEmot/'));
const DiaryLife = loadable(() => import('../pages/diary/diaryLife/'));

const Home = loadable(() => import('../pages/home/'));
const Login = loadable(() => import('../pages/login/'));
const Counter = loadable(() => import('../pages/counter/'));

export const routerConfig = [
  {
    name: '登陆',
    path: '/',
    exact: true,
    component: Login,
  },
  {
    name: '登陆',
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    name: 'counter',
    path: '/counter',
    exact: true,
    component: Counter,
  },
  {
    name: '基础信息',
    icon: 'hdd',
    exact: true,
    component: BaseInfo,
    path: '/baseInfo',
    requiresAuth: true,
    children: [
      {
        name: '外貌信息',
        path: '/baseInfo/outwardInfo',
        component: OutwardInfo
      },
      {
        name: '学历信息',
        path: '/baseInfo/educatInfo',
        component: EducatInfo
      },
      {
        name: '内在信息',
        path: '/baseInfo/innerInfo',
        component: InnerInfo
      }
    ]
  },
  {
    name: '个人简历',
    icon: 'file',
    exact: true,
    component: Vita,
    path: '/vita',
    requiresAuth: true,
    children: [
      {
        name: '职业简历',
        path: '/vita/emotVita',
        component: EmotVita
      },
      {
        name: '情感简历',
        path: '/vita/jobVita',
        component: JobVita
      },
    ]
  },
  {
    name: '个人日记',
    icon: 'edit',
    exact: true,
    component: Diary,
    path: '/diary',
    requiresAuth: true,
    children: [
      {
        name: '情感日记',
        path: '/diary/diaryEmot',
        component: DiaryEmot
      },
      {
        name: '生活杂记',
        path: '/diary/diaryLife',
        component: DiaryLife
      }
    ]
  }
]