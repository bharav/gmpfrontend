import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as nearByParkingAction from '../../actions/nearbyparkingaction';
import ParkingList from './ParkingList';
import {browserHistory} from 'react-router';
import ParkingSubList from './ParkingSubList';

class NearByParkingPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state ={
      parkingslots: this.props.parkingslots,
      SubSlots: this.props.SubSlots
    };
  }
  componentDidMount(){
    this.props.actions.loadNearByParkings();
  }
 componentWillReceiveProps(nextProps) {
    if (this.props.SubSlots!==null){
      if( this.props.SubSlots.parkingSlotId!= nextProps.SubSlots.parkingSlotId) {
        // Necessary to populate form when existing course is loaded directly.
        this.setState({SubSlots:  nextProps.SubSlots});
      }
    }
    else
    {
      this.setState({SubSlots:  nextProps.SubSlots});
    }
    if( this.props.parkingslots.length!= nextProps.parkingslots.length) {
         this.setState({parkingslots:nextProps.parkingslots});
    }
  }
  render() {
    return (
      <div>
        <h1>Parking Slots</h1>
            <div className="row">
              <div className="col-sm-4 sidebar-outer">
                <ParkingList parkingslots={this.state.parkingslots}/>
              </div>
              <div className="col-sm-8">

                {this.state.SubSlots ? <ParkingSubList subslots={this.state.SubSlots.parkingSubSlots} parkingslotid ={this.state.SubSlots.parkingSlotId}/> : null}
              </div>
            </div>
      </div>
    );
  }
}

NearByParkingPage.propTypes = {
  parkingslots: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  SubSlots:PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    parkingslots: state.parkingslots,
    SubSlots : state.SubSlots
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nearByParkingAction, dispatch)

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearByParkingPage);
