/*
 * @description: 项目数据集
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-18 22:48:01
 */
interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '大数据可视化平台',
    description: `基于Vue + Echarts 构建的数据可视化平台，酷炫大屏展示模板和组件库，持续更新各行各业实用模板和炫酷小组件。`,
    imgSrc: '/static/images/dataV.jpg',
    href: 'https://github.com/jackchen0120/vueDataV',
  },
  {
    title: '全栈后台管理系统',
    description: `NodeJS全栈开发基于Vue+iViewUI构建用户界面，功能包括：登录，注册，找回密码，自动登录，todoList增删改查CRUD`,
    imgSrc: '/static/images/frontend.jpg',
    href: 'https://github.com/jackchen0120/todo-vue-admin',
  },
  {
    title: '电商平台数据大屏实时监控系统',
    description: `Vue全家桶+新版Echarts电商平台数据可视化大屏监控系统进阶实战项目`,
    imgSrc: '/static/images/dataV_2.jpg',
    href: 'https://github.com/jackchen0120/EC-Platform-Monitor?tab=readme-ov-file',
  },
]

export default projectsData
