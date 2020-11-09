import axios from 'axios';

import common from './Common';

const getAllMembersSubscriptionData = async (accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respMembers = await axios.get(common.membersAddress + "/getAllMembersSubscriptionData",{headers});
    let respMembersData = respMembers.data;
    if (respMembersData.isSuccess) {
      return { isSuccess: true, membersDataArr: respMembersData.membersDataArr };
    }
    else {
      return { isSuccess: false, errorMessage: respMembersData.errorMessage };
    }
  }
  catch (e) {
    return { isSuccess: false, errorMessage: e.message };
  }
}


const getMemberById = async (memberId, accessToken) => {
  try {
   
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respGetMemberById = await axios.get(common.membersAddress + "/getMemberById/" + memberId, {headers});
    let respGetMemberByIdData = respGetMemberById.data;
    if (respGetMemberByIdData.isSuccess) {
      return { isSuccess: true, member: respGetMemberByIdData.member };
    }
    else {
      return { isSuccess: false, errorMessage: respGetMemberByIdData.errorMessage };
    }
  }
  catch (e) {
    return { isSuccess: false, errorMessage: e.message };
  }
}

const getAllMembersSubscriptionDataFilterByMemberId = async (memberId, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let resp = await axios.get(common.membersAddress + "/getAllMembersSubscriptionDataFilterByMemberId/" + memberId, {headers});
    let respData = resp.data;
    if (respData.isSuccess) {
      return { isSuccess: true, membersDataArr: respData.membersDataArr };
    }
    else {
      return { isSuccess: false, errorMessage: respData.errorMessage };
    }
  }
  catch (e) {
    return { isSuccess: false, errorMessage: e.message };
  }
}

const addMember = async (addMember, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };
    let respAddMember = await axios.post(common.membersAddress + "/addMember", addMember, {headers});
    let respAddMemberData = respAddMember.data;
    if (respAddMemberData.isSuccess) {
      return { isSuccess: true };
    }
    else {
      return { isSuccess: false, errorMessage: respAddMemberData.errorMessage };
    }
  }
  catch (e) {
    return { isSuccess: false, errorMessage: e.message };
  }
}

const updateMember = async (editMember, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };
    let respUpdateMember = await axios.put(common.membersAddress + "/updateMember/" + editMember.id, editMember, {headers});
    let respUpdateMemberData = respUpdateMember.data;
    if (respUpdateMemberData.isSuccess) {
      return { isSuccess: true };
    }
    else {
      return { isSuccess: false, errorMessage: respUpdateMemberData.errorMessage };
    }
  }
  catch (e) {
    return { isSuccess: false, errorMessage: e.message };
  }
}

const deleteMember = async (memberId, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respDeleteMember = await axios.delete(common.membersAddress + "/deleteMember/" + memberId, {headers});
    let respDeleteMemberData = respDeleteMember.data;
    if (respDeleteMemberData.isSuccess) {
      return { isSuccess: true };
    }
    else {
      return { isSuccess: false, errorMessage: respDeleteMemberData.errorMessage };
    }
  }
  catch (e) {
    return { isSuccess: false, errorMessage: e.message };
  }
}
const subscirbeToNewMovie = async (newMovieDataObj, memberId, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respSubscirbeToNewMovie = await axios.post(common.membersAddress + "/subscirbeToNewMovie", { newMovieDataObj: newMovieDataObj, memberId: memberId }, {headers});
    let respSubscirbeToNewMovieData = respSubscirbeToNewMovie.data;
    if (respSubscirbeToNewMovieData.isSuccess) {
      return { isSuccess: true };
    }
    else {
      return { isSuccess: false, errorMessage: respSubscirbeToNewMovieData.errorMessage };
    }
  }
  catch (e) {
    return { isSuccess: false, errorMessage: e.message };
  }

}


export default {
  getAllMembersSubscriptionData, getMemberById, getAllMembersSubscriptionDataFilterByMemberId,
  addMember, updateMember, deleteMember, subscirbeToNewMovie
}

