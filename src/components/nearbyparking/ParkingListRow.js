import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ParkingSubList from './ParkingSubList';

const ParkingListRow = ({parkingslot}) => {
  return (
    <tr>
      <td><a href={"#"} target="_blank">Watch</a></td>
      <td>{parkingslot.name}</td>
      <td colSpan="3"><ParkingSubList parkingsubslots={parkingslot.parkingSubSlots}/></td>
    </tr>
  );
};
ParkingListRow.propTypes = {
  parkingslot: PropTypes.object.isRequired
};

export default ParkingListRow;
