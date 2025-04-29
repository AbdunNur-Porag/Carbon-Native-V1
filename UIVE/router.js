// router.js

const router = (function () {
  let routes = {};
  let defaultRoute = null;
  let notFoundPage = null;
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement); // createRoot only once

  function config(routeMap) {
    routes = { ...routeMap };
    defaultRoute = routeMap.default || null;
    notFoundPage = routeMap.notfound || null;

    window.addEventListener('popstate', () => {
      renderRoute(getRouteFromURL());
    });

    renderRoute(getRouteFromURL()); // render correct page on page load
  }

  function getRouteFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('route') || '';
  }

  function updateURL(route, replace = false) {
    const newURL = `?route=${route}`;
    if (replace) {
      history.replaceState(null, '', newURL);
    } else {
      history.pushState(null, '', newURL);
    }
    renderRoute(route);
  }

  function routeTo(path) {
    updateURL(path, false);
  }

  function replaceTo(path) {
    updateURL(path, true);
  }

  function renderRoute(path) {
    const Component = routes[path] || notFoundPage || defaultRoute;
    if (root && Component) {
      root.render(Component);
    }
  }

  return { config, routeTo, replaceTo };
})();

// Easy access
const routeTo = router.routeTo;
const replaceTo = router.replaceTo;

