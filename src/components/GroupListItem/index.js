import { noop } from 'lodash'
import React, { PropTypes } from 'react'
import { ListItem } from 'zooid-list'

import styles from './styles.css'

const propTypes = {
  application: PropTypes.object,
  onUpdateApplicationDevices: PropTypes.func,
  selected: PropTypes.bool,
}

const defaultProps = {
  application: null,
  onUpdateApplicationDevices: noop,
  selected: false,
}

const GroupListItem = ({ application, onUpdateApplicationDevices, selected }) => {
  return (
    <ListItem className={styles.root}>
      <span>{application.name}</span>
      <input
        type="checkbox"
        checked={selected}
        onClick={() => onUpdateApplicationDevices({ applicationUuid: application.uuid, inApplication: selected })}
        name={application.name}
      />
    </ListItem>
  )
}

GroupListItem.propTypes    = propTypes
GroupListItem.defaultProps = defaultProps

export default GroupListItem