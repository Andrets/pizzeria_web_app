import { Button, Carousel, FoodList, Header, Modal, SearchInput } from '@components'
import { useTelegram } from '@hooks/useTelegram'
import { useGetAllCategoriesQuery } from '@redux/services/categoryApi'
import { useGetAllFoodQuery } from '@redux/services/foodApi'
import { useCreateUserMutation, useGetAllUsersQuery } from '@redux/services/userApi'
import { setCategories } from '@redux/slices/categorySlice'
import { addFoodList } from '@redux/slices/foodSlice'
import { openPizzaDesignerModal } from '@redux/slices/modalsSlice'
import { addUser, setUsersList } from '@redux/slices/userSlice'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

export const MainMenu = () => {
	const { initDataUnsafe } = useTelegram()
	const user_id = initDataUnsafe?.user?.id

	const dispatch = useDispatch()
	const open = () => dispatch(openPizzaDesignerModal())
	const { isOpen } = useSelector((state) => state.search)
	const { usersList } = useSelector((state) => state.user)

	const { data: AllFood = [], isFetching: isFetchingAllFood, error, isLoading } = useGetAllFoodQuery()
	const { data: usersData = [], isLoading: isUsersLoading, error: usersError } = useGetAllUsersQuery();
	const [createUser] = useCreateUserMutation();
	const { data: AllCategories, isFetching: isFetchingCategories } = useGetAllCategoriesQuery();

	useEffect(() => {
		if (!isFetchingCategories && AllCategories) {
			dispatch(setCategories(AllCategories))
		}
	}, [AllCategories, dispatch, isFetchingCategories])

	useEffect(() => {
		if (!isFetchingAllFood && AllFood) {
			dispatch(addFoodList(AllFood))
		}
	}, [AllFood, isFetchingAllFood, dispatch])

	const createUserHandler = useCallback(async (user_data) => {
		await createUser(user_data);
		dispatch(addUser(user_data));
	}, [createUser, dispatch]);

	useEffect(() => {
		if (!isUsersLoading && usersData.length) {
			dispatch(setUsersList(usersData));
		}
	}, [usersData, dispatch, isUsersLoading]);

	useEffect(() => {
		if (user_id && usersData.length && !usersList.length) {
			const isIdExists = usersData.some((user) => user.tg_id === user_id);
			if (!isIdExists) {
				const user_data = {
					tg_id: user_id,
					isActive: true,
					phone_number: '',
				}
				createUserHandler(user_data);
			}
		}
	}, [createUserHandler, user_id, usersData, usersList]);

	return (
		<div className={styles.mainmenu}>
			<Header />
			{!isOpen ? (
				<><Button title="СОБЕРИ СВОЮ ПИЦЦУ!" icon="img/pizza.png" onClick={open} /><Carousel /></>
			) : (
				<SearchInput />
			)}
			<FoodList isLoading={isLoading} error={error} />
			<Modal />	
		</div>
	)
}