import { useState } from 'react'
import './RSVPForm.scss'

type Status = 'yes' | 'no' | 'maybe'

const WHATSAPP_NUMBER = '71234567890' // replace with actual number without + or 00 (country code + number)

const RSVPForm: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState(0)
  const [status, setStatus] = useState<Status>('yes')
  const [saved, setSaved] = useState(false)

  const saveLocally = (payload: Record<string, any>) => {
    try {
      const key = 'rsvps'
      const raw = localStorage.getItem(key)
      const arr = raw ? JSON.parse(raw) : []
      arr.push({ ...payload, createdAt: new Date().toISOString() })
      localStorage.setItem(key, JSON.stringify(arr))
      setSaved(true)
      setTimeout(() => setSaved(false), 3500)
    } catch (err) {
      // ignore localStorage errors silently
      console.warn('Local save failed', err)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const parts: string[] = []
    parts.push(`Имя: ${name || '-'} `)
    if (phone) parts.push(`Телефон: ${phone}`)
    if (email) parts.push(`Email: ${email}`)
    parts.push(`Прибудут: ${status}`)
    parts.push(`Гостей: ${guests}`)

    const payload = { name, phone, email, status, guests }
    saveLocally(payload)

    const text = encodeURIComponent(parts.join('\n'))

    // Open WhatsApp with prefilled message.
    // Use wa.me link: https://wa.me/<number>?text=<text>
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <form id="rsvp-form" className="rsvp" onSubmit={handleSubmit} aria-label="RSVP form">
      <h3 className="rsvp__title">Подтвердите участие (RSVP)</h3>

      {saved && <div className="rsvp__notice">Ответ сохранён локально. Откроется WhatsApp — не забудьте нажать «Отправить».</div>}

      <label className="rsvp__label">
        Имя
        <input className="rsvp__input" value={name} onChange={e => setName(e.target.value)} required />
      </label>

      <label className="rsvp__label">
        Телефон (желательно WhatsApp)
        <input className="rsvp__input" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7..." />
      </label>

      <label className="rsvp__label">
        Email (опционально)
        <input className="rsvp__input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>

      <div className="rsvp__row">
        <label className="rsvp__small">
          Статус
          <select className="rsvp__select" value={status} onChange={e => setStatus(e.target.value as Status)}>
            <option value="yes">Приду</option>
            <option value="maybe">Возможно</option>
            <option value="no">Не приду</option>
          </select>
        </label>

        <label className="rsvp__small">
          Гостей
          <input className="rsvp__input" type="number" min={0} value={guests} onChange={e => setGuests(Number(e.target.value))} />
        </label>
      </div>

      <div className="rsvp__actions">
        <button className="rsvp__btn" type="submit">Отправить в WhatsApp</button>
      </div>
    </form>
  )
}

export default RSVPForm
