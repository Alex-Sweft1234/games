import createPalette from '@mui/material/styles/createPalette'

const palette = createPalette({
  mode: 'light',

  primary: {
    main: '#303030',
    dark: '#000000',
    contrastText: '#F4F6F9',
  },

  error: { main: '#FF4D4A' },

  text: {
    primary: '#335DA8',
    secondary: '#FFFFFF',
    disabled: 'rgba(46, 52, 66, .5)',
  },

  action: {
    active: '#335DA8',
    hover: '#335DA8',
    focus: '#335DA8',
    selected: '#335DA8',
    disabled: '#aeaeae',
    disabledBackground: 'rgba(120,120,120, .7)',
  },
})

export default palette
