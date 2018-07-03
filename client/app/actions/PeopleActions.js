import axios from 'axios';

export function getPeopleList(page) {
    let pageNumber = (page)? page : 1;
    return {
        type: "GET_PEOPLE_LIST",
        payload: new Promise((resolve, reject) => {
            let url = `http://localhost:7000/getPeopleList/${pageNumber}`;
            axios.get(url).then(function(response){
                console.log(response.data);
                resolve(response.data);
            });  
        })
    };
}


export function getPeople(id) {

    return {
        type: "GET_PEOPLE",
        payload: new Promise((resolve, reject) => {
            let url = `http://localhost:7000/getPeople/${id}`;
            axios.get(url).then(function(response){
                console.log(response.data);
                resolve(response.data);
            });  
        })
    };
}

