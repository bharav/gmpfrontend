import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';


const Header = ({loading}) => {
  return (
    <div className="App-header">
           
            
            <h2>GET MY PARKING</h2>
            
            </div>
   
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
