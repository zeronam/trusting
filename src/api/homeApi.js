import axios from 'axios';

const API_KEY = '5763846de30d489aa867f0711e2b031c';

export const newsCreate = (params) => {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${API_KEY}&page${params.num}`
      ).then(function(res) {
        return res;
      })
      .catch(function(error) {
        console.log(error);
      });      
};