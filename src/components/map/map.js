import React, {PropTypes} from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import  logoimg from '../../images/car-loc.png';

const map = ({center,onMapMounted,onDragend,markers,onSlotSelected}) =>{
        const mapContainer = <div style={{height:'100%', width:'100%'}}></div>;
        debugger;
        const marker = markers.map((venue,i) => {
            const marker = {
                position:{
                    lat:parseFloat(venue.geoLocation.coordinates[1]),
                    lng:parseFloat(venue.geoLocation.coordinates[0])
                }
    
            };
            return <Marker key={i} {...marker} onClick={()=>onSlotSelected(venue)} icon={logoimg} defaultAnimation='2' />;
        });
     return (
        <GoogleMapLoader   containerElement = {mapContainer} googleMapElement = {
          <GoogleMap ref={onMapMounted}  defaultZoom={12}   defaultCenter={center}  options={{streetViewControl:false, mapTypeControl: false}}  onDragend={onDragend} >
             {marker}
          </GoogleMap>
        }/>
    );
};


map.propTypes = {
  center: PropTypes.object.isRequired,
  markers:PropTypes.array.isRequired,
  onDragend : PropTypes.func.isRequired,
  onSlotSelected:PropTypes.func.isRequired
};

export default map;


