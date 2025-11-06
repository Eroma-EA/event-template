import type { FC } from 'react'
import './Footer.scss'

const Footer: FC = () => {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner container">
				<p>© {new Date().getFullYear()} Arman & Diana — All rights reserved.</p>
				<p>Contact: <a href="mailto:info@example.com">info@example.com</a></p>
			</div>
		</footer>
	)
}

export default Footer
