import { IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <Box height="5vh" borderBottom="1px solid #e9ebf0">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginLeft="10%"
        marginRight="10%"
      >
        <Typography>FAQ Profile Card</Typography>
        <Stack direction="row" alignItems="center">
          <Stack direction="row" alignItems="center">
            <Typography color="primary">Discord</Typography>
            <IconButton
              color="primary"
              href="https://discord.com/invite/Qz2VqyYA72"
            >
              <LinkIcon />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography color="primary">Github</Typography>
            <IconButton
              color="primary"
              href="https://github.com/theprofilecard"
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
