//your code here

import React, { Component } from 'react'
// import Blogpost from './Blogpost'

export default class Comment extends Component {

    render() {
        return (
            <div className="comment" >{this.props.commentText}</div>
        )
    }

}