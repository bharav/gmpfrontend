import * as types from './actionTypes';
import nearbyparkingApi from '../api/mockNearByParkingApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';

export function loadNearByParkingSuccess(parkingslots) {
  return { type: types.LOAD_PARKINGSLOTS_SUCCESS, parkingslots};
}
export function loadSubSlots(parkingslot){
  return { type:types.LOAD_SUB_SLOTS,parkingslot};
}

export function BookParkingSuccess(parkingslot) {
  return { type: types.BOOK_PARKINGSLOTS_SUCCESS, parkingslot};
}

export function loadNearByParkings(lng,lat) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios.get('https://pure-fortress-87132.herokuapp.com/getMeNearByParkings?lng='+lng+'&lat='+lat).then(parkingslots => {
     console.log(parkingslots);
      dispatch(loadNearByParkingSuccess(parkingslots.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveBookingParking(bookingObject) {
 //debugger;
  return function(dispatch) {
    dispatch(beginAjaxCall());
    //console.log(bookingObject);
     return axios.post('https://pure-fortress-87132.herokuapp.com/updateMyBooking',bookingObject).then(success => {
     //console.log(success);
      dispatch(BookParkingSuccess(bookingObject));
      }).catch(error => {
      throw(error);
    });
  };
}


