const getHome = (req, res) => {
    return res.json({
        success: true,
        message: "Welcome to E-commerce API"
    })
}

const getHealth = (req, res) => {
    return res.json({
        success: true,
        message: "API is healthy"
    })
}

export { getHealth, getHome}