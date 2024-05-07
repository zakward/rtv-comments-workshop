import { useContext } from 'react'
import moment from 'moment'
import CommentContainer from './CommentContainer'

export default function Issue(props) {
  const { title, description, _id, username, createdAt } = props
  
  const timeStamp = moment(createdAt).fromNow()
  return (
    <div className="todo">

      <h3>Issue posted by: {username}</h3>
      <h1>Title: {title}</h1>
      <h3>Description: {description}</h3>
      <p>{timeStamp}</p>
      <div>
        <p>Upvotes: 0</p>
        <button>Upvote</button>
      </div>

      <div>
        <p>Downvotes: 0</p>
        <button>Downvote</button>
      </div>
      <CommentContainer issueId = {_id} />
    </div>
  )
}