import React, { useState } from 'react'
import { Settings, Plus } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import AppointmentForm from './AppointmentForm'

const Calendar = () => {
  const { appointments, users, currentView, setCurrentView, selectedDate, setSelectedDate } = useAppContext()
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)

  const timeSlots = [
    '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'
  ]

  const dummyAppointments = [
    { id: '1', time: '10am', patient: '"Beatrice" Turley (Canine (Dog)) - 370705 - Spay, Microchip as well Dep made', color: 'bg-orange-300' },
    { id: '2', time: '12pm', patient: '"Ocho" Sanchez (Canine (Dog)) - 370757 - Dental/Mass Removal Dep made', color: 'bg-orange-300' },
    { id: '3', time: '2pm', patient: 'Walk-in appointment', color: 'bg-purple-300' },
    { id: '4', time: '11am', patient: 'Routine checkup', color: 'bg-blue-300' },
    { id: '5', time: '3pm', patient: 'Vaccination', color: 'bg-green-300' },
    { id: '6', time: '1pm', patient: 'Surgery prep', color: 'bg-red-300' },
  ]

  const getWeekDates = () => {
    const week = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(selectedDate)
      date.setDate(selectedDate.getDate() - selectedDate.getDay() + i)
      week.push(date)
    }
    return week
  }

  const renderDayView = () => (
    <div className="grid grid-cols-6 gap-0 p-4">
      <div className="col-span-1">
        <div className="font-bold mb-2 text-primary">Time</div>
        {timeSlots.map(slot => (
          <div key={slot} className="h-20 border-t py-1">{slot}</div>
        ))}
      </div>
      {users.map((user, index) => (
        <div key={user.id} className="col-span-1 border-l">
          <h3 className="font-bold mb-2 text-primary text-center">{user.name}</h3>
          {timeSlots.map(slot => (
            <div key={`${user.id}-${slot}`} className="h-20 border-t relative">
              {index === 0 && dummyAppointments
                .filter(apt => apt.time === slot)
                .map(apt => (
                  <div key={apt.id} className={`${apt.color} p-1 absolute inset-x-0 overflow-hidden text-xs`} style={{top: '2px', bottom: '2px'}}>
                    <p className="font-bold">{apt.time}</p>
                    <p>{apt.patient}</p>
                  </div>
                ))
              }
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  const renderWeekView = () => (
    <div className="grid grid-cols-8 gap-0 p-4">
      <div className="col-span-1">
        <div className="font-bold mb-2 text-primary">Time</div>
        {timeSlots.map(slot => (
          <div key={slot} className="h-20 border-t py-1">{slot}</div>
        ))}
      </div>
      {getWeekDates().map((date, index) => (
        <div key={index} className="col-span-1 border-l">
          <h3 className="font-bold mb-2 text-primary text-center">
            {date.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' })}
          </h3>
          {timeSlots.map(slot => (
            <div key={`${index}-${slot}`} className="h-20 border-t relative">
              {date.getDate() === selectedDate.getDate() && dummyAppointments
                .filter(apt => apt.time === slot)
                .map(apt => (
                  <div key={apt.id} className={`${apt.color} p-1 absolute inset-x-0 overflow-hidden text-xs`} style={{top: '2px', bottom: '2px'}}>
                    <p className="font-bold">{apt.time}</p>
                    <p>{apt.patient}</p>
                  </div>
                ))
              }
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded-lg transition duration-300 ${currentView === 'day' ? 'bg-primary text-white' : 'bg-neutral-background text-primary hover:bg-primary hover:text-white'}`}
            onClick={() => setCurrentView('day')}
          >
            Day
          </button>
          <button 
            className={`px-4 py-2 rounded-lg transition duration-300 ${currentView === 'week' ? 'bg-primary text-white' : 'bg-neutral-background text-primary hover:bg-primary hover:text-white'}`}
            onClick={() => setCurrentView('week')}
          >
            Week
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold text-primary">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </h2>
          <Settings className="h-5 w-5 text-primary" />
        </div>
        <button
          onClick={() => setShowAppointmentForm(true)}
          className="btn flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Appointment
        </button>
      </div>
      {currentView === 'day' ? renderDayView() : renderWeekView()}
      {showAppointmentForm && (
        <AppointmentForm onClose={() => setShowAppointmentForm(false)} />
      )}
    </div>
  )
}

export default Calendar