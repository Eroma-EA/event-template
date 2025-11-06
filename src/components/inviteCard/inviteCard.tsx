import type { FC, MouseEvent } from 'react'
import './inviteCard.scss'
import Button from '../IU/Button'
import Calendar from '../Calendar/Calendar'

const InviteCard: FC = () => {
	// event date (replace with real event datetime)
	const eventDate = new Date('2025-11-06T17:00:00')
	const date = eventDate.toLocaleDateString('kk-KZ', { day: 'numeric', month: 'long', year: 'numeric' })
	const subtitle = 'Біздің қуанышымызды бөлісуге шақырамыз'
	const scrollToRsvp = (e: MouseEvent) => {
		e.preventDefault()
		const el = document.getElementById('rsvp-form')
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}

	return (
		<article className="invite">
			<div className="invite__inner container">
				<h2 className="invite__title">ТОЙ КҮНІ</h2>
				<p className="invite__subtitle">{subtitle}</p>
				<p className="invite__date">{date}</p>
				<div className="invite__actions">
					<Button onClick={scrollToRsvp}>Келетіндігіңізді растау</Button>
				</div>
				<Calendar date={eventDate} />
			</div>
		</article>
	)
}

export default InviteCard
