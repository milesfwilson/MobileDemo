import * as React from 'react';
import {TextInput} from 'react-native';
import {styles} from './text-search.styles';

interface TextSearchProps {
  searchText: string;
  setSearchText: (value: React.SetStateAction<string>) => void;
}

const TextSearch = ({searchText, setSearchText}: TextSearchProps) => {
  return (
    <TextInput
      value={searchText}
      onChangeText={s => setSearchText(s)}
      placeholder="Search"
      style={[styles.searchInput]}
    />
  );
};

export {TextSearch};
