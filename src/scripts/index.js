function onLoad() {
  'use strict';
  qs('#max').addEventListener('input', newMaxHandler);
  document.addEventListener('newMax', calcHandler);
  document.addEventListener('newDisplay', displayHandler);
}

document.addEventListener('DOMContentLoaded', onLoad);
