import React from 'react'
import Stars from './Stars.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

class RankedComics extends React.Component {

    oldStars = (rating) => {
        var colors = []
        for (let index = 0; index < 5; index++) {
            if(index < rating){
                colors.push('orange')
            }else{
                colors.push('gray')
            }
        }
        return colors
    }

    render(){
        return(
            <div className="rated__comics">
                <div className="rated__comics__hr">
                    <hr className="rated__comics__hr__1" />
                    <hr className="rated__comics__hr__2"/>
                </div>
                <h2>Comics Calificados:</h2>
                    {
                        JSON.parse(sessionStorage.getItem('comic')) == null 
                        ?
                        ''
                        :
                        JSON.parse(sessionStorage.getItem('comic')).map(element => {
                            let color = this.oldStars(element.rating)
                            return(
                                <React.Fragment key={element.num}>
                                    <div className="rated__comics__content">
                                        <div className="rated__comics__content__info" >
                                            <h3>{element.title}</h3>
                                            <img src={element.img} />
                                            <h4>{element.year}-{element.month}-{element.day}</h4>
                                            <p>{element.alt}</p>
                                        </div>
                                        <div className="rated__comics__content__stars" >
                                            <FontAwesomeIcon icon={faStar} color={color.shift()} size="2x" />
                                            <FontAwesomeIcon icon={faStar} color={color.shift()} size="2x" />
                                            <FontAwesomeIcon icon={faStar} color={color.shift()} size="2x" />
                                            <FontAwesomeIcon icon={faStar} color={color.shift()} size="2x" />
                                            <FontAwesomeIcon icon={faStar} color={color.shift()} size="2x" />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
            </div>
        )
    }
}

export default RankedComics