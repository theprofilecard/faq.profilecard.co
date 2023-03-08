import { Link, Stack } from '@mui/material';
import { Box } from '@mui/system';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavBarItem from './NavbarItem';

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
          <NavBarItem
            href="https://www.discord.profilecard.co/"
            title="Discord"
            Icon={LinkIcon}
          />
          <NavBarItem
            href="https://github.com/theprofilecard/faq.profilecard.co"
            title="GitHub"
            Icon={GitHubIcon}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
