// 載入資料
const { pets } = require('../data.json')

const petContrller = {
  getPets: (req, res, next) => {
    res.render('pets', { pets })
  }
}

module.exports = petContrller
