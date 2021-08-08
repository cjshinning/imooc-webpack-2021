function Siderbar() {
  var root = document.getElementById('root');
  var siderbar = document.createElement('div');
  siderbar.innerHTML = 'siderbar';
  root.append(siderbar);
}

// export default Siderbar;
module.exports = Siderbar;