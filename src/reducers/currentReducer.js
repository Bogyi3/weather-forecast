import {
  LOADING_CURRENT_STARTED,
  FETCH_CURRENT_SUCCESS,
  FETCH_CURRENT_FAIL,
} from '../actions/types';

const initialState = {
  loading: false,
  errorMessage: '',
  current: {
    city: '',
    country: '',
    keyWord: '',
    temperature: '',
    feelsLike: '',
    humidity: '',
    wind: '',
    description: '',
    icon: '',
  },
};

const currentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CURRENT_STARTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CURRENT_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
        current: action.payload,
      };

    case FETCH_CURRENT_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
        current: {},
      };

    default: return state;
  }
};

export default currentReducer;
