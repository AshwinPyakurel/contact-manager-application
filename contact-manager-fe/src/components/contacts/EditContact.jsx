import React from "react";
import { Link,useParams } from "react-router-dom";
const EditContact = () =>{
    const {id} = useParams();
    console.log(id);
    return(
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center"> Edit Contact {id}</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form action="" method="post">
                        <div className="form-group my-10" enctype= "multipart/form-data">
                            <input type="text" name="" id="" placeholder="Name" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" placeholder="Email" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" placeholder="Phone Number" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="file" name="" id="" placeholder="image"/>
                        </div>
                        <div className="form-group my-10">
                        <input type="submit" value="Edit Contact" name="" id="" placeholder="image" className="btn btn-block btn-dark"/>
                        <Link to={'/'} className= "btn btn-danger ml-3">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EditContact