import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
  min-height: 100vh;
  background-color: #161624;
  padding-bottom: 20px;
`

export const Container = styled.div`
  width: 85%;
`

export const CustomHeading = styled.h1`
  color: #f8fafc;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 15px;
`

export const CountriesContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  background-color: #1f1f2f;
  border-radius: 8px;
  border: 1px solid #334155;
  height: 32%;
  overflow: auto;
`

export const VisitedCountriesContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const NotVisited = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 150px;
  color: #f1f5f9;
  font-size: 20px;
  text-align: center;
`
