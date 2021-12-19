import React, { Component } from 'react';
import Counter from './counter';

class Conters extends React.Component {
    render() { 
        return <div>
            <div onClick={this.props.onReset} className="button btn btn-primary btn-sm m-2">Reset</div>
            {this.props.counters.map(counter => 
            // <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>
            <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete} 
            counter={counter}
            onIncrement={this.props.onIncrement}
            >
                {/* <h4>Counter #{counter.id}</h4> */}
                {/* <h2>Another</h2>
                <p>Checking</p> */}
            </Counter>
            )}
            {/* <Counter key={counter.id} value={counter.value} selected={true}/>)} */}
        </div>;
    }
}
 
export default Conters;