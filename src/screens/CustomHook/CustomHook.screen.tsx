import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useGetPokemonQuery} from '../../hooks/useGetPokemonQuery';

const CustomHookScreen = () => {
  const {status, data} = useGetPokemonQuery();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {status === 'loading' && <Text>loading</Text>}
        {status === 'ready' && data && <Text>{data.name}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomHookScreen;
