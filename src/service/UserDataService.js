import axios from 'axios'

const BLISS_API_URL = 'http://blissofgiving.us-east-2.elasticbeanstalk.com'
const USER_API_URL = `${BLISS_API_URL}/api/user?userID=`

class UserDataService {

  retrieveUser(userID){
   // return axios.get(`${USER_API_URL}${userID}`);
  }
  loginUser(Data){
  //  return axios.post(`${USER_API_URL}${userID}`);
  }
  login(data){
    return axios.post(`${BLISS_API_URL}/api/rest/v1/token`,data);
  }
  getUser(data){
    return axios.post(`${BLISS_API_URL}/api/rest/v1/token`,data);
  }

}

export default new UserDataService()
