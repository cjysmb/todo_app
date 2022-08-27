import axios from 'axios';

// const authorizedAxiosRequest = (value) => {
//     return axios.create({
//       baseURL: process.env.REACT_APP_API_URL,
//       headers: {
//         Authorization: "Token " + localStorage.getItem("jwtToken")
//       }
//     });
// }

const allowAnyAxiosRequest = (value) => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
}

const taskServices = {
    getData: async (getType, value) => {
      let endpoint = `/todo?${getType}=${value}`

      try {
        let response = await allowAnyAxiosRequest().get(endpoint);
        
        return response.data
      }

      catch (e) {
        console.log(e)
      }
    },

    updateTask: async (data) => {
      let endpoint = `/todo/${data.id}`;
      
      try {
        let response = await allowAnyAxiosRequest().put(endpoint, data);
        return response.data;
      }

      catch (e) {
        console.log(e)
      }
    }
}

export default taskServices;