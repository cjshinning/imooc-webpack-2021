
// 第一种方式
// import _ from 'lodash'; //1mb

// 业务逻辑 1mb
console.log(_.join(['a', 'b', 'cd'], '***'));
// main.js 2mb
// 打包文件会很大，加载时间长
// 第三方库一般是不会改变的，但是业务逻辑经常变，用户重新访问我们的页面，又要加载2mb的内容

// 第二种方式
// main.js被拆成lodash.js(1mb)，main.js(1mb)
// 当页面业务逻辑发生变化时，只要加载main.js即可（1mb）