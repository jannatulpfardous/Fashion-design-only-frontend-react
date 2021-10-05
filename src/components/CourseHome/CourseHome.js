import React from 'react';
import tool from "../Tool.json"

const CourseHome = () => {
    return (
        <div>
           <h2 className="text-center my-5 " style={{fontFamily:'Besley'}}>Our <span style={{ color: "rgb(214, 14, 114)" }}>Course</span> </h2>
         <div className="row ms-5">
         {
               tool.slice(0,4).map(v=>
                <div className="col-3" style={{fontFamily:'Besley'}}>
                    <img className="rounded" style={{height:"120px",width:'120px'}} src={v.Image} alt="" /> 
                    <h6 className="mt-3"style={{ color: "darkRed" }}>{v.coursename}</h6>
                    <p style={{ color: "#7a6c22" }}> price :{v.totalcost}</p>
                    <p  className="mb-4" style={{ color: "#14669c" }}> Time duration :{v.timeperiod}</p>

                   

                </div>
                
                
                
                )
           }
            
         </div>
        </div>
    );
};

export default CourseHome;