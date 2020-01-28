import React, {useState} from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import ConfirmMessage from './ConfirmMessage';

const Comment = ({bivak}) => {
    const [submitted, SetSubmitted]= useState(false)
    const { register, handleSubmit, errors } = useForm();
    const id = bivak.id;
    const onSubmit =( {name, message}) => { 
        axios
        .post(`http://localhost:8000/comment/:${id}`, { name, message},
        {
         headers: { 'Content-Type': 'application/json' }
         })
         .then((result)=>{
             console.log(result)
         })
         .catch(err=> console.log(err));    
         SetSubmitted(true);
     }

    return (
        <Container>
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
        {submitted ? ConfirmMessage('Commented Successfully', 'Thank you for feedback!', '/home', 'OK') : null}
    </Container>
    )

};

export default Comment;