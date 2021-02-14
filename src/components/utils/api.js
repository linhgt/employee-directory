import axios from 'axios';

//Random user generator api
function search(){
    return axios.get("https://randomuser.me/api/?results=100");
}

export default search;