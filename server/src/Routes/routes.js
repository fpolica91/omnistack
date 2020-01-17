const { Router } = require('express')
const router = Router()
const devController = require('../controllers/dev.controller')
const devActionsController = require('../controllers/dev.actions')



router.post('/devs', devController.devCreate)
router.get('/all', devController.index)
router.get('/search', devController.search)
router.delete('/dev/:id', devActionsController.deleteDev)
router.put('/dev/:id', devActionsController.updateDev)



module.exports = router;