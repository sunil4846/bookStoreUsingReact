import {useState,createContext, useContext} from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = (user) => {
        setUser(user)
    }
    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>;    
}

export const useAuth = () => {
    return useContext(AuthContext)
}

// import React from "react";
// import { Redirect } from "react-router-dom";

// function Protected(props){
//     var auth=localStorage.getItem("token")
//     return <div>{auth ? <props.component/> : <Redirect to="/"></Redirect> }</div>
// }

// export default Protected

// <Switch>
//                     <Route path="/SignIn" component={SignIn}/>
//                     <Route exact path="/" component={SignUp}/>
//                    {/* <Route path="/Dashboard" component={Dashboard}/> */}
//                    <Route path="/Dashboard">
//                        <Protected component={Dashboard}/>
//                    </Route>
 
//                 </Switch>