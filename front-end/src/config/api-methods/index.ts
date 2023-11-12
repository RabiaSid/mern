import axios from "axios";

export const apiHandle = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Authorization: `Bearer `,
  },
});

export const Get = (endPoint: String, id?: string | number) => {
  return apiHandle.get(`${endPoint}/${id ? id : ""}`);
};
export const Delete = (endPoint: String, id?: string | number) => {
  return apiHandle.delete(`${endPoint}/${id ? id : ""}`);
};
export const Put = (endPoint: String, id?: string | number) => {
  return apiHandle.put(`${endPoint}/`);
};
// export const Post = (endPoint: String, id?: any) => {
//   return apiHandle.post(`${endPoint}`);
// };

export const Post = ( endpoint: string, stateName: any, id?: string | number) => {
  return apiHandle.post(`${endpoint}/${id ? id : ""}`, stateName);
};
