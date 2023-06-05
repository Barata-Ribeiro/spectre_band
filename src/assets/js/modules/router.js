const route = (event) => {
  const windowEvent = event || window.event;
  windowEvent.preventDefault();
  window.history.pushState({}, document.title, windowEvent.target.href);
};

const routes = {
  404: '/pages/404.html',
  '/lorem': '/pages/lorem.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const pathRoute = routes[path] || routes[404];
  const html = await fetch(pathRoute).then((data) => data.text());
  document.getElementById('app').innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
