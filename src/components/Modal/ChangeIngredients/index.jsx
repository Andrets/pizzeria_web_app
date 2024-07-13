import { addToCart } from '@app/redux/slices/cartSlice'
import { setIngredients } from '@app/redux/slices/changeIngredientsSlice'
import { useLazyGetAllCompoundsQuery } from '@redux/services/foodApi'
import { setCompoundList } from '@redux/slices/foodSlice'
import { closeModal } from '@redux/slices/modalsSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SwiperCompounds } from './SwiperCompounds'
import { SwiperIngredients } from './SwiperIngredients'
import styles from './styles.module.css'

export const ChangeIngredients = () => {
  const dispatch = useDispatch();
	const [alreadyAdded, setAlreadyAdded] = useState(false)
  const { food } = useSelector((state) => state.modals.data);
	const { cart } = useSelector((state) => state.cart);
  const { compoundList } = useSelector((state) => state.food);
  const { ingredients, compounds, price } = useSelector((state) => state.changeIngredients);
  const close = () => dispatch(closeModal());

  const [getAllCompounds, { data: compounds1, isSuccess }] = useLazyGetAllCompoundsQuery();

  const handleOnClick = () => {
		// Проверка на наличие food.weight и его приведение к числу
		const foodWeight = Number(food.weight) || 0;
		
		// Функция для безопасного суммирования весов
		const safeSumWeight = (items) => {
			return items?.reduce((acc, item) => {
				const itemWeight = Number(item.weight);
				return acc + (isNaN(itemWeight) ? 0 : itemWeight);
			}, 0) || 0;
		};
	
		const totalCompoundWeight = safeSumWeight(compounds);
		const totalIngredientsWeight = safeSumWeight(ingredients);
	
		dispatch(addToCart({
			id: food.id,
			photo: food.photo,
			quantity: 1,
			price: price + Number(food.price),
			name: food.name,
			ingredients: ingredients.filter(item => item.isAdded),
			compounds: compounds,
			weight: foodWeight + totalCompoundWeight + totalIngredientsWeight
		}));
		
		close();
	};

  useEffect(() => {
    if (compoundList?.length === 0) {
      getAllCompounds();
    }
  }, [compoundList?.length, getAllCompounds]);

  useEffect(() => {
    if (isSuccess && compounds1) {
      dispatch(setCompoundList(compounds1));
    }
  }, [isSuccess, compounds1, dispatch]);

	useEffect(() => {
		if (cart.some((item) => item.id === food.id)) {
			setAlreadyAdded(true)
		}
	}, [cart, food.id])

	useEffect(() => {
		const ingredients2 = compoundList.filter((item) => item.dish === food.id)
		dispatch(setIngredients(ingredients2.map((item) => ({...item, isAdded: true}))))
	}, [compoundList, food.id, dispatch])

  return (
    <div className={styles.ingredients__container}>
      <div className={styles.ingredients__name}>	
        <h2>Ингредиенты</h2>
        <button className={styles.ingredients__exit} type="button" onClick={close}>
          <img src="img/exit.svg" alt={food.name}  />
        </button>
      </div>
      <SwiperIngredients />
      <h2 className={styles.ingredients__title}>Добавь в пиццу</h2>
      <SwiperCompounds compounds={compoundList} />
      <div className={styles.ingredients__addCart}>
        <button className={styles.ingredients__button} type="button" onClick={handleOnClick} disabled={alreadyAdded}>
          Добавить в корзину ({Number(price + Number(food.price))}₽)
        </button>
      </div>
    </div>	
  )
};