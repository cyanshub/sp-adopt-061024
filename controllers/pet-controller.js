// 載入資料
const { pets } = require('../data.json')

const petContrller = {
  getPets: (req, res, next) => {
    console.log(pets)
    res.render('pets', { pets })
  }
}

module.exports = petContrller
