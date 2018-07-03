   const PeopleListReducer = (state = {
}, action) => {
    switch (action.type) {
        case "GET_PEOPLE_LIST_FULFILLED":
            state = {
            	...state,
                people: action.payload
            };
            break;         
    }
    return state;
};

export default PeopleListReducer;
