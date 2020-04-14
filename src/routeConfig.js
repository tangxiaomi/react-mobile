import AppIndex from './page/app';
import DetailIndex from './page/detail';

export default [
  {path: '/detail/:id', component: DetailIndex},
  {path: '/index', component: AppIndex}, // 默认匹配怎么样设置？？
]
