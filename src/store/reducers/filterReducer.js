export function filterReducer(state = {}, action){
    switch (action.type){
        case 'PRIORITY':
            return {
               ...state, byPriority: action.payload
            };

        case 'CAREER_NAME_FILTER':
            return {
               ...state, byCareerName: action.payload
            };
    }

    return state;
}

