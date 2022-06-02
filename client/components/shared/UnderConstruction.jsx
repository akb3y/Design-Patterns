import React from 'react';
import { BsConeStriped } from "react-icons/bs";

function UnderConstruction({msg}){
return(
  <>
  <BsConeStriped className="traffic-cone"/> &nbsp;
  {msg} is currently under construction.&nbsp;&nbsp;
  <BsConeStriped className="traffic-cone"/>
  </>
)
}

export default UnderConstruction