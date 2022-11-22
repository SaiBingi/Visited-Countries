import {CountryItem, Text, Button, CountryName} from './styledComponents'

const CountryCard = props => {
  const {countryDetails, changeVisitedStatus} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    changeVisitedStatus(id)
  }

  const visitedElement = isVisited ? (
    <Text>Visited</Text>
  ) : (
    <Button type="button" onClick={onClickVisit}>
      Visit
    </Button>
  )

  return (
    <CountryItem>
      <CountryName>{name}</CountryName>
      {visitedElement}
    </CountryItem>
  )
}

export default CountryCard
