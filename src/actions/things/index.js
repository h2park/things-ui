import Promise from 'bluebird'
import { createAction } from 'redux-act'
import { unregister } from 'redux-meshblu'

import { getMeshbluConfig } from '../../services/auth-service'

const clearSelectedThings         = createAction('/things/selection/clear')
const deleteSelectedThings        = createAction('/things/selection/delete')
const deleteSelectedThingsSuccess = createAction('/things/selection/delete/success')
const deleteSelectedThingsFailure = createAction('/things/selection/delete/failure')
const dismissDeleteDialog         = createAction('/things/selection/dialog/delete/dismiss')
const updateThingFilter           = createAction('/things/filter/update')
const showDeleteDialog            = createAction('/things/selection/dialog/delete/show')
const updateSelectedGroups        = createAction('/things/selection/update/group')
const updateSelectedGroupsSuccess = createAction('/things/selection/update/group/success')
const updateSelectedGroupsFailure = createAction('/things/selection/update/group/failure')

const deleteSelection = (selectedThings) => {
  return (dispatch) => {
    const meshbluConfig = getMeshbluConfig()
    dispatch(deleteSelectedThings(selectedThings))

    return Promise.each(selectedThings, uuid => dispatch(unregister({ uuid, meshbluConfig })))
      .then(() => dispatch(deleteSelectedThingsSuccess()))
      .catch(err => dispatch(deleteSelectedThingsFailure(err)))
  }
}

export {
  clearSelectedThings,
  deleteSelection,
  deleteSelectedThings,
  deleteSelectedThingsSuccess,
  deleteSelectedThingsFailure,
  dismissDeleteDialog,
  showDeleteDialog,
  updateSelectedGroups,
  updateSelectedGroupsSuccess,
  updateSelectedGroupsFailure,
  updateThingFilter,
}
