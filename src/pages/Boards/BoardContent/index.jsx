import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
      display: 'flex',
      alignItems: 'center'
    }}>
      Content Area
    </Box>
  )
}

export default BoardContent
