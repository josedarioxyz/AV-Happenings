import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, Icon, Menu } from 'semantic-ui-react'
import TimeAgo from 'react-timeago'

import { likeEvent } from '../actions/likeActions'
import EventModal from './EventModal'
import EventDropdown from './EventDropdown'

class EventCard extends Component {
  constructor(props) {
    super(props)

    this.state = { redirectToLogin: false }

    this._handleLikeClick = this._handleLikeClick.bind(this)
    this._handleCommentClick = this._handleCommentClick.bind(this)
  }

  _handleLikeClick() {
    const { _likeEvent, _user } = this.props
    const { id } = this.props.event

    if (_user.loggedIn) { _likeEvent(id, _user.uid) }
    else { this.setState({ redirectToLogin: true }) }
  }

  _handleCommentClick() {
    const { _user } = this.props

    if (_user.loggedIn) { console.log('ATTEMPTED COMMENT') }
    else { this.setState({ redirectToLogin: true }) }
  }

  render() {
    const { _handleCommentClick, _handleLikeClick } = this
    const { redirectToLogin } = this.state
    const {
      title,
      date,
      location,
      description,
      commentCount,
      likeCount,
      time,
      timestamp,
      username,
      uid,
      id
    } = this.props.event

    return (
      <Card color='blue' >
        {redirectToLogin && <Redirect to='/login' />}
        <EventModal event={this.props.event} />
        <Card.Content>
          <EventDropdown eventUID={uid} eventID={id} />
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{date} @ {time}</Card.Meta>
          <Card.Meta>{location}</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Menu icon='labeled' secondary size='mini' widths={2}>
            <Menu.Item id='comment-icon' onClick={_handleCommentClick}>
              <Icon name='comment outline' />
              {commentCount}
            </Menu.Item>
            <Menu.Item id='heart-icon' onClick={_handleLikeClick}>
              <Icon name='heart outline' />
              {likeCount}
            </Menu.Item>
          </Menu>
          <center>
            <p className='post-info-footer'>
              Posted <TimeAgo date={timestamp} /> by {username}
            </p>
          </center>
        </Card.Content>
      </Card>
    )
  }
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  _user: state.user
})

const mapDispatchToProps = dispatch => ({
  _likeEvent: (eid, uid) => dispatch(likeEvent(eid, uid))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)
