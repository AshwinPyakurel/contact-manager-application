import http from "../http-common";

const getAll = () => {
  return http.get("/contacts");
};

const get = id => {
  return http.get(`/contacts/${id}`);
};

const create = data => {
  return http.post("/contacts", data);
};

const update = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

const remove = id => {
  return http.delete(`/contacts/${id}`);
};


const ContactService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default ContactService;