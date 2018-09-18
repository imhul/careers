export function filterReducer(state = {}, action){
    switch (action.type){
        case 'LOCATION':
            return {
               ...state, byLocation: action.payload
            };

        case 'CAREER_NAME_FILTER':
            return {
               ...state, byCareerName: action.payload
            };
    }

    return state;
}

