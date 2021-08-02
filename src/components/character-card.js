import React from 'react';
import {Text} from 'react-native';
import {Card, Button} from 'react-native-elements';

const CharacterCard = ({name, description, photo, year, id}) => {
  return (
    <>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: photo}}>
          <Text style={{marginBottom: 80}} />
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card.Image>
      </Card>
    </>
  );
};

export default CharacterCard;
