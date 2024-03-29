
import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle, sendEmail, create_note, delete_note, update_note } from "../../../store/actions";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    sendEmail: (data) => dispatch(sendEmail(data)),
    create_note: (data) => dispatch(create_note(data)),
    delete_note: id => dispatch(delete_note(id)),
    update_note: (id, data) => dispatch(update_note(id, data)),
  };
}

const Form = (props) => {
  // Article [title]
  // Email [recipient, subject, body]
  // Note [id, title, body]
  const [title, setTitle] = useState("")
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [id, setId] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (props.type=='Article') {
      props.addArticle({ title })
      setTitle("")
    } else if (props.type=='Contact') {
      props.sendEmail({recipient, subject, body})
    } else if (props.type=='Note') {
      console.log("type note")
      if (props.action=="POST") props.create_note({title, content: body})
      else if (props.action=="PUT") props.update_note(id, {title, content: body})
      else if (props.action=="DELETE") props.delete_note(id)
    }
    else console.error('bad input for handleSubmit in Form file')
  }

  const includes_array = (data, array) => {
    array.forEach(item => {
      data.includes(item);
    });
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {props.show_input.includes('id') && 
        <>
          <div>
            <label htmlFor="id">id</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="id"
              value={id}
              onChange={event => setId(event.target.value)}
            />
          </div>
        </>}
      {props.show_input.includes('title') &&  
        <>
          {props.show_input.includes('id') && <br />}
          <div>
            <label htmlFor="title">Title</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
        </>}
      {props.show_input.includes('Email_recipient') && 
        <>
          {includes_array(props.show_input, ['id', 'title']) && <br />}
          <div>
            <label htmlFor="recipient">Recipient</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={event => setRecipient(event.target.value)}
            />
          </div>
        </>
      }
      {props.show_input.includes('Email_subject') &&  
        <>
          <br />
          <div>
            <label htmlFor="subject">Subject</label>
            &nbsp;&nbsp;
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={event => setSubject(event.target.value)}
            />
          </div>
        </>
      }
      {props.show_input.includes('body') &&  
        <>
          <br />
          <div>
            <label htmlFor="body">Body</label>  
            &nbsp;&nbsp;
            <textarea
              id="body"
              value={body}
              onChange={event => setBody(event.target.value)}
              rows={10}
              cols={100}
            />
          </div>
        </>
      }
      <button type="submit">{
        props.show_input.includes('Email_recipient') ? 'Send email' : 'SAVE'
      }</button>
    </form>
  )
}

const connectForm = connect(
  null,
  mapDispatchToProps
)(Form);

export default connectForm;