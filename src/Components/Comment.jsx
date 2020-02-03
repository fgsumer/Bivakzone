import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import DisplayComment from './DisplayComment';
import {Translate} from 'react-localize-redux';
import { Link } from "react-router-dom";



const Comment = ({bivak}) => {
    const id = bivak.id;
    const [oldComments, setOldComments]=useState(null)
    const { register, handleSubmit, errors } = useForm();
    const [newComment, setNewComment]=useState(oldComments);

    const LinkWithText = () => (
        <Link to="/">
          <Translate id="here" />
        </Link>
      );

      
    
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
                    <Form.Label><Translate id="comment.name">Name</Translate></Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="your name"
                        ref={register({required:true})}
                        />
                        {errors.name && <span className="errors">Name is required</span>}
                </Form.Group>

                <Form.Group>
                    <Form.Label><Translate id="comment.message">Comment</Translate></Form.Label>
                    <Form.Control 
                        as="textarea"
                        row="3" 
                        name="message" 
                        placeholder="your comment"
                        ref={register({required:true})}
                        />
                        {errors.message && <span className="errors">Comment is required</span>}
                </Form.Group>
                <Button variant="primary" type="submit">
                   <Translate id="comment.submit">Submit</Translate>
                </Button>
            </Form>   
    </Container>
    )

};

export default Comment;