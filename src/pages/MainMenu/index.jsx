import { useGetAllCompoundsQuery } from '@app/redux/services/foodApi'
import { setCompoundList } from '@app/redux/slices/foodSlice'
import { Button, Carousel, FoodList, Header, Modal, SearchInput } from '@components'
import { openPizzaDesignerModal } from '@redux/slices/modalsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

export const MainMenu = () => {
  const dispatch = useDispatch();
  const open = () => dispatch(openPizzaDesignerModal());
  const { isOpen } = useSelector((state) => state.search);
  const { data: allCompounds, isLoading: isCompoundsLoading, error: compoundsError } = useGetAllCompoundsQuery();

  useEffect(() => {
    if (allCompounds) {
      dispatch(setCompoundList(allCompounds));
    }
  }, [allCompounds, dispatch]);

  return (
    <div className={styles.mainmenu}>
      <Header />
      {!isOpen ? (
        <>
          <Button title="СОБЕРИ СВОЮ ПИЦЦУ!" icon="img/pizza.png" onClick={open} />
          <Carousel />
        </>
      ) : (
        <SearchInput />
      )}
			<FoodList />
      <Modal />
    </div>
  );
};