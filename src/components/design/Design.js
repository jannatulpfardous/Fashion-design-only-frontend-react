import React from 'react';

const Design = ({value}) => {
  
    return (

            <div class="col-4">

            <div class="serviceBox mx-5 my-4 border-top border-dark"  >
               
                <div className="">
                <img style={{height:'200px',width:'270px'}} src={value.Image} alt="" />
                <h3 class="title" style={{ color: "darkRed", fontFamily: "Besley"}}>{value.coursename}</h3>
                <h5 style={{fontFamily: "Besley"}}>Time Period : {value.timeperiod}</h5>
                <h6 style={{fontFamily: "Besley"}}>Course Fee : {value.totalcost}</h6>
                </div>

            </div>
           
        </div>
        
    );
};

export default Design;