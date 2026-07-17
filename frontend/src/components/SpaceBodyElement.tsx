import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 50px;
    height: 50px;
`
interface SpaceBodyElementProps {
    img_src : string
    width: number
    height: number
    x: number
    y: number
}

export const  SpaceBodyElement = ({width, height, x, y, img_src} : SpaceBodyElementProps) => {
    return (
    <div style={{
        width: `${width}px`,
        height: `${height}px`, 
        position: "absolute",
        top: x,
        left: y
    }}>

        <StyledImage src={img_src} style={{width: width, height: height}} alt="" />
    </div>
  )
}
