import React from "react"
import "./index.css"
import Header from "./components/Header"

function App() {
	return (
		<main className="p-5 text-primary">
			<section id="cv">
				<Header/>
				<section id="content" className="pb-5">
					<h1 className="text-xl my-8">
						<span className="underline underline-offset-4 font-bold">Développeur Web Backend/Frontend</span>
						<small> (spécialisé javascript)</small>
					</h1>

					<div className="space-y-5">
						<article className="mx-2 space-y-1">
							<h1 className="font-bold text-xl underline underline-offset-4">Présentation</h1>
							<p className="indent-2">
								Autodidacte en développement web depuis 2010, je me suis spécialisé dans l'utilisation de React.
								J'utilise principalement le framework Next.js, ainsi que l'ORM Prisma pour la partie base de
								données.
							</p>
						</article>

						<article className="mx-2 space-y-1">
							<h1 className="font-bold text-xl underline underline-offset-4">Compétences</h1>
							<ul className="ml-4 mr-2 list-disc">
								<li>HTML5/CSS3</li>
								<li>Javascript/Typescript</li>
								<li>React/Next.js</li>
								<li>TailwindCSS/HeadlessUI ou Bootstrap</li>
								<li>ORM Prisma (PostgreSQL, SQLite, etc...)</li>
								<li>Création et consommation d'API avec tRPC</li>
								<li>Socket.IO</li>
							</ul>
						</article>
					</div>
				</section>
			</section>
		</main>
	)
}

export default App
