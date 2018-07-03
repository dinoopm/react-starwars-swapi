const PeopleDetailsReducer = (state = {
}, action) => {
    switch (action.type) {
        case "GET_PEOPLE_FULFILLED":
            state = {
                ...state,
                peopledetails: action.payload
            };
            break;            
    }
    return state;
};

export default PeopleDetailsReducer;
