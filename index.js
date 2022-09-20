const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

const PORT = 3001; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

import('./handler.js').catch(e => {
    if (e.code === 'ERR_MODULE_NOT_FOUND') {
      // triggers if ./foo.js isn't there or if foo.js is using `import` to load other files
      // and one of them isn't there.
    }
    if (e.code === 'MODULE_NOT_FOUND') {
      // triggers if ./foo.js is there but something in the dependency graph
      // is using `require` to load other files and one of them isn't there.
    }
  });
