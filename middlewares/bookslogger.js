function logger(req, res, next){
    console.log(`${req.method} ${req.originalurl} ${re.statusCode}`)

    next();
}
module.exports = logger