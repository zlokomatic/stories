const LOAD = 'stories/LOAD';
const LOAD_ERROR = 'stories/LOAD_ERROR';
const LOAD_SUCCESS = 'stories/LOAD_SUCCESS';

let initialState = {
  loading: false,
  loaded: false,
  data: [],
  error: ''
};

export default function stories(state = initialState, action){
  switch(action.type){
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
      };
    default:
      return state;
  }
}

function load(){
  return {
    type: LOAD
  }
}

function loadError(error){
  return {
    type: LOAD_ERROR,
    error: error
  }
}

function loadSuccess(data){
  return {
    type: LOAD_SUCCESS,
    data: data
  }
}

export function loadStories(){
  return function(dispatch, getState){
    dispatch(load());

    fetch('http://www.mydirtyhobby.com/api/stories').
    then((response) => {
      return response.json();
    }).
    then((data) => {
      dispatch(loadSuccess(data));
    }).
    catch((error) => {
      dispatch(loadError(error.message));
    });
  }
}
