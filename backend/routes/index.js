const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Server is running OK.');
});

module.exports = router;
