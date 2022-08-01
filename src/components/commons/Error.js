import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';

const Error = ({ errorMessage, mt, mb }) => {
  return (
    <Alert
      severity="error"
      sx={{
        marginTop: `${mt ? '1rem' : 0}`,
        marginBottom: `${mb ? '1rem' : 0}`,
      }}
    >
      {errorMessage}
    </Alert>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
  mt: PropTypes.bool,
  mb: PropTypes.bool,
};

Error.defaultProps = {
  errorMessage: 'Something went wrong! Please try again later.',
};

export default Error;
