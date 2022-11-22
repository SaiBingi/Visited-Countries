import {
  VisitedCardItem,
  VisitedCountryImage,
  VisitedDescription,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountryCard = props => {
  const {visitedCardDetails, removeVisitedCountry} = props
  const {id, name, imageUrl} = visitedCardDetails

  const onClickRemove = () => removeVisitedCountry(id)

  return (
    <VisitedCardItem>
      <VisitedCountryImage src={imageUrl} alt="thumbnail" />
      <VisitedDescription>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </VisitedDescription>
    </VisitedCardItem>
  )
}

export default VisitedCountryCard
