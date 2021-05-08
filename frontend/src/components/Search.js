import React from 'react'
import Result from './Result'
class SearchBar extends React.Component {

// debugger
    state = {searchterm: ''}

    //local state set to empty string

    doSearch = (e) => { this.setState({searchterm: e.target.value }) }

    //sets the input to searchterm in state

    

    resultsOfSearch = (e) => {
        let data = this.props.posts.map(post => post.text )
        //console.log(data)
      
        return data.filter(post => post.toLowerCase().includes(this.state.searchterm.toLowerCase() ) );
        
        }

        
        //first map to get just the text attribute seperated out
        //then filter based on search term
    render(){
        return (
            <div><br/><br/>
            <h3>Search Quotes</h3>
            <input
            type="text"
            placeholder="Search"
            value= {this.state.searchterm}
            onChange= {this.doSearch}
        /><br/><br/>
        {/* { console.log(this.resultsOfSearch()) } */}
        <Result result={this.resultsOfSearch()} />
        <br/>
        </div>
        
        )   
    }
}

export default SearchBar