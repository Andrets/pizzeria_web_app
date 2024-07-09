import { MainMenu } from '@pages'
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
  return (
    <>
      <AuthenticatedRoute />
    </>
  )
}