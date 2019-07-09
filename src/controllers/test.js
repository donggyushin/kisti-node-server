export const testGetApi = (req, res) => {
    res.json({
        test: 'test'
    })
}

export const testPostApi = (req, res) => {
    res.json({
        'test': req.body.test
    })
}