import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map( item => (
            <div className="child-item col media py-3" key={item.aptId}>
            <div className="mr-3">
              <button className="child-delete btn btn-sm btn-danger"
              onClick={()=> this.props.deleteAppointment(item)}>
                <FaTimes />
              </button>
            </div>

            <div className="child-info media-body">
              <div className="child-head d-flex">
                <span className="child-name" 
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={
                    e => this.props.updateInfo(
                      'childName', e.target.innerText, item.aptId)
                  }
                  >
                  {item.childName}
                  </span>
                <span className="apt-date ml-auto">
                  <Moment 
                  date={item.aptDate}
                  parse="YYYY-MM-dd hh:mm"
                  format= "MMM-D @ h:mma"
                  />
                </span>
              </div>

              <div className="parent-name">
                <span className="label-item">Class: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={ e =>
                    this.props.updateInfo(
                      'className', e.target.innerText, item.aptId
                    )
                  }
                >
                  {item.className}
                </span>
              </div>
              <div className="apt-notes"
                contentEditable
                suppressContentEditableWarning
                onBlur={ e => 
                  this.props.updateInfo(
                    'aptNotes', e.target.innerText, item.aptId
                  )
                }
              >

              {item.aptNotes}</div>
            </div>
          </div>
                ))}

        </div>
        
        )
    }
}

export default ListAppointments;