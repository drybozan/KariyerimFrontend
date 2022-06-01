import axios from "axios";

export default class FavoriteService{

    async getByCandidateId(candidateId){
        var x = await axios.get(`http://localhost:8081/cv/jobAdFavorites/getByCandidateId?candidateId=${candidateId}`);
        console.log("11111: " + candidateId + JSON.stringify(x))
        return x;
    }

    addFavorite(candidateId,jobAdId){
        return axios.post(`http://localhost:8081/cv/jobAdFavorites/addFavorite?candidateId=${candidateId}&jobAdId=${jobAdId}`)
    }

    removeFavorite(favoriteId){
        return axios.delete(`http://localhost:8081/cv/jobAdFavorites/removeFavorite?favoriteId=${favoriteId}`)
    }

}