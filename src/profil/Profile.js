import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import "../App.css"
import img from "../280712267_537722404690268_9031430129348606439_n.png"
const Profile = ({fullName,proffesion,bio,children,handleName}) => {
    return(
      <div class="infocardContainer">
  <div id="main">
    <img src={img}></img>
  </div>
  <div id="textbois">
  <h2>{fullName}</h2>
            <h4>{proffesion}</h4>
            {children}
            <button className="button" onClick={()=>handleName(fullName)}>Envoyer</button>
    
  </div>
</div>
        
    )
}
Profile.defaultProps={
    proffesion:"docteur",
    fullName:"Nawres ghressi",
    handleName:()=> alert("hello default")
}
export default Profile