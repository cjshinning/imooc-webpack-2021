console.log('hello, this is Jenny');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('service-worker registered');
      })
      .catch(error => {
        console.log('service-worker register error');
      })
  })
}