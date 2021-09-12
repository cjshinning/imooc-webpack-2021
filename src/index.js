
// 同步方式
import _ from 'lodash';

// var element = document.createElement('div');
// element.innerHTML = _.join(['Jenny', 'Chan'], '-');
// document.body.appendChild(element);

// 异步方式
async function getComponent() {
  const { default: _ } = await import(/* webpackChunkName:"lodash" */'lodash');
  const element = document.createElement('div');
  element.innerHTML = _.join(['Jenny', 'Chan'], '-');
  return element;
}

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element);
  })
})
