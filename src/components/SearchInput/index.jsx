import { setFilteredMenuList } from '@redux/slices/foodSlice'
import { setSearchQuery } from '@redux/slices/searchSlice'
import lodash from 'lodash'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

export const SearchInput = () => {
	const dispatch = useDispatch()
	const { searchQuery } = useSelector((state) => state.search)
	const [localSearch, setLocalSearch] = useState(searchQuery)

	const { menuList } = useSelector((state) => state.food)

	useEffect(() => {
		const handleSearch = lodash.debounce((query) => {
			const filteredList = menuList.filter((food) => 
				food.name.toLowerCase().includes(query.toLowerCase())
			);
			dispatch(setFilteredMenuList(filteredList))
		}, 400)
		handleSearch(localSearch)
	}, [localSearch, menuList, dispatch])

	const handleInputSearch = (e) => {
		setLocalSearch(e.target.value)
		dispatch(setSearchQuery(e.target.value))
	}
	return (
		<input type="text" value={localSearch} onChange={handleInputSearch} placeholder="Введи название блюда" className={styles.search} />
	)
}