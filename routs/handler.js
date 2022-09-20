const express =require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Nedaa Elshahawy",
        "msg": "My project",
        "username": "Nedaa"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;

import('./index.js').catch(e => {
    if (e.code === 'ERR_MODULE_NOT_FOUND') {
      // triggers if ./foo.js isn't there or if foo.js is using `import` to load other files
      // and one of them isn't there.
    }
    if (e.code === 'MODULE_NOT_FOUND') {
      // triggers if ./foo.js is there but something in the dependency graph
      // is using `require` to load other files and one of them isn't there.
    }
  });