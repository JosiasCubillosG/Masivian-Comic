import React, { useState } from 'react'
import Axios from 'axios'
import Header from './Header.jsx'
import Stars from './Stars.jsx'

class App extends React.Component {

    state = {
        comic:[]
    }

    componentDidMount = async() => {
        this.getComics()
    }

    getComics = () => {
        Axios.get(`https://xkcd.com/${this.randomNumber()}/info.0.json`)
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

    randomNumber = (min=1, max=2303 ) => {
        return Math.floor(Math.random() * (max - min) + min)
    }




    render(){
        const {comic} = this.state
        return(
            <React.Fragment>
                <Header />
                <div className="comic">
                    <div className="comic__title">
                        <h2>{comic.title}</h2>
                    </div>
                    <div className="comic__image">
                        <img className="comic__image__img" src={comic.img} />
                    </div>
                    <Stars />
                </div>
            </React.Fragment>
        )
    }
}

export default App