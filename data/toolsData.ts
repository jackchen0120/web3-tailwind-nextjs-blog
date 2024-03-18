/*
 * @description: 工具数据集
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-18 22:36:22
 */
interface Tool {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const toolsData: Tool[] = [
  // {
  //   title: '大数据可视化平台',
  //   description: `基于Vue + Echarts 构建的数据可视化平台，酷炫大屏展示模板和组件库，持续更新各行各业实用模板和炫酷小组件。`,
  //   imgSrc: '/static/images/dataV.jpg',
  //   href: 'https://jackchen0120.github.io/vueDataV/#/',
  // },
  // {
  //   title: '全栈后台管理系统',
  //   description: `NodeJS全栈开发之前端基于Vue+iViewUI构建用户界面，功能包括：登录，注册，找回密码，自动登录，登出，todoList增删改查CRUD`,
  //   imgSrc: '/static/images/frontend.jpg',
  //   href: 'https://github.com/jackchen0120/todo-vue-admin',
  // },
  // {
  //   title: '电商平台数据大屏实时监控系统',
  //   description: `技术知识点有：Vue全家桶、WebSocket前后端数据推送、后端框架Koa2、Echarts新版图表组件（折线图、柱状图、饼图、地图、散点图），还支持主题切换, 展示酷炫的图表效果，同时也能够支持大屏和小屏的切换，保证了图表在不同屏幕上呈现的效果。`,
  //   imgSrc: '/static/images/dataV_2.jpg',
  //   href: 'https://github.com/jackchen0120/EC-Platform-Monitor?tab=readme-ov-file',
  // },
]

export default toolsData
