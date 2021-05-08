import React from 'react'


export default class Result extends React.Component {
render() {
    return(<div>
        {/* {console.log(this.props.result)} */}
        {this.props.result.map(r => <div><h3>{r}</h3></div>)}
        </div>
    )
}
}