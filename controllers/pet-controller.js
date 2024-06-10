const petContrller = {
  getPets: (req, res, next) => {
    res.render('pets')
  }
}

module.exports = petContrller
