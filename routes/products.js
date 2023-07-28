const express = require('express');
const router = express.Router();
const {
    index,
    show,
    store,
    update,
    destroy
} = require('../controllers/productController');

router.get('/', index);
router.get('/:id', show);
router.post('/:videoId', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router