import { CartModal } from '@components/Modal/Cart'
import { ChangeIngredients } from '@components/Modal/ChangeIngredients'
import { FoodModal } from '@components/Modal/Food'
import { ModalWindow } from '@components/Modal/ModalWindow'
import { PizzaDesignerModal } from '@components/Modal/PizzaDesigner'
import { closeModal } from '@redux/slices/modalsSlice'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const Modal = () => {
	const dispatch = useDispatch()
	const { isOpen, modalType, data } = useSelector((state) => state.modals)

	const closeCallback = useCallback(() => {
		dispatch(closeModal())
	}, [dispatch])
	return (
		<ModalWindow isOpen={isOpen} close={closeCallback}>
			{(modalType === 'FOODINFO' && data.isChangeIngredients === false) && <FoodModal />}
			{(modalType === 'FOODINFO' && data.isChangeIngredients === true) && <ChangeIngredients />}
			{modalType === 'PIZZADESIGNER' && <PizzaDesignerModal />}
			{modalType === 'CART' && <CartModal />}
		</ModalWindow>
	)
}