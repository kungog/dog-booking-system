'use client'
import { ReactNode } from 'react'
import { styled } from 'styled-components'

const StyledList = styled.ul``

const List = ({ children }: { children: ReactNode }) => {
  return <StyledList>{children}</StyledList>
}

export default List
