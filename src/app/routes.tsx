import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MainPage, Game2048Page, NotFoundPage } from '../pages'

export const RoutesRoot: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Routes location={location}>
      <Route key="index" path="/" element={<MainPage />} />
      <Route key="2048" path="/2048" element={<Game2048Page />} />
      {/* <Route key="race" path="/race" element={<GameRacePage />} /> */}
      {/* <Route key="wars" path="/wars" element={<GameStarWars />} /> */}
      <Route key="notfound" path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
