import React, { Component } from 'react';
import { Fragment } from 'react';

class Counter extends React.Component {
    // state = {
    //     value: this.props.counter.value,
    //     tags: ['tag1', 'tag2', 'tag3'],
    //     imageUrl: 'https://picsum.photos/200'
    // };

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

    handleIncrement = () => {
        // console.log(product);
        console.log("button Cliked");
        // this.state.count ++;
        this.setState({value: this.state.value + 1});
    };

    doHandlerIncrement = () => {
        this.handleIncrement({id: 1})
    };

    render() { 
        console.log("Props", this.props);

        return (
            <div>
                {this.props.children}
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCounter()}</span> */}
                {/* {this.state.tags.length === 0 && 'Please create a new tag! '} */}
                {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>  */}
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button> 
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-3"> Delete </button>
                {/* <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>  */}
                {/* {this.renderTags()} */}
                
            </div>

            // <React.Fragment>
                // Write your code here when using React,Fragment
            // </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += (this.state.value) === 0 ? "warning" : "primary";
        classes += (this.props.counter.value) === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        // const {value} = this.state;
        const {value} = this.props.counter;
        return value === 0 ? <h3>Zero</h3> : value;
    }
}
 
export default Counter;