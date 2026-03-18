// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.json({ message: "Customer route working" });
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { getCustomers } = require('../controllers/customerController');

router.get('/', getCustomers);

module.exports = router;