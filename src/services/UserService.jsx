import axios from "axios";

export default class UserService{
    login(values){
        return axios.post("http://localhost:8081/cv/api/users/login",values)
    }
}