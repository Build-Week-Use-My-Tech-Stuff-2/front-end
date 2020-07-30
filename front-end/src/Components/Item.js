import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
 

const ItemDiv = styled.div`
display: flex;
flex-direction: column;
background-color: ivory;
max-width: 15%;
height: 185px;
width: 175px;
margin: 1%;

    img{
        height: 70%;
         width: 100%;
    }

    h3{
        height: 10%;
        margin: 3px 3px;
        padding: 6px 0;
        line-height: 1rem;
    }

    h4{ 
        height: 10%;
        max-height: inherit;
        margin-top: 3px;
        margin-bottom: 3px;
    }
`;

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    
    export default function Item({item, key, className}) {
        const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
        
        const fadeIn = useSpring({opacity: 1, from: {opacity: 0}})


    return (
        <ItemDiv class={className} key={key} >
             <animated.div 
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>
                <img src={item.itemimg}></img>
                <h3>{`${item.itemname}`}</h3>
                <h4>{`$${item.itemrate}`}</h4>
             </animated.div>
        </ItemDiv>
    )
}
