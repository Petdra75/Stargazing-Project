import '../App.css'
import React from "react";
import styled from "styled-components";

export interface EarthProps {
    image: string;
    paragraph: string;
    infoBlock: string;
    caption: string;
}

const Image = styled.img`
  width: 800px;
  height: auto;
  flex-grow: 2;
`;


const EarthComponent = (props: EarthProps) => {
    return (
        <div className="container">
            <div className="imageCard">
                <Image src={props.image}/>
                <figcaption>{props.caption}</figcaption>
            </div>
            <div className="paragraphCard">
                <p>
                    {props.paragraph}
                </p>
                <p>{props.infoBlock}</p>
            </div>
        </div>
    )
}

export default EarthComponent;