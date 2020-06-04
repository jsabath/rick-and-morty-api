import React from "react";

function CharacterCard(props){

    return (
        <div className="character-card">
            <img alt={props.character.name} src={props.character.image} />
        </div>
    )
};

export default CharacterCard