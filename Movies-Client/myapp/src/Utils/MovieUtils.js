import axios from 'axios';

import common from './Common';

const getAllMovies = async (accessToken) => {
  try {
   
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respMovies = await axios.get(common.moviesAddress + "/getAllMovies", {headers});
    let respMoviesData = respMovies.data;
    if(respMoviesData.isSuccess){
      return { isSuccess: true , moviesDataArr:respMoviesData.moviesDataArr};
    }
    else{
      return { isSuccess: false , errorMessage: respMoviesData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}

const getAllMoviesFilterByMovieName = async (movieName, isExactFilter, accessToken) => {
  try {
    
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respFilterMoviesName = await axios.get(common.moviesAddress + "/getAllMoviesFilterByMovieName/"+ movieName + "/" + isExactFilter, {headers});
    let respFilterMoviesNameData = respFilterMoviesName.data;
    if(respFilterMoviesNameData.isSuccess){
      return { isSuccess: true , moviesDataArr:respFilterMoviesNameData.moviesDataArr};
    }
    else{
      return { isSuccess: false , errorMessage: respFilterMoviesNameData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}
const getMovieById = async (movieId, accessToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };
  
    let respGetMovieById = await axios.get(common.moviesAddress + "/getMovieById/" + movieId, {headers});
    let respGetMovieByIdData = respGetMovieById.data;
    if(respGetMovieByIdData.isSuccess){
      return { isSuccess: true , movie:respGetMovieByIdData.movie};
    }
    else{
      return { isSuccess: false , errorMessage: respGetMovieByIdData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}

const getAllMoviesNames = async (accessToken) => {
  try {

    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };
    
    let respMoviesNames = await axios.get(common.moviesAddress + "/getAllMoviesNames", {headers});
    let respMoviesNamesData = respMoviesNames.data;
    if(respMoviesNamesData.isSuccess){
      return { isSuccess: true , moviesNames:respMoviesNamesData.moviesNames};
    }
    else{
      return { isSuccess: false , errorMessage: respMoviesNamesData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}

const addMovie = async (addMovie, accessToken) => {
  try {
   
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respaddMovie = await axios.post(common.moviesAddress + "/addMovie", addMovie, {headers});
    let respaddMovieData = respaddMovie.data;
    if(respaddMovieData.isSuccess){
      return { isSuccess: true };
    }
    else{
      return { isSuccess: false , errorMessage: respaddMovieData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}
const updateMovie = async (editMovie, accessToken) => {
  try {
    
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respUpdateMovie = await axios.put(common.moviesAddress + "/updateMovie/"+ editMovie.id, editMovie, {headers});
     let respUpdateMovieData = respUpdateMovie.data;
     if(respUpdateMovieData.isSuccess){
       return { isSuccess: true };
     }
     else{
       return { isSuccess: false , errorMessage: respUpdateMovie.errorMessage};
     }
   }
   catch(e){
     return { isSuccess: false, errorMessage: e.message };
   }
  }

const deleteMovie = async (movieId, accessToken) => {
  try {
   
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    };

    let respDeleteMovie = await axios.delete(common.moviesAddress + "/deleteMovie/"  + movieId, {headers});
    let respDeleteMovieData = respDeleteMovie.data;
    if(respDeleteMovieData.isSuccess){
      return { isSuccess: true };
    }
    else{
      return { isSuccess: false , errorMessage: respDeleteMovieData.errorMessage};
    }
  }
  catch(e){
    return { isSuccess: false, errorMessage: e.message };
  }
}

export default {
  getAllMovies, getAllMoviesFilterByMovieName, getMovieById, getAllMoviesNames,
  addMovie, updateMovie, deleteMovie
}

