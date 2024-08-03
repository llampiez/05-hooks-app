import { useCallback, useEffect, useState } from 'react';
import { PokeAPI } from '../types/pokeApi';

type FetchState = {
  data: null | PokeAPI;
  isLoading: boolean;
  hasError: boolean;
  error: null | {
    code: number;
    message: string;
  };
};

type PokeCache = {
  [prop: string]: PokeAPI;
};

const pokeCache: PokeCache = {};

export const useFetch = (url: string) => {
  const [fetchState, setFetchState] = useState<FetchState>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const { data, isLoading, hasError } = fetchState;

  const getFetch = useCallback(async () => {
    if (pokeCache[url]) {
      setFetchState({
        data: pokeCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setFetchState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });

    const response = await fetch(url);

    if (!response.ok) {
      setFetchState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });

      return;
    }

    const data: PokeAPI = await response.json();
    setFetchState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    pokeCache[url] = data;
  },[url])

  useEffect(() => {
    getFetch();
  }, [getFetch, url]);


  return {
    data,
    isLoading,
    hasError,
  };
};
