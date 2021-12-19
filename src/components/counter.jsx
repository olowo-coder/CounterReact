import React, { Component } from 'react';
import { Fragment } from 'react';

class Counter extends React.Component {
    state = {
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']
        // imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 10,
        borderRaduis: 200,
        backgroundColor: '#d74',
        fontWeight: 'bolder'
    };

    // constructor(){
    //     super();
    //     console.log("Constructor", this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags(){
        if (this.state.tags.length === 0 ) return <p>There are no tags !</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>; 
    }

    handleIncrement = (product) => {
        console.log(product);
        console.log("button Cliked");
        // this.state.count ++;
        this.setState({count: this.state.count + 1});
    };

    doHandlerIncrement = () => {
        this.handleIncrement({id: 1})
    };

    render() { 

        return (
            <div>
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCounter()}</span> */}
                 {/* {this.state.tags.length === 0 && 'Please create a new tag! '} */}

                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button> 
                {this.renderTags()}
                
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