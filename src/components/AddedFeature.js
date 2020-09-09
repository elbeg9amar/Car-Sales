import React from 'react';


const AddedFeature = props => {
  const editFeature = (e) =>{
    e.preventDefault();
    props.editFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={editFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
