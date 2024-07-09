import { Search } from '@components/Search'
import { openCartModal } from '@redux/slices/modalsSlice'
import { closeSearch, openSearch } from '@redux/slices/searchSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Cart } from './ui'

export const Header = () => {
	const dispatch = useDispatch()
	const openModal = () => dispatch(openCartModal())
	const [quantity, setQuantity] = useState(0)
	const cart = useSelector((state) => state.cart.cart)
	const searchOpen = () => dispatch(openSearch())
	const searchClose = () => dispatch(closeSearch())

	useEffect(() => {
		setQuantity(cart.length)
	}, [cart])

	return (
		<header className={styles.header}>
			<Link to='/'>
				<img src="logo.png" alt="logo" className={styles.logo} /> 
			</Link> 
			<Cart length={quantity} onClick={quantity > 0 ? openModal : null} />
			<Search className={styles.search} onOpen={searchOpen} onClose={searchClose} />
		</header> 
	);
}