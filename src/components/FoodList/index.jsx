import { useLazyGetAllFoodQuery } from '@redux/services/foodApi'
import { setMenuList } from '@redux/slices/foodSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FoodCard } from './FoodCard'
import styles from './styles.module.css'

export const FoodList = () => {
	const dispatch = useDispatch()
	const { isOpen } = useSelector((state) => state.search)
	const { activeCategory, categories } = useSelector((state) => state.category)
	const { menuList, filteredMenuList } = useSelector((state) => state.food)
	const [getMenuList, { data: menuListData, isSuccess }] = useLazyGetAllFoodQuery()

	useEffect(() => {
		if (menuList?.length === 0) {
			getMenuList()
		}
	}, [menuList?.length, getMenuList])

	useEffect(() => {
		if (isSuccess && menuListData) {
			dispatch(setMenuList(menuListData))
		}
	}, [isSuccess, menuListData, dispatch])

	if (activeCategory !== 'ВСЕ' && !isOpen) {
		const category_id = categories?.find((category) => category.name === activeCategory)?.id
		const categoryList = menuList?.filter((menu) => menu.category === category_id)
		return (
			<ul className={styles.foodList}>
				{categoryList?.map((menu) => (
					<li key={menu.id} className={styles.foodItem}>
						<FoodCard food={menu} />
					</li>
				))}
			</ul>
		)
	}

	if (isOpen) {
		return (
			<ul className={styles.foodList}>
				{filteredMenuList?.length > 0 ? filteredMenuList?.map((menu) => (
					<li key={menu.id} className={styles.foodItem}>
						<FoodCard food={menu} />
					</li>
				)) : <div className={styles.notFound}>Ничего не найдено</div>}
			</ul>
		)
	}

	return (
		<ul className={styles.foodList}>
			{menuList?.map((menu) => (
				<li key={menu.id} className={styles.foodItem}>
					<FoodCard food={menu} />
				</li>
			))}
		</ul>
	)
}