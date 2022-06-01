import axios from "axios";

export default class SchoolService{

    getByCvId(cvId){
        return axios.get(`http://localhost:8081/cv/api/school/getByCvId?cvId=${cvId}`)
    }

    addScholl(school){
        return axios.post("http://localhost:8081/cv/api/school/addSchool",school)
    }

    deleteSchool(schoolId){
        return axios.delete(`http://localhost:8081/cv/api/school/deleteSchool?schoolId=${schoolId}`)
    }
}