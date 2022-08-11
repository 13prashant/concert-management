import { useStorage } from '../../hooks/useStorage';
import { BUCKET_LYRICS } from '../../utils/constants';

const Lyrics = () => {
  const { list, isPending, error } = useStorage(BUCKET_LYRICS);

  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {list?.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
};

export default Lyrics;
