function qs(selector) {
  'use strict';
  return document.querySelector(selector);
}

function fire(name, message) {
  'use strict';
  document.dispatchEvent(new CustomEvent(name, {'detail': message}));
}
