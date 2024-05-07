import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';


function CommentForm(props) {

    const {addComment} = useContext(UserContext)

    const [formData, setFormData] = useState({
        text: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(props.issueId,formData)
        console.log(formData)
        setFormData({text: ''})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            placeholder='Comment'
            name='text'
            value={formData.text}
            onChange={handleChange}
            />
            <button>Leave Comment</button>
        </form>
     );
}

export default CommentForm;