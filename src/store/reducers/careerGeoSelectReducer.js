export function careerGeoSelectReducer(state = {}, action){
    switch (action.type){
        case 'ADD_CAREER_GEO_TO_SELECT':

            // if(state.length && ( state.indexOf(action.payload) != -1 )){
            if(state.length){
                return [
                    ...state
                ];
            }

            return [
               ...state, action.payload
            ];
        case 'REMOVE_CAREER_GEO_FROM_SELECT':

            let newState = state.filter(item => item != action.payload );

            return newState
    }

    return state;
}