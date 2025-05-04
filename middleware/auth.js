const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET
module.exports = () => {
    const token = req.headers['x-access-token'];

    const decode = jwt.verify(token, TOKEN_SECRET);

    req.userId = decode.userId;
    next();
}