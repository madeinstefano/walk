# walk
Recursively read all files path from directory

### Usage
```js
var walk = require('walk');

var filesPaths = walk('path');

filesPaths.forEach( path => {
  // do something like require(path);
})
```
