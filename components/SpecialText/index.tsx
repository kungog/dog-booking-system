import { ReactNode } from 'react'
import styles from './styles.module.scss'

type spanColors =
  | 'accent'
  | 'black'
  | 'white'
  | 'blurred'
  | 'primary'
  | 'secondary'

interface ISpecialText {
  color?: spanColors
  italic?: boolean
  uppercased?: boolean
  bold?: boolean
  children: ReactNode
}

const colors = {
  primary: '$primary-color',
  secondary: '$secondary-color',
  accent: '$accent-color',
  black: '$color-black',
  white: '$color-white',
  blurred: '$color-blured',
}

const SpecialText = (props: ISpecialText) => {
  const {
    children,
    color,
    italic = false,
    uppercased = false,
    bold = false,
  } = props

  const colorStyle = colors[color ?? 'accent']
  const italicStyle = italic ? 'italic' : 'normal'
  const weightStyle = bold ? '900' : '600'
  const uppercasedStyle = uppercased ? 'uppercased' : 'initial'

  return <span className={}>{children}</span>
}

export default SpecialText
