import React from 'react';

import Gallery from '../components/Gallery';
import Hero from '../components/Hero';

function HomePage(props){

    return(
        <div className="">
            <div className="mx-sm-1 mx-md-3 mx-lg-5">
                <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
                <Gallery items={props.items} />
            </div>
        </div>
    );

}

export default HomePage;