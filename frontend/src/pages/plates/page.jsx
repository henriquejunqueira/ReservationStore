import { useEffect } from 'react';
import PlateServices from '../../services/plates';
import Loading from '../loading/page';

export default function Plates() {
  const { getAvailablePlates, platesList, platesLoading, refetchPlates } =
    PlateServices();

  useEffect(() => {
    if (refetchPlates) {
      getAvailablePlates();
    }
  }, [refetchPlates]);

  if (platesLoading) {
    return <Loading />;
  }

  console.log(platesList);

  return <h1>Plates</h1>;
}
