import axios from "axios";

export default class ExperianceService{

    add(experiance){
        return axios.post("http://localhost:8081/cv/api/experiances/add",experiance)
    }

    delete(experianceId){
        return axios.delete(`http://localhost:8081/cv/api/experiances/delete?experianceId=${experianceId}`)
    }

    getByCvId(cvId){
        return axios.get(`http://localhost:8081/cv/api/experiances/getByCvId?id=${cvId}`)
    }
}