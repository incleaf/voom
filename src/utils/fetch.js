import fetch from 'isomorphic-fetch'

export default (url, config) => fetch(url, {
  ...config,
  credentials: 'same-origin',
  csrfmiddlewaretoken: getCookie('csrftoken')
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
