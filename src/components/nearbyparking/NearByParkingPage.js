import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as nearByParkingAction from '../../actions/nearbyparkingaction';
import ParkingList from './ParkingList';
import {browserHistory} from 'react-router';

class NearByParkingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {parkingslots} = this.props;
    debugger;
    return (
      <div>
        <h1>Parking Slots</h1>
        <ParkingList parkingslots={parkingslots}/>
      </div>
    );
  }
}

NearByParkingPage.propTypes = {
  parkingslots: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    parkingslots: state.parkingslots
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nearByParkingAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearByParkingPage);
