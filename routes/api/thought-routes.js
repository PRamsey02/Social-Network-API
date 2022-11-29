// Requiring express router
const router = require('express').Router();

// Thoughts controller requirements
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

// GET: /api/thoughts
router.route('/').get(getAllThoughts);

// GET, PUT, DELETE: /api/thoughts/:id
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// POST: /api/thoughts/:userId
router.route('/:userId').post(createThoughts);

// POST: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE: /api/thoughts/:thoughtId/reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exporting router module
module.exports = router;