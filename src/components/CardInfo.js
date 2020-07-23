import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="" style={style} >
            <h2 className="">{props.title}</h2>
            <p className="">{props.subTitle}</p>
        </animated.div>
    );
}

export default CardInfo;