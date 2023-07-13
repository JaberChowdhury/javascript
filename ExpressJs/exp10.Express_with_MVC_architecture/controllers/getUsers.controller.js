/**
 *
 * 🫒 Title : form handling
 * 🫒 Description : handling form route on nget request
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 12 July 2023
 *
 **/

const getUsers = (req, res) => {
  res.sendFile(__dirname.slice(0, -11) + "/views/form.html");
};

module.exports = getUsers;
