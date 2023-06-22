interface IText {
  text: string
  size: 'large' | 'medium' | 'normal' | 'small'
  weight: boolean
}

const sizes = {
  large: '24px',
  medium: '20px',
  normal: '18px',
  small: '16px',
}

const Text = ({ text, size = 'normal', weight = false }: IText) => {
  const fontStyle = sizes[size]
  const weightStyle = weight ? '600' : '500'

  return <p style={{ fontSize: fontStyle, fontWeight: weightStyle }}>{text}</p>
}

export default Text
