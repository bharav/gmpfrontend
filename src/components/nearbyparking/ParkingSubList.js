import React, {PropTypes} from 'react';
import  carimage from '../../images/car.png';
import  bikeimage from '../../images/motorbike.png';
class ParkingSubList extends React.Component {

   constructor(props, context) {
    super(props, context);
    this.state ={
      subslots: this.props.subslots,
      parkingslotid: this.props.parkingslotid
    };
  }

  render() {
      return (
          <div className="panel panel-default border-0 center-block">
              <div className="panel-heading">Parking Sub Slots</div>
              <div className="row">
              {this.state.subslots.map(subslot =>
                        <div className = "col-sm-6 col-md-3" key={subslot._id}>
                            <div className = "thumbnail">
                              <img src = {subslot.parkingType==='CAR_24'? carimage : bikeimage} alt = "Generic placeholder thumbnail"/>

                            </div>
                          <div className = "caption">
                            <p> <input type="radio" id="item4" value= {subslot.parkingSubSlotId} /><strong>Availability</strong>:{subslot.Availability}</p>
                        </div>
                        </div>
                      )}
                  </div>
                  <div className="row">
                        <div className="col-md-4 text-center">
                            <button id="singlebutton" name="singlebutton" className="btn btn-primary">Book Parking</button>
                        </div>
                  </div>
              </div>

    );
  }
};


ParkingSubList.propTypes = {
  subslots: PropTypes.array.isRequired,
  parkingslotid:PropTypes.number.isRequired
};

export default ParkingSubList;
