const {users} = require("../db/dataBase.js");

const createUserController = (name, userName, email) => {
  console.log("User controler Body recibido");
  //Prueba validacion
  if (!name || !userName || !email) throw new Error();

  //Valido mail
  if (!email.includes("@") || !email.includes(".")) {
    return { error: "El email no tiene un formato válido." };
  }
  const id = users.length + 1;
  const newUser = { id, name, userName, email };
  users.push(newUser);
  return newUser;
};

const getAllUserController = () => {
  if (!users.length) throw new Error();
  return users;
};

const getUserByNameController = (name) => {
  const userByName = users.filter((user) => user.name === name);
  if (!userByName.length) throw new Error();
  return userByName;
}; 

const getOneUserController = (id) => {
  const user = users.find((user) => user.id == id);
  if (!user) throw new Error();
  return user || { error: "Usuario no encontrado" };
};

const updateUserController = (id, name, userName, email) => {
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    users[index] = { id: Number(id), name, userName, email };
    return users[index];
  }
  return { error: "Usuario no encontrado para actualizar" };
};

const deleteUserController = (id) => {
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    const deleted = users.splice(index, 1);
    return deleted[0];
  }
  return { error: "Usuario no encontrado para eliminar" };
};

module.exports = {
  createUserController,
  getAllUserController,
  getUserByNameController,
  getOneUserController,
  updateUserController,
  deleteUserController,
};
