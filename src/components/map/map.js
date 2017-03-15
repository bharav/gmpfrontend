import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class map extends Component {
    
    OnClick_Event(lng,lat,e) {
   
   alert("Postion " + lat +"," + lng);
    
  }
    
    
    render(){
        const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

        const marker = this.props.markers.map((venue,i) => {
           
            const marker = {
                position:{
                    lat:parseFloat(venue.geoLocation.coordinates[1]),
                    lng:parseFloat(venue.geoLocation.coordinates[0])
                }
            }
            return <Marker key={i} {...marker} onClick={this.OnClick_Event.bind(this,venue.geoLocation.coordinates[0],venue.geoLocation.coordinates[1])} />
        })


        return (        
        <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
            <GoogleMap
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{streetViewControl:false, mapTypeControl: false}}>
            { marker }          

            </GoogleMap>
        }/>
        
        )
    }
}
export default map;