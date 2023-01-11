const userServices = require("../../services/user/user.services");
const Role = require("../../helpers/role");


function authenticate(req, res, next) {
    userServices
        .authenticate(req.body)
        .then((user) => {
            console.log(user);
            user
                ? res.json({ user: user, message: "User logged in successfully" })
                : res
                    .status(400)
                    .json({ message: "Username or password is incorrect." });
        })
        .catch((error) => next(error));
}

function register(req, res, next) {
    userServices
        .create(req.body)
        .then((user) =>
            res.json({
                user: user,
                message: `User Registered successfully with email ${req.body.email}`,
            })
        )
        .catch((error) => next(error));
}

function getAll(req, res, next) {
    const currentUser = req.user;

    if (currentUser.userType !== Role.Admin) {
        return res.status(401).json({ message: "Not Authorized!" });
    }
    userServices
        .getAll()
        .then((users) => res.json(users))
        .catch((err) => next(err));
}

function getCurrent(req, res, next) {
    console.log("current user", req);
    userServices
        .getById(req.user.sub)
        .then((user) => (user ? res.json(user) : res.status(404)))
        .catch((error) => next(error));
}

function getById(req, res, next) {
    userServices
        .getById(req.params.id)
        .then((user) => {
            if (!user) {
                res.status(404).json({ message: "User Not Found!" });
                next();
            }
            return res.json(user);
        })
        .catch((error) => next(error));
}

function update(req, res, next) {
    req.body.modifiedAt=new Date();
    
    userServices
        .update(req.params.id, req.body)
        .then(() =>
            res.json({
                message: `User with id: ${req.params.id} updated successfully.`,
            })
        )
        .catch((error) => next(error));
}

function _delete(req, res, next) {
    userServices
        .delete(req.params.id)
        .then(() =>
            res.json({
                message: `User with id: ${req.params.id} deleted successfully.`,
            })
        )
        .catch((error) => next(error));
}


module.exports = {
    authenticate,
    getAll,
    getById,
    register,
    getCurrent,
    update,
    delete: _delete,
};