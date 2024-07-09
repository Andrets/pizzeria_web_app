import { setFilteredFoodList } from '@app/redux/slices/foodSlice'
import { setSearchQuery } from '@app/redux/slices/searchSlice'
import lodash from 'lodash'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

export const SearchInput = () => {
	const dispatch = useDispatch()
	const { searchQuery } = useSelector((state) => state.search)
	const [localSearch, setLocalSearch] = useState(searchQuery)

	const { foodList } = useSelector((state) => state.food)

	useEffect(() => {
		const handleSearch = lodash.debounce((query) => {
			const filteredList = foodList.filter((food) => 
				food.name.toLowerCase().includes(query.toLowerCase())
			);
			dispatch(setFilteredFoodList(filteredList))
		}, 400)
		handleSearch(localSearch)
	}, [localSearch, foodList, dispatch])

	const handleInputSearch = (e) => {
		setLocalSearch(e.target.value)
		dispatch(setSearchQuery(e.target.value))
	}
	return (
		<input type="text" value={localSearch} onChange={handleInputSearch} placeholder="Введи название блюда" className={styles.search} />
	)
}