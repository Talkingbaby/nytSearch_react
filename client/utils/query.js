import axios from 'axios';
import keys from './keys';

// Helper Functions (in this case the only one is runQuery)
var queries = {

  nytQuery: function({topic, startYear, endYear}) {
    if(topic === "") {
        topic= 'love';
    }  
    if(startYear === "") {
        startYear= '19870911';
    }  
    if(endYear === "") {
        endYear= '20160911';
    }  

    var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${keys.nyt}&q=${topic}&begin_date=${startYear}&end_date=${endYear}`;

    return axios.get(url).then(function(response) {

      return response.data.response.docs;
    });

  },
//     // This function hits our own server to retrieve the record of query results
//   getHistory: function() {
//     return axios.get("/api");
//   },

//   // This function posts new searches to our database.
//   postHistory: function(location) {
//     return axios.post("/api", { location: location });
//   }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = queries;
