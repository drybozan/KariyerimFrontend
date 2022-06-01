import axios from "axios";

export default class WorkPlaceService{
    getWorkPlaces(){
        return axios.get("http://localhost:8081/cv/workPlace/getAll")
    }
}