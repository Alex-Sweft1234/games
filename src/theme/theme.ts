import { createTheme, Theme } from '@mui/material/styles'
import { createBreakpoints } from '@mui/system'
import palette from './palette'

const breakpoints = createBreakpoints({})

const {
  spacing,
  breakpoints: { up, down, values },
} = createTheme()

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1300,
      xl: 1920,
    },
  },
  palette,
  typography: {
    h2: {
      fontSize: 28,
      fontWeight: 600,
      color: palette.primary.main,
      textTransform: 'uppercase',
      marginBottom: 30,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 60,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: '100%',
          margin: 0,
          padding: '20px 0',
          borderRadius: 8,
        },
        paperFullScreen: {
          height: 'auto',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          position: 'relative',
          backgroundColor: 'transparent',
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 600,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontSize: 18,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          minHeight: 50,
          height: 50,
          '&:hover': {
            backgroundColor: palette.primary.contrastText,
          },
          '&.Mui-focused': {
            backgroundColor: palette.primary.contrastText,
          },
          '&.Mui-disabled': {
            backgroundColor: palette.primary.contrastText,
          },
        },
        input: {
          fontSize: 16,
          '&:-internal-autofill-selected': {
            background: 'transparent',
            '-webkit-box-shadow': 'inset 0 0 0 50px #ffffff!important',
            '-webkit-text-fill-color': '#000000!important',
          },
          '&:-webkit-autofill': {
            background: 'transparent',
            '-webkit-box-shadow': 'inset 0 0 0 50px #ffffff!important',
            '-webkit-text-fill-color': '#000000!important',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 16,
          color: palette.primary.main,
        },
        shrink: {
          fontSize: 11,
          transform: 'translate(13px, 0)',
        },
        filled: {
          fontWeight: 400,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          fontSize: 16,
          minHeight: 45,
          fontWeight: 400,
          borderRadius: 4,
          transition: '.2s',
          '&:hover': {
            backgroundColor: `${palette.primary.main}!important`,
          },
          '&.Mui-disabled': {
            opacity: '.8',
            color: `${palette.text.disabled}!important`,
          },
          [down('sm')]: {
            fontSize: 14,
            minHeight: 40,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 11,
          marginLeft: 5,
          marginTop: 0,
          color: palette.error.main,
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          flexWrap: 'nowrap',
          fontSize: 14,
          fontWeight: 400,
          borderRadius: 4,
          alignItems: 'center',
          lineHeight: 1.25,
          textAlign: 'center',
          boxShadow: 'none',
          backgroundColor: '#E6E6FA',
        },
        message: {
          flex: '0 0 100%',
          fontWeight: 400,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '-webkit-tap-highlight-color': 'transparent',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '0 none',
          textAlign: 'center',
          fontSize: 18,
        },
        head: {
          backgroundColor: palette.primary.main,
          color: palette.text.secondary,
        },
        body: {
          borderBottom: `1px solid ${palette.primary.main}`,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: `${palette.primary.contrastText}!important`,
            '&:hover': {
              color: `${palette.primary.contrastText}!important`,
              backgroundColor: `${palette.primary.main}!important`,
            },
          },
          '&:hover': {
            backgroundColor: 'transparent!important',
          },
        },
      },
    },
  },
})
