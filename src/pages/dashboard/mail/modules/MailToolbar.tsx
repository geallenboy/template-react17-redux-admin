import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import collapseFill from '@iconify/icons-eva/collapse-fill';
import menuFill from '@iconify/icons-eva/menu-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import refreshFill from '@iconify/icons-eva/refresh-fill';
import searchFill from '@iconify/icons-eva/search-fill';
import { Icon } from '@iconify/react';
import {
  Box,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Tooltip,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { MHidden } from '@/components/@material-extend';

const RootStyle = styled('div')(({ theme }: any) => ({
  height: 84,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }: any) => ({
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  },
  [theme.breakpoints.up('md')]: {
    width: 240,
    flexDirection: 'row',
    '&.Mui-focused': { width: 280 }
  }
}));

export default function MailToolbar({
  mails,
  selectedMails,
  onOpenSidebar,
  onToggleDense,
  onSelectAll,
  onDeselectAll,
  ...other
}: any) {
  const handleSelectChange = (event: any) =>
    event.target.checked ? onSelectAll() : onDeselectAll();

  const selectedAllMails = selectedMails === mails && mails > 0;
  const selectedSomeMails = selectedMails > 0 && selectedMails < mails;

  return (
    <RootStyle {...other}>
      <MHidden width="mdUp">
        <IconButton onClick={onOpenSidebar}>
          <Icon icon={menuFill} />
        </IconButton>
      </MHidden>

      <MHidden width="smDown">
        <Checkbox
          checked={selectedAllMails}
          indeterminate={selectedSomeMails}
          onChange={handleSelectChange}
        />
        <Tooltip title="刷新">
          <IconButton>
            <Icon icon={refreshFill} width={20} height={20} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Dense">
          <IconButton onClick={onToggleDense}>
            <Icon icon={collapseFill} width={20} height={20} />
          </IconButton>
        </Tooltip>
        <Tooltip title="更多">
          <IconButton>
            <Icon icon={moreVerticalFill} width={20} height={20} />
          </IconButton>
        </Tooltip>
      </MHidden>

      <Box sx={{ flexGrow: 1 }} />

      <FormControl size="small">
        <SearchStyle
          placeholder="搜索邮件…"
          startAdornment={
            <InputAdornment position="start">
              <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
        />
      </FormControl>

      <MHidden width="smDown">
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Typography variant="body2" sx={{ mx: 2, color: 'text.secondary' }}>
            1 - {mails} of {mails}
          </Typography>
          <Tooltip title="Next page">
            <IconButton>
              <Icon icon={arrowIosBackFill} width={20} height={20} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Previous page">
            <IconButton>
              <Icon icon={arrowIosForwardFill} width={20} height={20} />
            </IconButton>
          </Tooltip>
        </Box>
      </MHidden>
    </RootStyle>
  );
}