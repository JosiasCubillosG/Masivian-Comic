import React, { useState } from 'react'
import Axios from 'axios'
import Header from './Header.jsx'
import Stars from './Stars.jsx'
import Cargando from './Cargando.jsx'
import Error from './Error.jsx'

class App extends React.Component {

    state = {
        comic:[],
        cargando: true,
        error: false
    }

    componentDidMount = async() => {
        this.getComics()
    }

    getComics = () => {
        Axios.get(`https://xkcd.com/${this.randomNumber()}/info.0.json`)
        .then(res =>{
            if(res.statusText === 'OK') {
                this.setState({
                    comic: res.data,
                    cargando: false
                })
                
            }else{
                this.setState({
                    cargando:false,
                    error: true
                })
                console.log('error else')
                const error = new Error(res.error)
                throw error
            }
        })
        .catch(err =>{
            console.log('Ha ocurrido un error:', err)
            this.setState({
                cargando:false,
                error: true
            })
        })
    }

    randomNumber = (min=1, max=2303 ) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    render(){
        const {comic, cargando, error} = this.state

        if(cargando){
            return <Cargando />
        }

        if(error){
            return <Error />
        }

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