'use client'
import { ReactNode } from 'react'
import { styled } from 'styled-components'

const StyledListItem = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: $spacing-28;
  }
`

const ListItem = ({ children }: { children: ReactNode }) => {
  return <StyledListItem>{children}</StyledListItem>
}

export default ListItem
