import type { FC } from 'react'
import './Calendar.scss'

type Props = {
  date: Date
}

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

const Calendar: FC<Props> = ({ date }) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const firstDay = new Date(year, month, 1)
  // JS getDay: 0 (Sun) .. 6 (Sat). We want week starting Monday (1)
  const firstWeekday = (firstDay.getDay() + 6) % 7 // 0..6 where 0=Mon

  const totalDays = daysInMonth(year, month)

  const cells: Array<{ value: number | null; isCurrent?: boolean }> = []

  // previous month fillers
  for (let i = 0; i < firstWeekday; i++) cells.push({ value: null })

  for (let d = 1; d <= totalDays; d++) {
    cells.push({ value: d, isCurrent: d === day })
  }

  // ensure full weeks (multiples of 7)
  while (cells.length % 7 !== 0) cells.push({ value: null })

  return (
    <div className="calendar" aria-label={`Календарь ${date.toLocaleString()}`}>
      <div className="calendar__header">
        <div className="calendar__month">{date.toLocaleString('ru', { month: 'long', year: 'numeric' })}</div>
      </div>

      <div className="calendar__grid">
        {WEEKDAYS.map((w) => (
          <div key={w} className="calendar__weekday">
            {w}
          </div>
        ))}

        {cells.map((c, i) => (
          <div
            key={i}
            className={`calendar__cell ${c.isCurrent ? 'calendar__cell--active' : ''} ${c.value ? '' : 'calendar__cell--empty'}`}
          >
            {c.value || ''}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
