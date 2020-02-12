import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DisplayComment from './DisplayComment';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';
import styles from './commentform.module.css';

const Comment = ({ id }) => {
  const [oldComments, setOldComments] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const [newComment, setNewComment] = useState(oldComments);

  const commentGetter = () => {
    axios
      .get(`http://localhost:8000/comment/${id.replace('/', '%2F')}`)
      .then(comments => setOldComments(comments))
      .catch(err => console.log(err));
  };
  commentGetter();

  const LinkWithText = () => (
    <Link to="/">
      <Translate id="here" />
    </Link>
  );

  useEffect(() => {
    commentGetter();
  }, [newComment]);

  const onSubmit = ({ name, message }, e) => {
    e.target.reset();
    axios
      .post(
        `http://localhost:8000/comment`,
        { id, name, message },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then(result => {
        setNewComment(result);
      })
      .catch(err => console.log(err));
  };

  return (
    //     <Row>
    //         <Col lg={12}>
    //             {oldComments ? <DisplayComment oldComments={oldComments}/> : null}
    //             <Form onSubmit={handleSubmit(onSubmit)}>
    //                 <Form.Group>
    //                     <Form.Label><Translate id="comment.name">Name</Translate></Form.Label>
    //                     <Form.Control
    //                         type="text"
    //                         name="name"
    //                         placeholder="your name"
    //                         ref={register({required: true})}
    //                     />
    //                     {errors.name && <span className="errors">Name is required</span>}
    //                 </Form.Group>

    //                 <Form.Group>
    //                     <Form.Label><Translate id="comment.message">Comment</Translate></Form.Label>
    //                     <Form.Control
    //                         as="textarea"
    //                         row="3"
    //                         name="message"
    //                         placeholder="your comment"
    //                         ref={register({required: true})}
    //                     />
    //                     {errors.message && <span className="errors">Comment is required</span>}
    //                 </Form.Group>
    //                 <Button variant="primary" type="submit">
    //                     <Translate id="comment.submit">Submit</Translate>
    //                 </Button>
    //             </Form>
    //         </Col>
    //     </Row>
    // )

    <Row>
      <Col lg={12}>
        <article className={styles.form}>
          {oldComments ? <DisplayComment oldComments={oldComments} /> : null}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <h4 className={styles.h11}>Leave you comment!</h4>
              <Form.Label>
                <Translate id="comment.name">Name * </Translate>
              </Form.Label>
              <Form.Control
                className={styles.formItems}
                type="text"
                name="name"
                placeholder="Type your name..."
                ref={register({ required: true })}
              />
              {errors.name && <span className="errors">Name is required</span>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Comment * </Form.Label>
              <Form.Control
                as="textarea"
                row="3"
                name="message"
                placeholder="Type your comment..."
                ref={register({ required: true })}
                className={styles.formItems}
              />
              {errors.message && <span className="errors">Comment is required</span>}
            </Form.Group>
            <Button className={styles.button} variant="primary" type="submit">
              Post
            </Button>
          </Form>
        </article>
      </Col>
    </Row>
  );
};

export default Comment;
