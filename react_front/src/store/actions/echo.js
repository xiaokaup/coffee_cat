import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const ECHO_REQUEST = '@@echo/ECHO_REQUEST';
export const ECHO_SUCCESS = '@@echo/ECHO_SUCCESS';
export const ECHO_FAILURE = '@@echo/ECHO_FAILURE';

export const echo = (message) => ({
  [RSAA]: {
      endpoint: APP_BACK_ENDPOINT + '/User/echo/',
      method: 'POST',
      body: JSON.stringify({message: message}),
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        ECHO_REQUEST, ECHO_SUCCESS, ECHO_FAILURE
      ]
  }
})