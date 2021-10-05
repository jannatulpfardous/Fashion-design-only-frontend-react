import React from 'react';
import tool from "../Tool.json"
import Design from "../design/Design"
import "../../components/design/design.css"

const Education = () => {


return (
        <>
        <div className="row">
            <h3 className="text-center" style={{fontFamily: "Besley"}}>Here Is <span style={{ color: "rgb(214, 14, 114)"}}>Our Courses</span>...</h3>
            {
                 tool.map(v=><Design value={v}></Design>)
            }
        </div>

        </>
    );
};

export default Education;