import React, { useState } from 'react'
import Axios from 'axios'
import Header from './Header.jsx'
import Stars from './Stars.jsx'
import Cargando from './Cargando.jsx'
import Error from './Error.jsx'
import RankedComics from './RankedComics.jsx'


class App extends React.Component {

    state = {
        comic:[],
        cargando: true,
        error: false
    }

    componentDidMount = () => {
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

    ratingComic = (oldComics) => {
        let localS = sessionStorage.getItem('comic')      
        if(localS == null){
            oldComics.push(this.state.comic)
            sessionStorage.setItem('comic', JSON.stringify(oldComics))
        }else{
            oldComics.push(this.state.comic)
            for (let index = 0; index < JSON.parse(localS).length; index++) {
                oldComics.push(JSON.parse(localS)[index])
            }
            sessionStorage.setItem('comic', JSON.stringify(oldComics))
        }
        window.location.reload(true)
    }

    render(){
        var oldComics = []
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
                    <Stars comic={this.state.comic} setComic={() => this.ratingComic(oldComics)} />
                </div>
                <RankedComics/>

            </React.Fragment>
        )
    }
}

export default App