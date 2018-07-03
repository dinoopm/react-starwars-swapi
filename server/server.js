const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const reactApp = express();
const nodeApp = express();
let Promise = require('bluebird');

reactApp.use(express.static('public'));
reactApp.use(bodyParser.urlencoded({ extended: true }));
reactApp.set('view engine', 'ejs')


reactApp.use(express.static(path.resolve(__dirname, '/views')));

reactApp.get('*', function (req, res) {
  
    res.sendFile(path.join(__dirname, 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })


})

nodeApp.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


nodeApp.get('/getPeopleList/:page', function (req, res) {

    request(`https://swapi.co/api/people?page=${req.params.page}`, function (err, response, body) {
        res.json(JSON.parse(body));
    });  

})


nodeApp.get('/getPeople/:id', function (req, res) {

    request(`https://swapi.co/api/people/${req.params.id}`, function (err, response, body) {

        let peeople = JSON.parse(body);

        let filmsPromises = [];  
        let speciesPromises = [];
        let vehiclesPromises = [];  
        let starshipsPromises = [];  


        function getPromise(url,keys) {
              return new Promise(function(resolve, reject) {
                    request(url, function(err, res, body) {
                        if (err) { return reject(err); }
                        
                       Object.keys(keys).forEach((key)=>{
                            keys[key] = JSON.parse(body)[key];
                        });

                        return resolve(keys);
                    });
              });
        }


        peeople['films'].forEach((url,index)=>{  
             filmsPromises.push(getPromise(url,{"title":"",
                                           "director":"",
                                           "producer":"",
                                           "release_date":""}));
                                          });

        peeople['species'].forEach((url,index)=>{  
             speciesPromises.push(getPromise(url,{"name":"",
                                           "classification":""}));
                                          });

        peeople['vehicles'].forEach((url,index)=>{  
             vehiclesPromises.push(getPromise(url,{"name":"",
                                           "model":"",
                                            "manufacturer":""}));
                                          });

        peeople['starships'].forEach((url,index)=>{  
             starshipsPromises.push(getPromise(url,{"name":"",
                                           "model":"",
                                            "manufacturer":""}));
                                          });

       

      function filmPromise(){
            return new Promise(function(resolve, reject) {
                  Promise.all(filmsPromises).then(function(films) {
                     return resolve(films);
                  });

            });   

       }

      function speciesPromise(){
            return new Promise(function(resolve, reject) {
                  Promise.all(speciesPromises).then(function(species) {
                     return resolve(species);
                  });

            });    

       }

      function vehiclesPromise(){
            return new Promise(function(resolve, reject) {
                  Promise.all(vehiclesPromises).then(function(vehicles) {
                     return resolve(vehicles);
                  });

             });    

       }

      function starshipsPromise(){
            return new Promise(function(resolve, reject) {
                  Promise.all(starshipsPromises).then(function(starships) {
                     return resolve(starships);
                  });

             });    

       }

       Promise.all([filmPromise(),speciesPromise(),vehiclesPromise(),starshipsPromise()]).then(function(body) {
          peeople['films'] = body[0]; 
          peeople['species'] = body[1]; 
          peeople['vehicles'] = body[2]; 
          peeople['starships'] = body[3];          
 
           res.json(peeople);
       });





    });  

})



nodeApp.listen(7000, function () {
  console.log('Nodejs app listening on port 7000!')
})


reactApp.listen(3000, function () {
  console.log('React app listening on port 3000!')
})