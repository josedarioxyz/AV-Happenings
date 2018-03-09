import React, { Component } from 'react'
import { Button, Dropdown, Modal } from 'semantic-ui-react'

export default class DeleteEventModal extends Component {
  constructor(props) {
    super(props)

    this.state = { modalOpen: false }

    this._handleModalOpen = this._handleModalOpen.bind(this)
    this._handleModalClose = this._handleModalClose.bind(this)
  }

  _handleModalOpen = () => this.setState({ modalOpen: true })

  _handleModalClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this._handleModalClose}
        size='small'
        trigger={
          <Dropdown.Item
            icon='delete'
            onClick={this._handleModalOpen}
            text='Delete'
          />
        }
      >
        <Modal.Header>
          Delete Happening
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Are you sure? This cannot be undone.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this._handleModalClose}>
            Back
          </Button>
          <Button onClick={this._handleModalClose}>
            Delete Forever
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
