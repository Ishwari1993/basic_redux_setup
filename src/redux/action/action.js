import {
  FETCH_HOMEDATA_REQUEST,
  FETCH_HOMEDATA_REQUEST_FAILURE,
  FETCH_HOMEDATA_REQUEST_SUCCESS,
} from "./actionTypes";

export function fetchDataRequest() {
  return {
    type: FETCH_HOMEDATA_REQUEST,
  };
}

export function fetchDataSuccess(item) {
  return {
    type: FETCH_HOMEDATA_REQUEST_SUCCESS,
    item,
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_HOMEDATA_REQUEST_FAILURE,
    payload: { error },
  };
}
