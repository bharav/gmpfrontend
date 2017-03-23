import React from 'react';
import {Link} from 'react-router';

import Map from '../map/map';
import { withGoogleMap } from "react-google-maps";
import superagent from 'superagent';

class HomePage extends React.Component {


constructor(){
  super()
  this.state={
    venue: [],
     CurrentLatitude: 'unknown',
    CurrentLongitude: 'unknown',
    CoOrdinates: [],
  } 
  this.handleLanguage = this.handleLanguage.bind(this)
}


componentDidMount(){
navigator.geolocation.getCurrentPosition(
      (position) => {     
       var log = position.coords.longitude;
       var lat = position.coords.latitude;
        this.setState({CurrentLatitude:lat});
        this.setState({CurrentLongitude:log});  
          
          //const url = 'https://pure-fortress-87132.herokuapp.com/getMeNearByParkings?lng=77.69&lat=12.98'
          const url ='https://pure-fortress-87132.herokuapp.com/getMeNearByParkings?lng='+this.state.CurrentLongitude +'&lat=' + this.state.CurrentLatitude;
              
          superagent
          .get(url)
          .query(null)
          .set('Accept','test/json')
          .end((error,response) =>{
            const venues = response.body   
            console.log("body"+ response)       
            this.setState({
              venue:venues
            })
          })
      },
      (error) => alert("ERROR" + JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
}

handleLanguage(ordinates) {
        this.setState({CoOrdinates: ordinates});
    }

  render() {

const location ={
      lat:12.9816906,
      lng:77.6939942
    }

    const markers = [
      {
          location:{
          lat:12.9816906,
          lng:77.6939942
            }
      }
    ]


    return (
      <div>   
        <div style={{float:'left', width:1000, height:700, background:'white', paddingTop: '22px'}}>
        <Map center={location} markers={this.state.venue} onClick= {this.handleLanguage} />       
        </div>
      </div>
       
    );
  }
}

export default HomePage;
