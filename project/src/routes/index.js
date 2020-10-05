const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.send('Wenas Tardes');
});


module.exports = router;