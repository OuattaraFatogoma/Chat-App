const routeNotFoundMiddleware = (req, res, next) => {
    res.status(404).send({message: "Route doesn't exist"})
}

module.exports = routeNotFoundMiddleware;