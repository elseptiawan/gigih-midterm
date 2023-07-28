const express = require('express');
const router = express.Router();
const {
    index,
    store,
    update,
    destroy
} = require('../controllers/commentController');

router.get('/:videoId', index);
router.post('/:videoId', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router