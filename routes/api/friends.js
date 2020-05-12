/* Friend API */
const express = require ('express');
const router = express.Router();
// Load Friend model
const friend = require("../../models/friend");

router.get('/:userName', (req, res, next) => {
    friend.find({userName: req.params.userName}, 'friendName').then(data => res.json(data)).catch(next)
});

router.post('/', (req, res, next) => {
    if(req.body.friendName){
        friend.create(req.body)
          .then(data => res.json(data))
          .catch(next)
        }else {
            res.json({
                error: "The input field is empty"
        })
    }
});

router.delete('/:id', (req, res, next) => {
    friend.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})
module.exports = router;