// Write your code here
import {Button, List} from './styledComponents'

const GradiemtDirectionItem = props => {
  const {activeDirectionValue, directionDetails, onChangeDirection} = props
  const {value, displayText} = directionDetails

  const onClickBtn = () => onChangeDirection(value)

  return (
    <List>
      <Button activeDirectionValue={activeDirectionValue} onClick={onClickBtn}>
        {displayText}
      </Button>
    </List>
  )
}

export default GradiemtDirectionItem
