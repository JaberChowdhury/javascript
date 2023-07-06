/**
 *
 * 🫒 Title : uuid
 * 🫒 Description : checking uuid exists or not
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 4 July 2023
 *
 **/

const checkuuid = (usersobj, uuid) => {
  const users = usersobj.body.users;
  const final = users.filter((user, id) => {
    return user.uuid === uuid;
  });
  if (final.length >= 1) {
    return true;
  } else {
    return false;
  }
};

module.exports = checkuuid;
