import axios  from "axios";
const instance=axios.create({
    baseURL:'http://127.0.0.1:5001/challenge-37d0d/us-central1/api'
     //the api(cloud function) url
});
export default instance
// import axios  from "axios";
// const instance = axios.get('http://127.0.0.1:5001/challenge-37d0d/us-central1/api'
// )
// .then(data =>console.log(data.data))
// .catch(error => console.log(error));
// export default instance
// import axios from 'axios';

// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://127.0.0.1:5001/challenge-37d0d/us-central1/api');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Rethrow the error for the caller to handle
//   }
// };

// export default fetchData;
