require('dotenv').config();


module.exports ={
    DB : process.env.App_DB,
    PORT : process.env.APP_PORT,
    SECRET : process.env.APP_SECRET,
}