import React from "react";
import CharacterCard from "./CharacterCard"


function CharacterSection(props) {

    return (
        <section>
            {props.characters.map(character => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </section>
    );
}


export default CharacterSection;