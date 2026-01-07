
// closures 
function adminCheck(role) {

    function validator(req, res, next) {
        const roleOfUser = req.role 
        console.log("roleOfUser", roleOfUser);
        if(roleOfUser === role) {
            next();
        } else {
            res.status(409).json({
                message: "not allowed"
            })
        }
    }

    return validator;
}



module.exports = adminCheck;