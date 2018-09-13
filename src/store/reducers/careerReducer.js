import { initialState } from "../initialState";

export function careerReducer(state = initialState.careers, action) {

    return state.filter(
        (item) => item.key !== action.payload
    );
}