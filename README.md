# imooc-webpack-2021
learning webpack

## 5-8 webpack性能优化
### 如何提升打包速度？
1. 跟上技术的迭代（Node,Npm,Yarn）
2. 在尽可能少的模块上应用Loader
3. 插件尽可能精简并确保其可靠性
4. resolve参数合理配置
5. 使用DllPlugin提高打包速度
- 目标：第三方模块只打包一次
- 第三方模块打包一次（实现了）
- 我们引入第三方模块的时候，要使用dll
6. 控制包文件的大小
7. 多进程打包
8. 合理使用sourceMap
9. 结合stats分析打包结果
10. 开发环境无用插件剔除
