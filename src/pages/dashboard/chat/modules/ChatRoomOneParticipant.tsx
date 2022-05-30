import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import emailFill from '@iconify/icons-eva/email-fill';
import phoneFill from '@iconify/icons-eva/phone-fill';
import pinFill from '@iconify/icons-eva/pin-fill';
import { Icon } from '@iconify/react';
import { Avatar, Box, Button, Collapse, Divider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CollapseButtonStyle = styled(Button)(({ theme }: any) => ({
  ...theme.typography.overline,
  height: 40,
  borderRadius: 0,
  padding: theme.spacing(1, 2),
  justifyContent: 'space-between',
  color: theme.palette.text.disabled
}));

const RowIconStyle = styled(Icon)(({ theme }: any) => ({
  width: 16,
  height: 16,
  marginTop: 4,
  color: theme.palette.text.secondary
}));

const RowTextStyle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: 160,
  wordWrap: 'break-word',
  ...theme.typography.body2
}));

export default function ChatRoomOneParticipant({
  participants,
  isCollapse,
  onCollapse,
  ...other
}: any) {
  const participant = [...participants][0];

  if (participant === undefined) {
    return null;
  }

  return (
    <Box {...other}>
      <Box
        sx={{
          pt: 4,
          pb: 3,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Avatar alt={participant.name} src={participant.avatar} sx={{ width: 96, height: 96 }} />
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="subtitle1">{participant.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {participant.position}
          </Typography>
        </Box>
      </Box>

      <Divider />

      <CollapseButtonStyle
        fullWidth
        color="inherit"
        onClick={onCollapse}
        endIcon={
          <Icon
            icon={isCollapse ? arrowIosDownwardFill : arrowIosForwardFill}
            width={16}
            height={16}
          />
        }
      >
        信息
      </CollapseButtonStyle>

      <Collapse in={isCollapse}>
        <Stack spacing={2} sx={{ p: 2.5, pt: 1 }}>
          <Stack direction="row" spacing={1}>
            <RowIconStyle icon={pinFill} />
            <RowTextStyle>{participant.address}</RowTextStyle>
          </Stack>
          <Stack direction="row" spacing={1}>
            <RowIconStyle icon={phoneFill} />
            <RowTextStyle>{participant.phone}</RowTextStyle>
          </Stack>
          <Stack direction="row" spacing={1}>
            <RowIconStyle icon={emailFill} />
            <RowTextStyle>{participant.email}</RowTextStyle>
          </Stack>
        </Stack>
      </Collapse>
    </Box>
  );
}