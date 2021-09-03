import {useEffect, useState} from 'react';

interface PokemonResponse {
  name: string;
}

export const useGetPokemonQuery = () => {
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState<PokemonResponse>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

        if (!response.ok) {
          throw new Error('response failed');
        }

        const result = await response.json();

        setData(result);
        setStatus('ready');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          setStatus('error');
        }
      }
    };

    callApi();
  }, []);

  return {status, data, error};
};
