
import { AddToDrive, Bolt, FilterList } from '@mui/icons-material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="MernStack Board"
          clickable
          sx={MENU_STYLES}
        />

        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<AddToDrive />}
          label="Add to Google Drive"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<Bolt />}
          label="Automation"
          clickable
          sx={MENU_STYLES}
        />

        <Chip
          icon={<FilterList />}
          label="Filters"
          clickable
          sx={MENU_STYLES}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          startIcon={<PersonAddIcon />}
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '16px',
              border: 'none'
            }
          }}
        >
          <Tooltip title="Remy Sharp" >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Remy Sharp" >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip> <Tooltip title="Remy Sharp" >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip> <Tooltip title="Remy Sharp" >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
