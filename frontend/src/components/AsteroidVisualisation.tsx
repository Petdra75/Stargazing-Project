import { useEffect, useState, type JSX } from 'react'
import styled from 'styled-components'
import { SpaceBodyElement } from './SpaceBodyElement'
import axios from 'axios'

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
type CloseObject =  {
        id : string
        name : string
        absolute_magnitude_h: number
        estimated_diameter: {
            estimated_diameter_min : number,
            estimated_diameter_max : number,
        } 
        miss_distance : {
            astronomical :string,
            lunar: string,
            kilometers: string,
            miles: string,
        }
}
type AsteroidData = {
    element_count: number
    close_objects: CloseObject[]
}
function AsteroidVisualisation() { 
    const [closeObjectArray, setcloseObjectArray] = useState<CloseObject[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8000/neow").then((res) => {
            const data : AsteroidData = res.data; 
            setcloseObjectArray(data.close_objects);
        })
    }, [])
    
    const renderItems = () => {
        return closeObjectArray.map((closeObject, idx) => {
            const missDistance = parseFloat(closeObject.miss_distance.astronomical)
            const x_diff = 500 * missDistance
            const y_diff = 500 * missDistance
            return (
                <SpaceBodyElement
                    key={closeObject.id ?? idx}
                    img_src='src/assets/asteroid.png'
                    x={200 + x_diff}
                    y={820 + y_diff}
                    width={50}
                    height={500}
                />
            )
        })
    }

    return (
    <StyledVisualisationContainer>
            <h1>The Universe for you</h1>
            <p style={{width:"460px", textAlign: "start"}}>"The universe is monstrously indifferent to the presence of man." - Arthur C. Clarke
Have you ever wondered how the Universe looked like when you were born? Or maybe how many asteroids were close to Earth? How about what phase was the moon in?
Start your expedition with us!</p>
        <SpaceBodyElement img_src='src/assets/earth.png' x={200} y={820} width={100} height={100}/>
        <SpaceBodyElement img_src='src/assets/moon.png' x={100} y={920} width={120} height={120}/>
        {renderItems()}
    </StyledVisualisationContainer>
  )
}

export default AsteroidVisualisation