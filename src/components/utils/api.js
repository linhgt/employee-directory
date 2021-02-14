import axios from 'axios';

const BASEURL = "https://randomuser.me/api/?results=100";
//Random user generator api
function search(){
    return axios.get(BASEURL);
}

export default search;