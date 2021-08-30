const bcrypt = require('bcryptjs')


const password = "MINHA SENHA!"

const salt = bcrypt.genSaltSync(16)

const dbSavedPass = "$2a$16$TZ1Vx/V1SSJ2iECzNjOZiOe78W46LS5GjjjZ83YOjK1WXiTqr2mHu"

console.log(bcrypt.compareSync(password, dbSavedPass))

const password = "SENHA123XD"

const dbSavedPassword = "$2a$15$aUl/BoBQ1bOoS.UXgyVZPutm7eIDvxGyHIS4p.DfvmGs7EL1aGlAu"
// const salt = bcrypt.genSaltSync(15)

// const cryptPassword = bcrypt.hashSync(password, salt)
console.log(bcrypt.compareSync(password, dbSavedPassword)
)

