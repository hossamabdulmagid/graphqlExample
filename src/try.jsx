import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Spinner } from 'react-bootstrap'
const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterWithRender = () => {
    return (
        <Query query={GET_CHARACTERS}>
            {({ loading, error, data }) => {
                if (loading) return <Spinner animation="border" variant="warning" size="lg" />
                if (error) return `Error! ${error.message}`;
                return (
                    <div className="container">
                        <h1 className="title">Apollo Client Example </h1>
                        <div className="characters">
                            <div className="row">
                                {data.characters.results.map(character => (
                                    <div key={character.name} className="character">
                                        <div className="col"> <img src={character.image} alt={character.name} /></div>
                                        <div className="col"><p>{character.name}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
}

export default CharacterWithRender;