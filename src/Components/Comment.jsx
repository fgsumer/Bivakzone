import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import DisplayComment from './DisplayComment';

const Comment = ({bivak}) => {
    const id = bivak.id;
    const [oldComments, setOldComments]=useState(null)
    const { register, handleSubmit } = useForm();
    const [newComment, setNewComment]=useState(oldComments);
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/comment/${id.replace("/", "%2F")}`)
             .then((comments)=>setOldComments(comments))
             .catch(err=> console.log(err));
    },[newComment])

    const onSubmit =( {name, message}, e) => { 
        e.target.reset();
        axios
        .post(`http://localhost:8000/comment`, { id, name, message },
        {
         headers: { 'Content-Type': 'application/json' }
         })
         .then((result)=>{
            setNewComment(result);
         })
         .catch(err=> console.log(err));
     }

    return (
        <Container>
            {oldComments? <DisplayComment oldComments={oldComments}/>: null}     
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="your name"
                        ref={register}
                        />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control 
                        as="textarea"
                        row="3" 
                        name="message" 
                        placeholder="your comment"
                        ref={register}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>     
    </Container>
    )

};

export default Comment;