import {create} from 'apisauce';

export const Api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

Api.addResponseTransform((response) => {
  try {
    if (!response.ok) {
      return false;
    }
  } catch (e: any) {
    console.log(e);
  }
});