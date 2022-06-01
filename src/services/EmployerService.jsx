import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8081/cv/api/employer/getall");
    }

    getEmployerById(id){
        return axios.get("http://localhost:8081/cv/api/employer/getById?id="+id)
    }

    registerEmployer(values){
        return axios.post("http://localhost:8081/cv/api/employer/add",values)
    }

    update(values){
        return axios.put("http://localhost:8081/cv/api/employer/update",values)
    }
    
}