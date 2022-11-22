import styled from 'styled-components'

export const VisitedCardItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #1f1f2f;
  margin: 6px;
`

export const VisitedCountryImage = styled.img`
  width: 280px;
  height: 180px;
`

export const VisitedDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
`

export const CountryName = styled.p`
  color: #ffffff;
  font-size: 18px;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #f8fafc;
  font-family: 'Roboto';
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #f1f5f9;
  font-size: 14px;
  font-weight: 500;
  padding: 7px;
`
