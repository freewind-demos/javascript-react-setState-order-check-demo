import React, {Component} from 'react'

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'react'
        }
    }

    changeName() {
        console.log('> changeName')
        this.setState({
            username: '(modified)'
        }, function () {
            console.log('username should changed to (modified): ', this.state.username)
        })
        console.log('username should not be changed at this time point: ', this.state.username)
    }

    render() {
        return <div>
            <h1>Hello {this.state.username}</h1>
            <button type='button' onClick={this.changeName.bind(this)}>change name</button>
        </div>
    }
}

export default Hello
