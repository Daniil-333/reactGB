import {Component} from "react";

export class Count extends Component {
    state = {
        count: 1,
    }

    handleClick = () => {
        console.log('clicked');
        this.setState({count: this.state.count + 1})
    }

    render () {
        return <>
        <p>Count props: { this.props.count }</p>
        <p>Count state: { this.state.count }</p>
        <button type="button" onClick={this.handleClick}>Click</button>
    </>
    }
}