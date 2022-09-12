import { useNavigate } from 'react-router-dom';
// Material components
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// Material icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Heading = ({ paths }) => {
  const navigate = useNavigate();

  const isPathConcert = paths[0] === 'concerts' && paths.length === 3;

  if (isPathConcert) {
    paths.pop();
  }

  const breadcrumbs = paths.map((path, index) => {
    let result = [];

    const lastPath = index === paths.length - 1;

    if (lastPath) {
      result.push(
        <Typography key={index} variant="h6" color="text.primary">
          {path}
        </Typography>
      );
    } else {
      result.push(
        <Typography
          key={index}
          variant="h6"
          color="text.secondary"
          sx={{
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          }}
          onClick={() => navigate(`/${path}`)}
        >
          {path}
        </Typography>
      );
    }

    return result;
  });

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ mb: 4 }}
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default Heading;
