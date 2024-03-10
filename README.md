# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


本项目原本打算采用react18版本去写的，但是由于@jiaminghi/data-view-react不支持react18，然后@jiaminghi/data-view-react主要用于构建大屏（全屏）数据展示页面即数据可视化；所以就将react版本降到16.8版本

本项目是个人项目，设计也是自己设计，因为是时间问题以及对产品设计不是很了解，因此项目会有许多不合理的地方，还望不要介意。


```shell
Project
├── 
├── src
│  │  ├── assets 静态资源
│  │  ├── components 各个模块组件
│  │  ├── router 路由文件
│  │  ├── request mock数据以及异步获取函数
│  │  ├── store 通过使用useReducer与useContext模拟redux
│  │  ├── utils 工具函数
│  │  └── views 视图
│  │
│  ├── index.js 主函数文件

```


本项目的因为是个人自己设计的，以前也没有设计的经验有许多不合理的地方，还有一些不合理的地方是本人想让数据动起才这样设计的。