import React from "react"
import "./index.css"
import Header from "./components/Header"
import SectionCV from "./components/SectionCV"
import { AcademicCapIcon, BriefcaseIcon, Cog8ToothIcon, UserCircleIcon } from "@heroicons/react/20/solid"
import { LanguageIcon, StarIcon } from "@heroicons/react/24/solid"

function App() {
	return (
		<main className="p-5 text-primary">
			<section id="cv">
				<Header/>
				<section id="content" className="py-8 print:py-0">
					<h1 className="text-2xl mb-8 print:mb-0">
						<span className="underline underline-offset-4 font-bold">Développeur Web Backend/Frontend</span>
						<small> (spécialisé en javascript orienté serveur)</small>
					</h1>

					<div className="flex flex-col gap-5">
						<div className="flex flex-wrap md:flex-nowrap md:items-center gap-5 print:block">
							<SectionCV title="Présentation" icon={ <UserCircleIcon/> } className="md:w-1/2 print:mt-5">
								<p className="indent-2 break-inside-avoid">
									Autodidacte en développement web depuis 2010, je me suis spécialisé dans l'utilisation de React.
									J'utilise principalement le framework Next.js, ainsi que l'ORM Prisma pour les opérations sur base
									de données. J'ai une forte capacité d'apprentissage et d'adaptation.
								</p>
							</SectionCV>

							<SectionCV title="Compétences" icon={ <Cog8ToothIcon/> } className="print:mt-5">
								<ul className="list-disc list-inside break-inside-avoid">
									<li>HTML5 / CSS3</li>
									<li>Javascript / Typescript</li>
									<li>React / Next.js</li>
									<li>TailwindCSS / HeadlessUI / Bootstrap</li>
									<li>ORM Prisma (PostgreSQL, SQLite, etc...)</li>
									<li>Création et consommation d'API avec tRPC</li>
									<li>Socket.IO</li>
								</ul>
							</SectionCV>
						</div>

						<SectionCV title="Expériences professionnelles" icon={ <BriefcaseIcon/> }>
							<section className="mt-3 flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap break-inside-avoid">
								<header
									className="font-bold bg-black/20 rounded-md px-3 py-2 uppercase self-start w-full md:w-fit print:p-0">
									<div className="whitespace-nowrap">
										<time dateTime="2021-09">09/2021</time>
										- <time dateTime="2021-09">10/2021</time> : MS Consulting
									</div>
									<h1 className="text-xl text-justify">Développeur Web (stage)</h1>
								</header>
								<p className="indent-2 pt-2 print:p-0">
									Leader technique dans une équipe AGILE de 3 personnes, Sprint review toutes les semaines,
									développement d'une application de gestion des tests avec Symfony hébergée sur AWS.
								</p>
							</section>

							<section className="mt-3 flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap break-inside-avoid">
								<header
									className="font-bold bg-black/20 rounded-md px-3 py-2 uppercase self-start w-full md:w-fit print:p-0">
									<div className="whitespace-nowrap">
										<time dateTime="2016-08">08/2016</time>
										- <time dateTime="2020-08">08/2020</time> : SAMSIC Flex Services
									</div>
									<h1 className="text-xl text-justify">Chef d'équipe</h1>
								</header>
								<p className="indent-2 pt-2 print:p-0">
									Management d'une équipe de 2 opérateurs logistique, réceptions, préparations et inventaires
									des marchandises, organisation des transports (routiers, maritimes, aériens).
								</p>
							</section>

							<section className="mt-3 flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap break-inside-avoid">
								<header
									className="font-bold bg-black/20 rounded-md px-3 py-2 uppercase self-start w-full md:w-fit print:p-0">
									<div className="whitespace-nowrap">
										<time dateTime="2014-07">07/2014</time>
										- <time dateTime="2016-07">07/2016</time> : Orange SA
									</div>
									<h1 className="text-xl text-justify">Assistant de gestion</h1>
								</header>
								<p className="indent-2 pt-2 print:p-0">
									Préparation de commandes, services des clients internes, réception et pointage de marchandises.
								</p>
							</section>

							<section className="mt-3 flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap break-inside-avoid">
								<header
									className="font-bold bg-black/20 rounded-md px-3 py-2 uppercase self-start w-full md:w-fit print:p-0">
									<div className="whitespace-nowrap">
										<time dateTime="2012-08">08/2012</time>
										- <time dateTime="2013-06">06/2013</time> : France Telecom
									</div>
									<h1 className="text-xl text-justify">Technicien de soutien de proximité</h1>
								</header>
								<p className="indent-2 pt-2 print:p-0">
									Dépannage réseau/téléphone, développement d'applications web en interne, construction d'affectation
									réseau/téléphone sur répartiteurs jusqu'au point d'accès.
								</p>
							</section>
						</SectionCV>

						<SectionCV title="Formations" icon={ <AcademicCapIcon/> }>
							<section className="mt-3 flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap break-inside-avoid">
								<header
									className="font-bold bg-black/20 rounded-md px-3 py-2 uppercase self-start w-full md:w-fit print:p-0">
									<h1 className="whitespace-nowrap">
										<time dateTime="2021">2021</time>
										{ " " }
										: Développeur Web et Web Mobile <small>- Bac+2</small>
									</h1>
								</header>
								<p className="indent-2 pt-2 print:p-0">
									Formation à distance d'une durée de 6 mois, conclus par un stage de 2 mois en entreprise.
								</p>
							</section>

							<section className="mt-3 flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap break-inside-avoid">
								<header
									className="font-bold bg-black/20 rounded-md px-3 py-2 uppercase self-start w-full md:w-fit print:p-0">
									<h1 className="whitespace-nowrap">
										<time dateTime="2013">2013</time>
										{ " " }
										: BTS Services Informatiques aux Organisations <small>
										- Bac+2
									</small>
									</h1>
								</header>
							</section>

							<section className="mt-3 flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap break-inside-avoid">
								<header
									className="font-bold bg-black/20 rounded-md px-3 py-2 uppercase self-start w-full md:w-fit print:p-0">
									<h1 className="whitespace-nowrap">
										<time dateTime="2010">2010</time>
										{ " " }
										: Baccalauréat Scientifique Spécialité Mathématiques
									</h1>
								</header>
							</section>
						</SectionCV>

						<SectionCV title="Langues" icon={ <LanguageIcon/> }>
							<ul className="list-inside list-disc">
								<li><strong>Anglais</strong> : Courant</li>
							</ul>
						</SectionCV>

						<SectionCV title="Centres d'intérêt" icon={ <StarIcon/> }>
							<ul className="list-inside list-disc">
								<li>Riichi Mahjong</li>
								<li>Jeux de réflexion</li>
							</ul>
						</SectionCV>
					</div>
				</section>
			</section>
		</main>
	)
}

export default App
