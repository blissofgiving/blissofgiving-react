import axios from 'axios'

const BLISS_API_URL = 'http://localhost:8080'
const USER_API_URL = `${BLISS_API_URL}/api/user?userID=`

class UserDataService {

  retrieveUser(userID){
    return axios.get(`${USER_API_URL}${userID}`);
  }

}

export default new UserDataService()
