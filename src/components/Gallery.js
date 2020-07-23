import React from 'react';

import Card from './Card';

function Gallery(props) {
    
    return(
        <div className="container d-inline-block">
            <div className="col">
                <div className="row">
                    {props.items && props.items.length > 0 && 
                    <React.Fragment>
                        {props.items.map((item) => (
                        <Card item={item} />
                        ))}
                    </React.Fragment>
                    }
                </div>               
            </div> 
        </div>
    );

}

export default Gallery;