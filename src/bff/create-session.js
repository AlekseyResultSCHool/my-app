import { removeComment } from "./session"; 
import { ROLE } from "../constants"; 

export const createSession = (rolId) => {
    const session = {
         logout() {
            Object.keys(session).forEach((key) => {
                delete session[key];
            });
        },
    };

    switch (rolId) {
        case ROLE.ADMIN: { 
            session.removeComment = removeComment;
            break;
        }
        case ROLE.MODERATOR: { 
            session.removeComment = removeComment;
            break;
        }
        case ROLE.READER: { 
            break;
        }
        default: 
            // ничего не делать
        
    }

    return session;

};