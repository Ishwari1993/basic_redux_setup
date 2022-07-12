import {
  FETCH_HOMEDATA_REQUEST,
  FETCH_HOMEDATA_REQUEST_FAILURE,
  FETCH_HOMEDATA_REQUEST_SUCCESS,
} from "../action/actionTypes";

let initialState = {
  loading: false,
  item: [],

  error: null,
};

function reducer(state = initialState, action) {
  console.log("action", action?.item?.data);
  switch (action.type) {
    case FETCH_HOMEDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOMEDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.item?.data,
      };
    case FETCH_HOMEDATA_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: [],
      };

    default:
      return state;
  }
}
export default reducer;
