import React from 'react'
import charmander from '../../assets/test.json'
import imagen from '../../assets/4.png'
import styled from 'styled-components'

const Detail = () => {
  return (
    <DetailStyle>
        <div className='detailContainer'>
            <div className='cardContainerDetail'>
                <p>{charmander.id}</p>
                <h2>{charmander.name}</h2>
                <img src={imagen}/>
                <div className='healthContainer'>
                    <h3>Health</h3>
                    <span>{charmander.health}</span>
                    <div className='barraContainer'>
                        <div className='barraHealth'></div>
                    </div>
                </div>
                <div className='attackContainer'>
                    <h3>Attack</h3>
                    <span>{charmander.attack}</span>
                    <div className='barraContainer'>
                        <div className='barraAttack'></div>
                    </div>
                </div>
                <div className='defenseContainer'>
                    <h3>Defense</h3>
                    <span>{charmander.defense}</span>
                    <div className='barraContainer'>
                        <div className='barraDefense'></div>
                    </div>
                </div>
                <div className='speedContainer'>
                    <h3>Speed</h3>
                    <span>{charmander.speed}</span>
                    <div className='barraContainer'>
                        <div className='barraSpeed'></div>
                    </div>
                </div>
                <div className='sizeContainer'>
                    <div className='heightContainer'>
                        <h3>Height</h3>
                        <span>{charmander.height}</span>
                    </div>
                    <div className='weightContainer'>
                        <h3>Weight:</h3>
                        <span>{charmander.weight}</span>
                    </div>
                </div>
                <div className='dbContainer'>
                    <h3>Creaado en:</h3>
                    <span>{charmander.createdInDb ? 'Base de Datos' : 'API'}</span>
                </div>
            </div>
        </div>
    </DetailStyle>
  )
}

export default Detail


const DetailStyle = styled.div`
    .detailContainer{
    background-color: rgba(255, 255, 255, 0.413);
    text-align: center;
    display: flex;
    justify-content: center;
}

.cardContainerDetail{
    background-color: #efbb00;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    border-radius: 5%;
    span{
        color:white;
        -webkit-text-stroke: 0.5px black;
        font-size: 150%;
        font-weight: bolder;
    }
}

.cardContainerDetail img{
    width: 300px;
    border: 5px solid black;
    background-color: aliceblue;
}

.healthContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.barraContainer{
    width: 400px;
    height: 30px;
    border: 3px solid white;

}

.barraHealth{
    background-color: red;
    height: 30px;
    width: ${charmander.health}%;
}

.attackContainer{
    display: flex;
    flex-direction: column;
}

.barraAttack{
    background-color: green;
    height: 30px;
    width: ${charmander.attack}%;
}

.defenseContainer{
    display: flex;
    flex-direction: column;
}

.barraDefense{
    background-color: blue;
    height: 30px;
    width: ${charmander.defense}%;
}

.speedContainer{
    display: flex;
    flex-direction: column;
}

.barraSpeed{
    background-color: lightblue;
    height: 30px;
    width: ${charmander.speed}%;
}

.heightContainer{
    display: flex;
    flex-direction: column;
    margin: 2%;
}

.weightContainer{
    display: flex;
    flex-direction: column;
    margin: 2%;
}
.sizeContainer{
    display: flex;
    flex-direction: row;
    
}

.dbContainer{
    display: flex;
    flex-direction: column;
    margin: 2%;
    margin-bottom:5%;
}

`