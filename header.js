function Header() {
  var root = document.getElementById('root');
  var header = document.createElement('div');
  header.innerHTML = 'header';
  root.append(header);
}

export default Header;