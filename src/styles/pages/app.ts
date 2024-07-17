import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem',
  width: '100%',
  minWidth: 1180,
  margin: '0 auto',

  a: {
    userSelect: 'none',
  },
})
