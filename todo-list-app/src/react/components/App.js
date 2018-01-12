import React from 'react'
import styled from 'styled-components'

import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const Wrapper = styled.div`
  padding: 30px 30px 10px 30px;
  max-width: 350px;
  box-shadow: 0 0 0 10px #e3f9f7;
  background-color: #b2e6e0;
  border-radius: 9px;
`
const Header = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  font-size: 2.3em;
  font-weight: bold;
  letter-spacing: 3px;
  color: #004d40;
`

const App = () => (
  <Wrapper>
    <Header>TO DO LIST </Header>

    <VisibleTodoList />

    <AddTodo />

    <Footer />
  </Wrapper>
)

export default App
