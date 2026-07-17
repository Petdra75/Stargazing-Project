import React from 'react'
import styled from 'styled-components'
import { SpaceBodyElement } from './SpaceBodyElement'

const StyledVisualisationContainer = styled.div`
    width: 1120px;
    height: 500px;
    background: blue;
    background-image: url("src/assets/background.jpg");
    padding-top: 1em;
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
    gap: 1em;
    `
const StyledImage = styled.img`
    height: 100px;
    width: 100px;
`

function AsteroidVisualisation() { 
  return (
    <StyledVisualisationContainer>
            <h1>The Universe for you</h1>
            <p style={{width:"460px", textAlign: "start"}}>"The universe is monstrously indifferent to the presence of man." - Arthur C. Clarke
Have you ever wondered how the Universe looked like when you were born? Or maybe how many asteroids were close to Earth? How about what phase was the moon in?
Start your expedition with us!</p>
        <SpaceBodyElement img_src='src/assets/earth.png' x={200} y={850} width={100} height={100}/>
        <SpaceBodyElement img_src='src/assets/asteroid.png' x={300} y={780} width={75} height={75}/>
        <SpaceBodyElement img_src='src/assets/moon.png' x={100} y={900} width={100} height={100}/>
    </StyledVisualisationContainer>
  )
}

export default AsteroidVisualisation