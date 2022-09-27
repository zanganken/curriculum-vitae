import { CreditCardIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline"
import React from "react"

const Header = () => {
	return (
		<header className="flex flex-wrap items-center gap-4 bg-black/20 py-5">
			<h1 className="font-bold text-3xl flex flex-col min-w-fit">
				<div className="text-secondary">
					Orhan
				</div>
				<div className="text-primary">
					HERSARD
				</div>
			</h1>
			<ul className="ml-auto text-right min-w-fit">
				<li>
					<a href="mailto:ohersard@hotmail.fr">
						ohersard@hotmail.fr <EnvelopeIcon/>
					</a>
				</li>
				<li>
					Petit-Canal, Guadeloupe <HomeIcon/>
				</li>
				<li>
					Permis B <CreditCardIcon/>
				</li>
			</ul>
		</header>
	)
}

export default Header