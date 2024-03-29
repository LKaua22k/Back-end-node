const {verify} = require("jsonwebtoken")
const AppError = require("../utils/App.Error")
const authConif = require("../config/auth")

function ensureAuthenticated(req,res,next){
    const authHeaders = req.headers.authorization;

    if(!authHeaders){
        throw new AppError("Jwt token é invalido", 401);
    }
    
    const [, token] = authHeaders.split(" ");

    try {
        const {sub: user_id} = verify(token,authConif.jwt.secret);

            req.user = {
                id: Number(user_id)
            }

            return next();
    } catch {
        throw new AppError("Jwt token é invalido", 401);
    }
}

module.exports = ensureAuthenticated