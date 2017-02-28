import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ParkingSubListRow = ({parkingsubslot}) => {
  return (
    <tr>
      <td>{parkingsubslot.parkingType}</td>
      <td>{parkingsubslot.capacity}</td>
      <td>{parkingsubslot.Availability}</td>
    </tr>
  );
};
ParkingSubListRow.propTypes = {
  parkingsubslot: PropTypes.object.isRequired
};

export default ParkingSubListRow;
