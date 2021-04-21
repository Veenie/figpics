import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/addPost'

class PostInput extends React.Component {
    
    state = {name: '', text: ''}

    //local state lets us control form
    //will use as values for inputs (in jsx tags)
    //without an onChange handler function, the state won't change

    handleChange = (event) =>{
        //debugger
        this.setState({
            [event.target.name]: event.target.value

        })
    }

    //event passed in automatically when onChange evokes handleChange
    //we need our inputs to have a name value that matches the keys in our local state
    //to abstract out and use handler for both inputs
    //[event.target.name] refers to those name values set on input
    //brackets cause the value to be read first to see what it is, then assigned
    //it's like assigning a key to object in console, we use bracket notation to set it
    //event.target.value refers to 'value=' set on each input, telling it what in the state to change

    handleSubmit = (event) => {
        //debugger
        event.preventDefault()
        this.props.addPost(this.state)
    }

    //onSubmit put in form tag so it listens to whole form
    //upon submission, connect to proper action to add post to db
    //prevent default to stop redirect
    //we send the state as it is upon submission (changed by the form inputs) to addPost action

    
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Who said it?' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <input type='text' placeholder='One-Liner' value={this.state.text} name="text" onChange={this.handleChange}/><br/>
                    <input type='submit' />


                </form>
            </div>
        )
    }
}

export default connect(null, {addPost})(PostInput)

//first arg is null, don't need to mapstatetoprops, not using or displaying current global state
//but need that null there so we can use second arg because dispatch needed, want to send form data down the chain of action, reducer, persist to db
//