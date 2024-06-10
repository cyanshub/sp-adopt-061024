const express = require('express')
const router = express.Router()

// 載入 controller 資料夾
const petContrller = require('../controllers/pet-controller.js')

// 設計路由
router.get('/pets', petContrller.getPets)
router.get('/', (req, res) => res.redirect('/pets'))

module.exports = router
