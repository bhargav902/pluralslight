import * as types from "../actions/actionTypes";
import initialstate from "./initialState";

function actionTypesEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialstate.apiCallsInProgress,
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypesEndsInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}