import React, { useState } from 'react'
import Axios from 'axios'
import Header from './Header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {

    state = {
        comic:[]
    }

    componentDidMount = async() => {

        Axios.get('https://xkcd.com/614/info.0.json')
        .then(res =>{
            if(res.statusText === 'OK') {
                this.setState({
                    comic: res.data
                })
                console.log(res.data)
            }else{
                console.log('error else')
                const error = new Error(res.error)
                throw error
            }
        })
        .catch(err =>{
            console.log('Ha ocurrido un error:', err)
        })
    }

    handleStars = (e) => {
    }


    render(){
        const {comic} = this.state
        return(
            <React.Fragment>
                <Header />
                <div className="comic">
                    <div className="comic__title">
                        <h2>{comic.safe_title}</h2>
                    </div>
                    <div className="comic__image">
                        <img className="comic__image__img" src={comic.img} />
                    </div>
                    <div className="comic__stars">
                        <button onClick={this.handleStars()}>
                            <FontAwesomeIcon className="comic__stars__star" icon={faStar} size="3x" />
                        </button>
                        <button onClick={this.handleStars()}>
                            <FontAwesomeIcon className="comic__stars__star" icon={faStar} size="3x" />
                        </button>
                        <button onClick={this.handleStars()}>
                            <FontAwesomeIcon className="comic__stars__star" icon={faStar} size="3x" />
                        </button>
                        <button onClick={this.handleStars()}>
                            <FontAwesomeIcon className="comic__stars__star" icon={faStar} size="3x" />
                        </button>
                        <button onClick={this.handleStars()}>
                            <FontAwesomeIcon className="comic__stars__star" icon={faStar} size="3x" />
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App