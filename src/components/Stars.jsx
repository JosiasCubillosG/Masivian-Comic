import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


class Stars extends React.Component {

    constructor() {
        super()
        this.button1 = React.createRef()
        this.button2 = React.createRef()
        this.button3 = React.createRef()
        this.button4 = React.createRef()
        this.button5 = React.createRef()
    }

    state = {
        active:''
    }

    handleStars = (buttons, element) => {

        this.setState({
            active: element
        })

        buttons.slice(0,element).map(elemento => {
            elemento.current.style.color = 'orange'
        })

        if(element < this.state.active){
            buttons.slice(element, this.state.active).map(elemento => {
                elemento.current.style.color = 'gray'
            })
        }   
        
    }

    render(){
        var buttons = [this.button1,this.button2, this.button3, this.button4, this.button5]
        return(
            <div className="comic__stars">
                <button onClick={() => this.handleStars(buttons,5)} ref={this.button5}>
                    <FontAwesomeIcon icon={faStar} size="3x" />
                </button>
                <button  onClick={() => this.handleStars(buttons,4)} ref={this.button4}>
                    <FontAwesomeIcon icon={faStar} size="3x" />
                </button>
                <button onClick={() => this.handleStars(buttons,3)} ref={this.button3}>
                    <FontAwesomeIcon icon={faStar} size="3x" />
                </button>
                <button onClick={() => this.handleStars(buttons,2)} ref={this.button2}>
                    <FontAwesomeIcon icon={faStar} size="3x" />
                </button>
                <button onClick={() => this.handleStars(buttons,1)} ref={this.button1}>
                    <FontAwesomeIcon icon={faStar} size="3x" />
                </button>
            </div>
        )
    }
}

export default Stars
