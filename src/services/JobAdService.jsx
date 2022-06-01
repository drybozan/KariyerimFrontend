import axios from "axios";

export default class JobAdService{
    getActiveJobAds(){
        return axios.get("http://localhost:8081/cv/api/jobAd/getActiveAds");
    }

    getByJobAdId(id){
        return axios.get("http://localhost:8081/cv/api/jobAd/getByJobAdId?id="+id)
    }

    getActiveAdsByCompanyId(id){
        return axios.get("http://localhost:8081/cv/api/jobAd/getActiveAndCompanyId?companyId="+id)
    }

    add(values){
        return axios.post("http://localhost:8081/cv/api/jobAd/create",values)
    }

    getPageableAndFilterJobPostings(pageNo, pageSize, filterOption){
        return axios.post(`http://localhost:8081/cv/api/jobAd/getByActiveAndFilter?pageNo=${pageNo}&pageSize=${pageSize}`,filterOption);
    }

    
}