import { useLocation, useNavigate } from 'react-router-dom';
// Material components
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

// Material icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// Utils
import { createBreadCrumbTitle } from '../../utils/utils';

const Heading = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const paths = location.pathname.split('/').splice(1);

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
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default Heading;
