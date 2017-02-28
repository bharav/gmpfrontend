import * as types from './actionTypes';
import nearbyparkingApi from '../api/mockNearByParkingApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadNearByParkingSuccess(parkingslots) {
  return { type: types.LOAD_PARKINGSLOTS_SUCCESS, parkingslots};
}

export function loadNearByParkings() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return nearbyparkingApi.getNearByParkingSlot().then(parkingslots => {
      dispatch(loadNearByParkingSuccess(parkingslots));
    }).catch(error => {
      throw(error);
    });
  };
}
