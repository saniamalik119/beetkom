import axios from "axios";
export const loginApi = (email, password) => {
  return axios.post("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/auth/login", { email, password });
};
export const getTableDataSearch = () => {
  return axios.get("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/read/Users");
};
export const InputTable = (table, url, cancelToken) => {
  return axios.get("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/read/" + table + "?" + url);
};
export const getProperties = () => {
  return axios.get("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/read/Properties");
};
export const GetReviews = () => {
  return axios.get("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/read/getAllRatings?property_id=1122");
};

export const deleteUser = (userId) => {
  return axios.delete(`http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/delete/Users/${userId}`);
};
export const deleteProperties = (userId) => {
  return axios.delete(`http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/delete/Properties/${userId}`);
};
export const updateProperties = (userId) => {
  return axios.delete(`http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/update/Properties/${userId}`);
};


export const addDataApi = () => {
  return axios.post("http://ec2-16-171-125-5.eu-north-1.compute.amazonaws.com:3000/api/write/Properties");
};