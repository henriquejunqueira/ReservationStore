import { useEffect } from 'react';
import PlateServices from '../../services/plates';
import Loading from '../loading/page';
import PlateCard from '../../components/plateCard/plateCard';

export default function Plates() {
  const { getAvailablePlates, platesList, platesLoading, refetchPlates } =
    PlateServices();

  useEffect(() => {
    if (refetchPlates) {
      getAvailablePlates();
    }
  }, [getAvailablePlates, refetchPlates]);

  if (platesLoading) {
    return <Loading />;
  }

  console.log(platesList);

  return (
    <>
      <div>
        {platesList.map((plate) => (
          <PlateCard plateData={plate} key={plate._id} />
        ))}
      </div>
    </>
  );
}
