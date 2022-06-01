import axios from "axios";

export default class CityService{

    getCitys(){
        return axios.get("http://localhost:8081/cv/city/getall")
    }
}