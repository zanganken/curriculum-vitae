import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid"
import { DisclosureTransition } from "./Transitions"
import React, { Fragment, PropsWithChildren } from "react"
import { classNames } from "../utils/stringUtils"

type TSectionCVProps = PropsWithChildren<{
	title: string
	className?: string
}>

const SectionCV = ({ title, className, children }: TSectionCVProps) => {
	return (
		<Disclosure defaultOpen={ true } as={ Fragment }>
			{ ({ open }) => (
				<article className={ classNames(
					"mx-2 space-y-1",
					className,
					!open ? "print:hidden" : "",
				) }>
					<Disclosure.Button className="font-bold text-xl" aria-label="Afficher/Cacher le contenu">
						<h1 className="inline underline underline-offset-4">{ title }</h1>
						{ " " }
						{ open ? (
							<ChevronUpIcon className="print:hidden"/>
						) : (
							<ChevronDownIcon/>
						) }
					</Disclosure.Button>
					<DisclosureTransition>
						<Disclosure.Panel>
							{ children }
						</Disclosure.Panel>
					</DisclosureTransition>
				</article>
			) }
		</Disclosure>
	)
}

export default SectionCV