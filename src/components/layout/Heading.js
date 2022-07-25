import { useLocation, useNavigate } from 'react-router-dom';
// Material components
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

// Material icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// Utils
import { createBreadCrumbTitle } from '../../utils/utils';

const Heading = ({ paths }) => {
  const navigate = useNavigate();

  const breadcrumbs = paths.map((path, index) => {
    let result = [];

    const lastPath = index === paths.length - 1;
    const breadCrumbTitle = createBreadCrumbTitle(path);

    if (lastPath) {
      result.push(
        <Typography key={index} variant="h6" color="text.primary">
          {breadCrumbTitle}
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
          {breadCrumbTitle}
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
