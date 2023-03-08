import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { FC } from 'react';

type IProps = {
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<IProps> = ({ searchHandler }) => {
  return (
    <TextField
      variant="outlined"
      color="primary"
      onChange={searchHandler}
      placeholder="Search"
      InputProps={{
        sx: {
          '& fieldset': {
            borderColor: 'secondary.light',
          },
        },
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
