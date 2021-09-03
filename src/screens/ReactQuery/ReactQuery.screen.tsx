import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useQuery} from 'react-query';

interface PokemonResponse {
  name: string;
}

const ReactQueryScreen = () => {
  const {isLoading, data} = useQuery<PokemonResponse, Error>('pokemon', () =>
    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json()),
  );

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {isLoading && <Text>loading</Text>}
        {!isLoading && data && <Text>{data.name}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReactQueryScreen;
