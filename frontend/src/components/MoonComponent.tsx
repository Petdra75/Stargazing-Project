import React from "react";
import styled from "styled-components";

export interface MoonProps {
    image: string;
    paragraph: string;
    infoBlock : string;
}

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MoonComponent = (props: MoonProps) => {
    return (
        <div className="container">
            <div>
                <Image src={props.image}/>
                <p>
                    {props.paragraph}
                </p>
                <p>{props.infoBlock}</p>
            </div>
        </div>
    )
}

export default MoonComponent;