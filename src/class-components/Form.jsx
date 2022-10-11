import React from "react"

export class Form extends React.Component  {
    state = {
        name: 'GB',
    }

    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        return <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChangeName} name="login"/>
        <input type="text" name="password"/>
        <button >send form</button>
    </form>
    }
}