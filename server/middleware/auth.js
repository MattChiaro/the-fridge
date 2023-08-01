require('dotenv').config();
const jwt = require('jsonwebtoken');

const key = "995fcca527a094a345fffcb8405252bc26c3e5e7f229ec31570559b885eb5b065826c5f927952ccc3a81a8bc53d31d5d3d9fa53ee270c118c48533047dd61a46"

module.exports = {
    authMiddleware: function ({ req, res, next }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // We split the token string into an array and return actual token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return res.status(401).send('Access denied. No token provided.');
        }

        // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
        try {
            const decoded = jwt.verify(token, key);
            req.user = decoded;
            next();
        } catch {
            res.status(400).send('Invalid token.');
        }

        // return the request object so it can be passed to the resolver as `context`
        return req;
    },
    signToken: function ({ email, _id }) {
        const payload = { email, _id };
        return jwt.sign({ data: payload }, key, { expiresIn: '2h' });
    },
};
