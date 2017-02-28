import React, {PropTypes} from 'react';
import ParkingListRow from './ParkingListRow';

const ParkingList = ({parkingslots}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Name</th>
        <th>Parking Type</th>
        <th>Capacity</th>
        <th>Availability</th>
      </tr>
      </thead>
      <tbody>
      {parkingslots.map(parkingslot =>
        <ParkingListRow key={parkingslot._id} parkingslot={parkingslot}/>
      )}
      </tbody>
    </table>
  );
};

ParkingList.propTypes = {
  parkingslots: PropTypes.array.isRequired
};

export default ParkingList;
