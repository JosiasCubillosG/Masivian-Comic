import React, { useState } from 'react'
import Axios from 'axios'

class App extends React.Component {

    state = {
        comic:[]
    }

    componentDidMount = async() => {

        Axios.get('https://xkcd.com/614/info.0.json',{
            headers: {"Access-Control-Allow-Origin": true}
        })
        .then(res =>{
            console.log(res)
            if(res.data.status === 'success') {
                console.log(res)
            }else{
                const error = new Error(res.error)
                throw error
            }
        })
        .catch(err =>{
            console.log('Ha ocurrido un error:', err)
        })
    }


    render(){
        return(
            <div>
                H
            </div>
        )
    }
}

export default App