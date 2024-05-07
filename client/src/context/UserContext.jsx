import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)
    const [allIssues, setAllIssues] = useState([])
    const [allComments, setAllComments] = useState([])

    function signup(credentials) {
        axios.post("/api/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/api/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        })
        )
    }

    function getUserIssues() {
        userAxios.get("/api/main/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    function addIssue(newIssues) {
        userAxios.post("/api/main/issue", newIssues)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    function getAllIssues() {
        userAxios.get('/api/main/issue')
            .then(res => setAllIssues(res.data))
            .catch(err => console.log(err))
    }

    function getAllComments(){
        userAxios.get('/api/main/comments')
        .then(res => setAllComments(res.data))
        .catch(err => console.log(err))
    }

    function addComment(id, comment){
        userAxios.post(`/api/main/comments/${id}`, comment)
        .then(res => setAllComments(prevAllComments => {
           return [
            ...prevAllComments,
            res.data
           ] 
    }))
        .catch(err => console.error(err))
    }


    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthErr,
                getUserIssues,
                getAllIssues,
                allIssues,
                getAllComments,
                allComments,
                addComment
            }}>
            {props.children}
        </UserContext.Provider>
    )
}