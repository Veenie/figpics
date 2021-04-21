import React from 'react'

export default class PostInput extends React.Component {
    
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

    
    render () {
        return (
            <div>
                <form>
                    <input type='text' placeholder='Who said it?' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <input type='text' placeholder='One-Liner' value={this.state.text} name="text" onChange={this.handleChange}/>


                </form>
            </div>
        )
    }
}
