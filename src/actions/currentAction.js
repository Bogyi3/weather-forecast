import {
  LOADING_CURRENT_STARTED,
  FETCH_CURRENT_SUCCESS,
  FETCH_CURRENT_FAIL,
} from './types';
const API_KEY = '812c10046ac56200f5f37d14d5199daf'

export const loadingCurrentAction = () => ({
  type: LOADING_CURRENT_STARTED,
});

export const fetchCurrentSuccess = (currentData) => ({
  type: FETCH_CURRENT_SUCCESS,
  payload: currentData,
});

export const fetchCurrentFail = (errorMessage) => ({
  type: FETCH_CURRENT_FAIL,
  payload: errorMessage,
});

export const getCurrentWeather = (input) => async (dispatch) => {
  let weatherResponse = {};
  try {
    if (input.city && input.country) {
      dispatch(loadingCurrentAction());
      weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.city},${input.country}&appid=${API_KEY}&units=metric`);
    } else if (input.city) {
      dispatch(loadingCurrentAction());
      weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.city}&appid=${API_KEY}&units=metric`);
    }
    const todayData = await weatherResponse.json();
    if (todayData.name) {
      console.log(todayData);
      return dispatch(fetchCurrentSuccess({
        city: todayData.name,
        country: todayData.sys.country,
        keyWord: todayData.weather[0].main,
        temperature: todayData.main.temp,
        feelsLike: todayData.main.feels_like,
        humidity: todayData.main.humidity,
        wind: todayData.wind.speed,
        description: todayData.weather[0].description,
        icon: todayData.weather[0].icon,
        errorMessage: '',
      }))
    } else {
      dispatch(fetchCurrentFail({ error: 'Failed to load request.' }))
    }

  } catch (err) {
    dispatch(fetchCurrentFail({ error: err }))
  }
}
