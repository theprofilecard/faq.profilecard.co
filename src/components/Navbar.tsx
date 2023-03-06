import { IconButton, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <Box height="5vh">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginLeft="10%"
        marginRight="10%"
      >
        <Link
          href="https://www.profilecard.co/"
          style={{ textDecoration: 'none' }}
          color="primary.light"
        >
          FAQ Profile Card
        </Link>
        <Stack direction="row" alignItems="center">
          <Stack direction="row" alignItems="center">
            <Typography color="secondary">Discord</Typography>
            <IconButton
              color="secondary"
              href="https://discord.com/invite/Qz2VqyYA72"
            >
              <LinkIcon />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography color="secondary">Github</Typography>
            <IconButton
              color="secondary"
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
