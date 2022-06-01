import axios from "axios";

export default class WorkTimeService{
    getWorkTimes(){
        return axios.get("http://localhost:8081/cv/workTime/getAll")
    }
}