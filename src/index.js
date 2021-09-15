
// 同步方式
document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ './click.js').then(({ default: func }) => {
    func();
  })
})
