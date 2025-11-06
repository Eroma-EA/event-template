import React from 'react'
import './inviteCard.scss'
import Button from '../IU/Button'
import Calendar from '../Calendar/Calendar'

const InviteCard: React.FC = () => {
		// event date (replace with real event datetime)
		const eventDate = new Date('2026-08-12T16:00:00')
		const date = eventDate.toLocaleDateString('ru', { day: 'numeric', month: 'long', year: 'numeric' })
	const subtitle = 'You are invited to celebrate with us'
	const scrollToRsvp = (e: React.MouseEvent) => {
		e.preventDefault()
		const el = document.getElementById('rsvp-form')
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}

	return (
		<article className="invite">
			<div className="invite__inner container">
				<h2 className="invite__title">WEDDING DAY</h2>
				<p className="invite__subtitle">{subtitle}</p>
						<p className="invite__date">{date}</p>
				<div className="invite__actions">
					<Button onClick={scrollToRsvp}>Подтвердить (RSVP)</Button>
				</div>
						<Calendar date={eventDate} />
			</div>
		</article>
	)
}

export default InviteCard
