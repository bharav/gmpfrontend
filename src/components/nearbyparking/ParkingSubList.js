import React, {PropTypes} from 'react';
import ParkingSubListRow from './ParkingSubListRow';

const ParkingSubList = ({parkingsubslots}) => {
  return (
    <table className="table">
      <tbody>
      {parkingsubslots.map(parkingsubslot =>
        <ParkingSubListRow key={parkingsubslot.parkingSubSlotId} parkingsubslot={parkingsubslot}/>
      )}
      </tbody>
    </table>
  );
};

ParkingSubList.propTypes = {
  parkingsubslots: PropTypes.array.isRequired
};

export default ParkingSubList;
