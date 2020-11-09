import axios from 'axios';

import common from './Common';

const getAllUsers = async (accessToken) => {
 try {

  const headers = {
    'Content-Type': 'application/json',
    'x-access-token': accessToken
  };

    let respUsers = await axios.get(common.usersAddress + "/getAllUsers", {headers});
    let respUsersData = respUsers.data;
    if(respUsersData.isSuccess){
      return { isSuccess: true , users:respUsersData.results};
    }
    else{
      return { isSuccess: false , errorMessage: respUsersData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}

const deleteUser = async (userId, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

   let respDeleteUser = await axios.delete(common.usersAddress + "/deleteUser/" + userId, {headers});
    let respDeleteUserData = respDeleteUser.data;
    if(respDeleteUserData.isSuccess){
      return { isSuccess: true };
    }
    else{
      return { isSuccess: false , errorMessage: respDeleteUserData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
 
}

const getUserById = async (userId, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

     let respGetUserById = await axios.get(common.usersAddress + "/getUserById/" + userId, {headers});
    let respGetUserByIdData = respGetUserById.data;
    if(respGetUserByIdData.isSuccess){
      return { isSuccess: true , user:respGetUserByIdData.results};
    }
    else{
      return { isSuccess: false , errorMessage: respGetUserByIdData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}

const updateUser = async (editUser, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respUpdateUser = await axios.put(common.usersAddress + "/updateUser/" + editUser.id, editUser, {headers});
    let respUpdateUserData = respUpdateUser.data;
    if(respUpdateUserData.isSuccess){
      return { isSuccess: true };
    }
    else{
      return { isSuccess: false , errorMessage: respUpdateUserData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }

}

const addUser = async (addUser, addPermissions, loginUser, accessToken) => {
  try {
    
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let addUserObj = {addUser:addUser, addPermissions:addPermissions, loginUser:loginUser}
    let respAddUser = await axios.post(common.usersAddress + "/addUser", addUserObj, {headers});
    let respAddUserData = respAddUser.data;
    if(respAddUserData.isSuccess){
      return { isSuccess: true };
    }
    else{
      return { isSuccess: false , errorMessage: respAddUserData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }

}

const isUserNameExists = async (userName, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

     let respIsUserNameExists = await axios.get(common.usersAddress + "/isUserNameExists/" + userName, {headers});
    let respIsUserNameExistsData = respIsUserNameExists.data;
    if(respIsUserNameExistsData.isSuccess){
      return true;
    }
    else{
      return false;
    }
  }
  catch(e){
    return false;
  }

}

export default { getAllUsers, deleteUser, getUserById, updateUser, addUser, isUserNameExists };