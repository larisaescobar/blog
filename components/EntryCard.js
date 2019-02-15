import React from 'react';

const EntryCard = props => (
    <div>
        <div>
            <h4>{props.entryTitle}</h4>
            <span>{props.entryDate}</span>
            <p>{props.entryExcerpt}</p>
        </div>
        <div>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
    </div>
)

export default EntryCard;