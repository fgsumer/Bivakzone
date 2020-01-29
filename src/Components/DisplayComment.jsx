import React from 'react';
import moment from 'moment';

const DisplayComment =({oldComments})=>{
    return(
        <ul>
            <h3>Comments</h3>
        {oldComments.data.map((comment)=>{
            const d= moment(comment.date).format('MMM Do YY')
        return (<li><b>{comment.name}</b>:{comment.message},<b>{d}</b></li>)
      })}
        </ul>
    )
};

export default DisplayComment;