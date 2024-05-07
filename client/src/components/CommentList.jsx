import React, {useContext, useEffect} from "react"
import {UserContext} from "../context/UserContext"


function CommentList(props) {
    const {issueId} = props

    const {allComments} = useContext(UserContext)


    const filteredComments = allComments.filter(comment => {
       return comment.issue === issueId
    })
 
    const commentElements = filteredComments.map(comment => {
        return (
            <>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
            </>
        )
    })

    console.log(issueId)

    return ( 
        <div>
            {commentElements}
        </div>
     );
}

export default CommentList;