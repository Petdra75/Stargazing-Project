import React from 'react'
import EarthComponent, { type EarthProps } from '../EarthComponent'
import MoonComponent, {type MoonProps} from '../MoonComponent'
import earthImage from '../../assets/earth.png'
import moonImage from '../../assets/moon.png'
import styled from 'styled-components'


const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

function HomePage() {
  const earthProps: EarthProps = {
    image: earthImage,
    paragraph: "This is how the Earth looked like when you were born. Good luck finding yourself in this picture!",
    infoBlock: `Like Mars and Venus, Earth has volcanoes, mountains, and valleys.
    Earth's lithosphere, which includes the crust (both continental and oceanic) and the upper mantle,
    is divided into huge plates that are constantly moving. For example, the North American plate moves west
    over the Pacific Ocean basin, roughly at a rate equal to the growth of our fingernails. Earthquakes result
    when plates grind past one another, ride up over one another, collide to make mountains, or split and separate.`,
    caption: "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft"
  }

  const moonProps : MoonProps = {
    image: moonImage,
    paragraph: `“Shoot for the moon. Even if you miss, you'll land among the stars.” - Norman Vincent Peale`,
    infoBlock: `From our perspective on Earth, we always see the same side of the Moon, and we know this
    because if we look at the Moon on a regular basis, its phases may change but we always see the same
    craters and other features. In simple terms, the Moon rotates once every 27.3 days, which is the same
    amount of time it takes for the Moon to orbit our planet.
The result? On Earth we always see the same side of the Moon.`
  }

  return (
    <div>
      <section>
        <title>The Universe for YOU</title>
        <h1>
          The Universe for YOU.
        </h1>
        <p>
          "The universe is monstrously indifferent to the presence of man." - Arthur C. Clarke
        </p>
        <p>Have you ever wondered how the Universe looked like when you were born? Or maybe how many asteroids were close to Earth?
          How about what phase was the moon in?
        </p>
        <p>Start your expedition with us!</p>

        <div>
          <form action="/submit_date_from_user" method="post">
            <input type="date" id="user_birthday" required/>
          </form>
        </div>

        
      </section>
      <Section>
        <h1>The Earth</h1>
        <div>
          <EarthComponent image={earthProps.image} paragraph={earthProps.paragraph} infoBlock={earthProps.infoBlock} caption={earthProps.caption}/>
        </div>
      </Section>
      <Section>
        <h1>The Moon</h1>
        <div>
          <MoonComponent image={moonProps.image} paragraph={moonProps.paragraph} infoBlock={moonProps.infoBlock}/>
        </div>
      </Section>
    </div>
  )
}

export default HomePage