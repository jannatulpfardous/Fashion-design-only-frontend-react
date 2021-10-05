
import React from 'react';
import data from "../Instructor.json"

const Addmission = () => {
    return (
        <div style={{fontFamily: 'Besley'}}> <br /> 
            <h4 style={{textAlign:"center"}}>IF ANY QUERIES PLEASE CONTRACT OUR INSTRUCTOR.</h4>
          
         <div className="row offset-1 mt-4">

         {
                data.map(v=>
                    <div className="col-3 m-4 ">
                      <div class=" card text-secondary bg-dark  ms-3 ">
               
                <div style={{fontFamily: 'Besley'}} class="card-body text-center">
                    <h5 style={{fontFamily: 'Besley',color:"white"}} class="card-title">{v.DepartmentName}</h5>
                    <p class="card-text">{v.Name}</p>
                    <p class="card-text" style={{color: "rgb(214, 14, 114)"}}>{v.PhoneNumber}</p>

                    <p class="card-text">{v.email}</p>

                       
                </div>
            </div>
                    
                    </div>
                    
                    )
            }
         </div>
          
        </div>
    );
};

export default Addmission;
