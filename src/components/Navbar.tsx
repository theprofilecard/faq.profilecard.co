import { IconButton, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LinkIcon from '@mui/icons-material/Link';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      height="5vh"
      alignItems="center"
      borderBottom="1px solid #e9ebf0"
      justifyContent="space-between"
    >
      <Box marginLeft="10%" marginRight="10%">
        <Typography>FAQ Profile Card</Typography>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        marginLeft="10%"
        marginRight="10%"
      >
        <Typography color="primary">Discord</Typography>
        <IconButton
          color="primary"
          href="https://discord.com/invite/Qz2VqyYA72"
        >
          <LinkIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
