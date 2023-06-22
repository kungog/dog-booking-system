import { ReactNode } from 'react'
import './styles.module.scss'
import Loading from '../Loading'

interface IButton {
  handleClick: any
  loading: boolean
  size: 'large' | 'medium' | 'small'
  children: ReactNode
}

const Button = (props: IButton) => {
  const { children, handleClick, loading = false, size = 'small' } = props
  return (
    <button className={`btn-${size}`} onClick={handleClick}>
      {loading ? <Loading /> : children}
    </button>
  )
}

export default Button
