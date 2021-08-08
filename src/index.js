// ES Module 模块引入方式 
// CommonJS 模块引入规范
// CMD
// AMD

// webpack 模块打包工具
// js 模块打包工具 ->

// import Header from './header';
// import Siderbar from './siderbar';
// import Content from './content';

var Header = require('./header');
var Siderbar = require('./siderbar');
var Content = require('./content');

new Header();
new Siderbar();
new Content();