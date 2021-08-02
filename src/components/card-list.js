import React from 'react';
import {View} from 'react-native';
import CharacterCard from './character-card';

const CardList = ({characters}) => {
  return (
    <View>
      {characters.map((user, i) => {
        return (
          <CharacterCard
            key={i}
            id={characters[i].id}
            name={characters[i].name}
            description={characters[i].description}
            year={characters[i].year}
            photo={characters[i].photo}
          />
        );
      })}
    </View>
  );
};

export default CardList;
