import React from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, Text} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';
import {useAppSelector} from '../../store';
import {useGetPokemonQuery} from '../../store/pokemon/pokemon.api';

const HomeScreen = () => {
  const creditAmount = useAppSelector(state => state.home.creditAmount);
  const {isLoading, data, isError, error} = useGetPokemonQuery(null);

  console.log({isLoading, data, isError, error});

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <Text>Credit Amount: £{creditAmount}</Text>
        {isLoading && <ActivityIndicator />}
        {data && <Text>{data.name}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
