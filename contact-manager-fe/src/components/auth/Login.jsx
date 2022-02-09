import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        navigate('/');
    }
    return(
        <div className="container my-60">
           <div className="col-md-6">
               <form action="" onSubmit={handleSubmit}>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Username"></input>
                   </div>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Password"></input>
                   </div>
                   <div className="form-group">
                       <input type= "submit" className="btn btn-dark" ></input>
                   </div>
               </form>
            </div> 
        </div>
    );
}

export default Login;