import {
    FETCH_USERS
} from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            /*let invalidUser = {
              "users": [
                  {
                      id: 1,
                      name: "test",
                      company: {
                        name: "test company name"
                      },
                      website: "test website"
                  }
              ]
            };
            return [...state, ...invalidUser.users];*/
            return [...state, ...action.payload.data];
    }

    return state;
}