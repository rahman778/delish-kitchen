import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#1976d2',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ccc', 
        },
        '&:hover fieldset': {
          borderColor: '#aaa', 
        },
        '&.Mui-focused fieldset': {
          borderColor: '#1976d2', 
        },
      },
    },
  })(TextField);


export const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#1864af',
    borderColor: '#1864af',
    color : '#fff',
    letterSpacing : 1,
    marginTop :20,
    '&:hover': {
      backgroundColor: '#2a6fb3',
      borderColor: '#2a6fb3',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#1864af',
      borderColor: '#1864af',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
})(Button);