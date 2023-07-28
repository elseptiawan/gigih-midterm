const express = require('express');
const router = express.Router();
const {
    store,
    update,
    index,
    show,
    destroy
} = require('../controllers/videoController')

router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router