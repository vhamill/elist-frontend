import React from 'react';

import Button from 'react-bootstrap/Button';

import CardInfo from './CardInfo';

function Card(props) {
    
    return(
        <div className="d-inline-block">
            <div className="col">
                <div className="row">
                    <img className="img-thumbnail img-fluid card-image" src={props.item.image_url} alt={props.item.image_url} />
                </div>
                <div className="row">
                    <div className="card-body">
                        <CardInfo className="break-text" title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
                        <Button href={props.item.link}>View</Button>
                    </div>
                </div>
                
            </div> 
        </div>
    );

}

export default Card;