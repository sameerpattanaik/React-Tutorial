import {createContext} from 'react';

const UserContext = createContext({ 
    user: {
        name: "Dummy name",
        email: "pattansa@gmail.com",
    },
   
});

export default UserContext;