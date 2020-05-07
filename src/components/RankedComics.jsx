import React from 'react'


class RankedComics extends React.Component {
    render(){
        return(
            <div className="rated__comics">
                <div className="rated__comics__hr">
                    <hr className="rated__comics__hr__1" />
                    <hr className="rated__comics__hr__2"/>
                </div>
            
                <h2>Comics Calificados</h2>
                <div>
                    {
                        JSON.parse(localStorage.getItem('comic')) == null 
                        ?
                        ''
                        :
                        JSON.parse(localStorage.getItem('comic')).map(element => {
                            return(
                                <div>
                                    <img src={element.img} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default RankedComics