import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Contexts
import { useAuthContext } from '../../hooks/useAuthContext';
// Hooks
import { useLogin } from '../../hooks/useLogin';
// Material components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

// Material Icons
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
// Constants
import { APP_NAME } from '../../utils/constants';

const Welcome = () => {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const { login } = useLogin();

  useEffect(() => {
    user && navigate('/concerts');
  }, [user, navigate]);

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        sx={{
          maxWidth: '25rem',
          textAlign: 'center',
          padding: '2rem',
        }}
        variant="outlined"
      >
        <Typography variant="h5" mb={2}>
          {APP_NAME}
        </Typography>
        <Typography variant="h6">Sign In</Typography>
        <Typography variant="p">
          to continue to access concerts' details
        </Typography>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          sx={{ margin: '2rem 0 1rem 0' }}
          onClick={login}
        >
          Sign In with Google
        </Button>
        <br />
        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          fullWidth
          sx={{ margin: '0 0 2rem 0' }}
        >
          Sign In with Facebook
        </Button>
        <Typography variant="h6" mb={2}>
          OR
        </Typography>
        <Typography variant="a">
          Continue to{' '}
          <Link onClick={() => navigate('/lyrics')} sx={{ cursor: 'pointer' }}>
            FIND SONGS' LYRICS
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Welcome;
