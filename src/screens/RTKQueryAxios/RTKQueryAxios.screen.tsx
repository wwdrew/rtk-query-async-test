import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useGetPokemonQuery} from '../../store/pokemonAxios/pokemonAxios.api';

const RTKQueryAxios = () => {
  const {isLoading, data} = useGetPokemonQuery(null);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {isLoading && <Text>loading</Text>}
        {data && <Text>{data.name}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RTKQueryAxios;
