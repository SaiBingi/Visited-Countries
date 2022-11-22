import {Component} from 'react'
import CountryCard from '../CountryCard'
import VisitedCountryCard from '../VisitedCountryCard'
import {
  BgContainer,
  Container,
  CustomHeading,
  CountriesContainer,
  VisitedCountriesContainer,
  NotVisited,
} from './styledComponents'

class AllCountries extends Component {
  constructor(props) {
    super(props)
    const {initialCountriesList} = this.props

    const visitedCountries = initialCountriesList.filter(
      eachCountry => eachCountry.isVisited,
    )

    this.state = {visitedCountries, countriesList: initialCountriesList}
  }

  removeVisitedCountry = removeButtonId => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(eachCountry => {
        if (eachCountry.id === removeButtonId) {
          return {...eachCountry, isVisited: !eachCountry.isVisited}
        }
        return eachCountry
      }),
    }))

    this.setState(prevState => ({
      visitedCountries: prevState.visitedCountries.filter(
        eachCountry => eachCountry.id !== removeButtonId,
      ),
    }))
  }

  changeVisitedStatus = clickedButtonId => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(eachCountry => {
        if (eachCountry.id === clickedButtonId) {
          return {...eachCountry, isVisited: !eachCountry.isVisited}
        }
        return eachCountry
      }),
    }))

    const {countriesList, visitedCountries} = this.state
    const addCountry = countriesList.filter(
      eachCountry => eachCountry.id === clickedButtonId,
    )[0]

    const updatedVisitedCountries = [...visitedCountries, addCountry]

    let i
    let j
    let temp

    for (i = 0; i < updatedVisitedCountries.length; i += 1) {
      let swapped = false

      for (j = 0; j < updatedVisitedCountries.length - 1 - i; j += 1) {
        if (
          updatedVisitedCountries[j].name > updatedVisitedCountries[j + 1].name
        ) {
          temp = updatedVisitedCountries[j]
          updatedVisitedCountries[j] = updatedVisitedCountries[j + 1]
          updatedVisitedCountries[j + 1] = temp
          swapped = true
        }
      }
      if (!swapped) {
        break
      }
    }
    this.setState({
      visitedCountries: updatedVisitedCountries,
    })
  }

  render() {
    const {visitedCountries, countriesList} = this.state

    const isCountriesVisited = visitedCountries.length !== 0

    return (
      <BgContainer>
        <Container>
          <CustomHeading>Countries</CustomHeading>
          <CountriesContainer>
            {countriesList.map(eachCountry => (
              <CountryCard
                key={eachCountry.id}
                countryDetails={eachCountry}
                changeVisitedStatus={this.changeVisitedStatus}
              />
            ))}
          </CountriesContainer>
          <CustomHeading>Visited Countries</CustomHeading>
          {isCountriesVisited && (
            <VisitedCountriesContainer>
              {visitedCountries.map(eachCountry => (
                <VisitedCountryCard
                  key={eachCountry.id}
                  visitedCardDetails={eachCountry}
                  removeVisitedCountry={this.removeVisitedCountry}
                />
              ))}
            </VisitedCountriesContainer>
          )}
          {!isCountriesVisited && (
            <NotVisited>No Countries Visited Yet!</NotVisited>
          )}
        </Container>
      </BgContainer>
    )
  }
}

export default AllCountries
