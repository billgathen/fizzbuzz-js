function newMaxHandler(e) {
  'use strict';
  fire('newMax', e.target.value);
}

function calcHandler(e) {
  'use strict';
  fire('newDisplay', fizzbuzzUpTo(e.detail));
}

function displayHandler(e) {
  'use strict';
  var result = e.detail.join(', '),
    resultNode = document.createTextNode(result),
    displayNode = qs('#display'),
    oldVal = displayNode.firstChild;
  displayNode.replaceChild(resultNode, oldVal);
}
