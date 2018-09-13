export function careerNamesSelectReducer(state = {}, action){
    switch (action.type){
        case 'ADD_CAREER_NAME_TO_SELECT':

            if(state.length && ( state.indexOf(action.payload) != -1 )){
                return [
                    ...state
                ];
            }

            return [
               ...state, action.payload
            ];
        case 'REMOVE_CAREER_NAME_FROM_SELECT':

            let newState = state.filter(item => item != action.payload );

            return newState
    }

    return state;
}