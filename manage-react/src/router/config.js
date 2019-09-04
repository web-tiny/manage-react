/*
 * @Author: Tiny
 * @Date: 2019-09-03 13:46:11
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-04 13:59:18
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
    icon: 'solution',
    path: '/',
    exact: true,
    component: Login,
    id: 1
  },
  {
    name: '首页',
    icon: 'solution',
    path: '/home',
    exact: true,
    component: Home,
    id: 2
  },
  {
    name: 'counter',
    icon: 'solution',
    path: '/counter',
    exact: true,
    component: Counter,
    id: 3
  },
  {
    name: '基础信息',
    icon: 'hdd',
    component: BaseInfo,
    path: '/baseInfo',
    requiresAuth: true,
    id: 4,
    children: [
      {
        name: '外貌信息',
        path: '/baseInfo/outwardInfo',
        exact: true,
        component: OutwardInfo,
        id: 5
      },
      {
        name: '学历信息',
        path: '/baseInfo/educatInfo',
        component: EducatInfo,
        id: 6
      },
      {
        name: '内在信息',
        path: '/baseInfo/innerInfo',
        component: InnerInfo,
        id: 7
      }
    ]
  },
  {
    name: '个人简历',
    icon: 'file',
    component: Vita,
    path: '/vita',
    requiresAuth: true,
    id: 8,
    children: [
      {
        name: '职业简历',
        exact: true,
        path: '/vita/emotVita',
        component: EmotVita,
        id: 9,
      },
      {
        name: '情感简历',
        path: '/vita/jobVita',
        component: JobVita,
        id: 10
      },
    ]
  },
  {
    name: '个人日记',
    icon: 'edit',
    component: Diary,
    path: '/diary',
    requiresAuth: true,
    id: 11,
    children: [
      {
        name: '情感日记',
        path: '/diary/diaryEmot',
        exact: true,
        component: DiaryEmot,
        id: 12,
      },
      {
        name: '生活杂记',
        path: '/diary/diaryLife',
        component: DiaryLife,
        id: 13,
      }
    ]
  }
]