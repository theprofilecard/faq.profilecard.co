import { IconButton, Stack, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import type { FC } from 'react';

type IProps = {
  href: string;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
};

const NavBarItem: FC<IProps> = ({ href, title, Icon }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography color="secondary">{title}</Typography>
      <IconButton color="secondary" href={href}>
        <Icon />
      </IconButton>
    </Stack>
  );
};

export default NavBarItem;
