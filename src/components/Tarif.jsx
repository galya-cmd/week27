import React from 'react';
import './Tarif.css';

class Tarif extends React.Component {
  render(){
  const {name,price,speed,text} = this.props;
    return(
    
      <div className="cart">
      <div className="tariff-name">{name}</div>
      <div className="priсe">{price}</div>
      <div className="speed">{speed}</div>
      <div className="text">{text}</div> 
      </div>
      );
    }  
}

export default Tarif;