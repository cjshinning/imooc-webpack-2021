// import test from './test.js';
// console.log(test.name);

// 注意：官网脚手架可以考虑循环每个入口文件，分别添加splitChunks，或者网上搜索多页面splitChunks配置

// 同步方式
import _ from 'lodash'; //1mb
import $ from 'jquery';

var element = document.createElement('div');
element.innerHTML = _.join(['Jenny', 'Chan'], '-');
document.body.appendChild(element);

// 异步方式
// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Jenny', 'Chan'], '-');
//     return element;
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element);
// })

// 代码分割和webpack无关
// webpack中实现代码分割，两种方式：
// 1、同步代码分割：只需要在webpack.common.js中做optimation的配置即可
// 2、异步代码（import）：异步代码，无需做任何配置，会自动分割