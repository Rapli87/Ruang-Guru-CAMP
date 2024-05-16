import React from "react";

const Card = ({ data }) => {
    const { imageUrl, name, species, affiliation, grade } = data;

    return (
        <div className="character-card">
            <img src={imageUrl} alt={name} />
            <p>{species}</p>
            <p>{name}</p>
            <p>{affiliation}</p>
            <p>{grade}</p>
        </div>
    );
};

export default Card;
