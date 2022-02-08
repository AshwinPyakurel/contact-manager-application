import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
const AddContact = () =>{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [image,setImage] = useState();

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phoneNumber === phoneNumber ? contact : null
    );
    const handleSubmit= (e) =>{
        e.preventDefault();
        if (!email || !name || !phoneNumber) {
            return toast.warning("All the fields are required!!");
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error("This email already exists!!");
          }
          if (checkContactPhoneExists.length > 0) {
            return toast.error("This phone number already exists!!");
          }
        const data = {
            id: contacts[contacts.length -1].id + 1,
            name,
            email,
            phoneNumber,
            image,
        };
        dispatch({type:"ADD_CONTACT",payload: data});
        toast.success("student added successfully");
        navigate("/");
    }
    
    return(
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center"> Add Contact                   
                </h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="form-group my-10" enctype= "multipart/form-data">
                            <input type="text" name="" id="" value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="file" name="" id="" value={image} onChange={e => setImage(e.target.value)} placeholder="image"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="submit" value="addcontact" name="" id="" placeholder="image" className="btn-block btn-dark"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddContact