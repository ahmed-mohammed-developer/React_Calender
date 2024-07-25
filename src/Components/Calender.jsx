import React, {useState} from 'react'
import './Calender.css'

const Calender = () => {
    const dayesOfWeek = ["Sun", 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat']
    const monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const currentDate = new Date()

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())

    const daysInMonth = new Date(currentYear, currentMonth + 1,0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth,1).getDay()

    const prevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1))
        setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear))
    }
    const nextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1))
        setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear))
    }
  return (
    <div className='container'>
        <div className="row d-flex align-items-center">
            <div className="col-md-6 col-sm-11 ">
                <div className="clndr ">
                <div className="navigate-dade d-flex justify-content-between">
                    <div className="yearsMonth  d-flex  justify-content-between gap-4">
                    <h2 className="month">{monthOfYear[currentMonth]}</h2>
                    <h2 className="year">{currentYear}</h2>
                    </div>
                    <div className="buttons d-flex">
                    <i className='bx bx-chevron-left' onClick={prevMonth}></i> 
                    <i className='bx bx-chevron-right' onClick={nextMonth}></i> 
                    </div>
                    </div>
                    <div className="weekdaye d-flex">
                        {dayesOfWeek.map((day) => (
                            <span key={day}>{day}</span>
                        ))}
                    </div>
                    <div className="days">
                        {[...Array(firstDayOfMonth).keys()].map((_, index) => (<span key={`empty-${index}`}></span>))}
                        {[...Array(daysInMonth).keys()].map((day) => ( <span key={day+1} className={day + 1 === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear() ? 'current-day' : ''}>{day+1}</span>))}
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Calender
