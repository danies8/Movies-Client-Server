import axios from 'axios';

import common from './Common';

const createLoginUser = async (logInCreateObj) => {
  try {
   
    let respCreateLogin = await axios.post(common.loginUsersAddress + "/createLoginUser" ,logInCreateObj);
    let respCreateLoginData = respCreateLogin.data;
    if(respCreateLoginData.isSuccess){
      return { isSuccess: true , accessToken:respCreateLoginData.accessToken};
    }
    else{
      return { isSuccess: false , errorMessage: respCreateLoginData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}
   
const getUserInfo = async (logInObj) => {
  try {
   
    let respUsers = await axios.post(common.loginUsersAddress + "/getUserInfo" , logInObj);
    let respUsersData = respUsers.data;
    if(respUsersData.isSuccess){
      return { isSuccess: true , ...respUsersData.results, accessToken: respUsersData.accessToken};
    }
    else{
      return { isSuccess: false , errorMessage: respUsersData.errorMessage};;
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}

export default { createLoginUser, getUserInfo };
