import { connect } from 'react-redux'

import Link from './Link'
import { setVisibilityFilter } from '../../redux/actions/actions'

const mapStateToProps = (state, ownProps) => ({
  isActive: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
