const {getUser,postUser,updateUser,deleteUser} = require('../Controller/userController')

const route = require('express').Router()

route.get('/',getUser)

route.post('/', postUser)

route.put('/:id',updateUser)

route.delete('/:id',deleteUser)

module.exports = route