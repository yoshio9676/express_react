import express from 'express';
let router = express.Router();

router.use((req, res, next) => {
    // post 共通処理 middleware
    next();
});

router.get("/", (req, res) => {
    res.json({
        posts: [
            {
                id: 1,
                name: 'test user 1'
            },
            {
                id: 2,
                name: 'test user 2'
            },
            {
                id: 3,
                name: 'test user 3'
            },
        ]
    });
});

module.exports = router;