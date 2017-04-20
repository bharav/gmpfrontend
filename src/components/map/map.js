import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'


class map extends Component {

constructor(props) {
    super(props);
    
    this.state = {centerPos: this.center};
   this.handleDragend = this.handleDragend.bind(this)
    // Now each instance of foo can use this.onWheel
  }

    OnClick_Event(loc,e) {
        debugger;
   this.props.onClick(loc);
  }

handleDragend(lt,ln)
{  
    //( , this.center.toJSON()['lat']);
    debugger;
   let loc = {lat:12.983719, lng:77.693865};
   
   // let loc = {lat:lt.props.center.lat , lng:lt.props.center.lng};
     this.props.onDragend(loc);
}
  render(){
      //debugger;
        const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

        const marker = this.props.markers.map((venue,i) => {

            const marker = {
                position:{
                    lat:parseFloat(venue.geoLocation.coordinates[1]),
                    lng:parseFloat(venue.geoLocation.coordinates[0])
                }
            }
            return <Marker key={i} {...marker} onClick={this.OnClick_Event.bind(this,venue)} />
        })

let component = this;
        return (
        <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
            <GoogleMap
            defaultZoom={12}
            defaultCenter={this.props.center}
            options={{streetViewControl:false, mapTypeControl: false}}
            onDragend={this.handleDragend.bind(null,this)}
        

            >
            { marker }

            </GoogleMap>
        }/>

        )
    }
}
export default map;
