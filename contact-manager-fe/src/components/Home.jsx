import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () =>{
    const contacts = useSelector(state => state);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to={'/addContact'} className= "btn btn-outline-dark">Add Contacts</Link>
                </div>
                <div className="col-md-6 mx-auto">
                    <table className="table table-hover">
                    <thead className="table-header bg-dark text-white">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Image</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"                        
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;