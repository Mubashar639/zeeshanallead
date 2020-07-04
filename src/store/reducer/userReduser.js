import {
    SIGN_UP,
    SIGN_IN,
    APPROVE,
    AUTO_SIGN_IN,
} from '../action/allActionTypes';
import isEmpty from '../utils/isEmpty';

export default function(state = { auth: { success: false } }, action) {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    phoneNumber: action.payload.phoneNumber || false,
                    fullName: action.payload.fullName || false,
                    bloodGroup: action.payload.bloodGroup || false,
                    email: action.payload.email || false,
                    wantToDonate: action.payload.wantToDonate || false,
                    token: action.payload.token || false
                },
            };
        case "update":
            return {
                ...state,
                auth: {
                    ...state.auth,
                    phoneNumber: action.payload.phoneNumber || false,
                    fullName: action.payload.fullName || false,
                    bloodGroup: action.payload.bloodGroup || false,
                    email: action.payload.email || false,
                    wantToDonate: action.payload.wantToDonate || false,
                },
            };
        case 'SignOut':
            return {
                ...state,
                auth: {},
            };
        default:
            return state;
    }
}