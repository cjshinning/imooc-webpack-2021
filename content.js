function Content() {
  var root = document.getElementById('root');
  var content = document.createElement('div');
  content.innerHTML = 'content';
  root.append(content);
}

export default Content;