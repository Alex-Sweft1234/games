import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { board2048Actions } from '../../store/games'

const actions = { ...board2048Actions }

export const useReduxActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
