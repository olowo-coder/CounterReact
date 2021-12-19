import React, { Component } from 'react';
import { Fragment } from 'react';

class Counter extends React.Component {
    state = {
        count: 2,
        tags: ['tag1', 'tag2', 'tag3']
        // imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 10,
        borderRaduis: 200,
        backgroundColor: '#d74',
        fontWeight: 'bolder'
    };

    render() { 

        return (
            <div>
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCounter()}</span> */}
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button> 
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> 
            </div>

            // <React.Fragment>
                // Write your code here when using React,Fragment
            // </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count) === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const {count} = this.state;
        return count === 0 ? <h3>Zero</h3> : count;
    }
}
 
export default Counter;