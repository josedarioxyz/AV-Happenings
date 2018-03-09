import React, { Component } from 'react'
import ReportForm from './ReportForm'
import { Button, Dropdown, Modal } from 'semantic-ui-react'

export default class ReportEventModal extends Component {
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
            icon='warning sign'
            onClick={this._handleModalOpen}
            text='Report'
          />
        }
      >
        <Modal.Header>
          Report Happening
        </Modal.Header>
        <Modal.Content>
          <ReportForm />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this._handleModalClose}>
            Back
          </Button>
          <Button onClick={this._handleModalClose}>
            Submit Report
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
