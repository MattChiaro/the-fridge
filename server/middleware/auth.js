// require('dotenv').config();
// const jwt = require('jsonwebtoken');

// module.exports = {
//     authMiddleware: function ({ req, res, next }) {
//         // allows token to be sent via req.body, req.query, or headers
//         let token = req.body.token || req.query.token || req.headers.authorization;

//         // We split the token string into an array and return actual token
//         if (req.headers.authorization) {
//             token = token.split(' ').pop().trim();
//         }

//         if (!token) {
//             return res.status(401).send('Access denied. No token provided.');
//         }

//         // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = decoded;
//             next();
//         } catch {
//             res.status(400).send('Invalid token.');
//         }

//         // return the request object so it can be passed to the resolver as `context`
//         return req;
//     },
//     signToken: function ({ email, name, _id }) {
//         const payload = { email, name, _id };
//         return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: '2h' });
//     },
// };


// ES6
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const authMiddleware = ({ req, res, next }) => {
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
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(400).send('Invalid token.');
    }

    // return the request object so it can be passed to the resolver as `context`
    return req;
};

const signToken = ({ email, name, _id }) => {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: '2h' });
};

export { authMiddleware, signToken };
