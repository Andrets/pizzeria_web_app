import { useTelegram } from '@hooks/useTelegram'
import { MainMenu } from '@pages'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router'

const AuthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<MainMenu />}>
        <Route index element={<MainMenu />} />
      </Route>
    </Routes>
  )
}

export const App = () => {
  const { expand, enableClosingConfirmation, disableVerticalSwipes, setBackgroundColor } = useTelegram();
  useEffect(() => {
    expand?.();
  }, [expand])
  enableClosingConfirmation();
  setBackgroundColor('#FFF7EA');
  return (
    <>
      <AuthenticatedRoute />
    </>
  )
}