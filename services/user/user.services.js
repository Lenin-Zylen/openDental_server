const userDao = require("../../dao/user/user.dao");

function authenticate({ email, password }) {
  return userDao.authenticate({ email, password });
}
function getAll() {
  return userDao.getAll();
}
function getById(id) {
  return userDao.getById(id);
}

function create(userParam) {
  return userDao.create(userParam);
}

function update(id, userParam) {
  return userDao.update(id, userParam);
}

function _delete(id) {
  return userDao.delete(id);
}

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};
