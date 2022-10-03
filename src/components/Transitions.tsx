import { Transition } from "@headlessui/react"
import { PropsWithChildren } from "react"

export const DisclosureTransition = ({ children }: PropsWithChildren) => {
	return (
		<Transition
			enter="transition ease-out duration-300 transform"
			enterFrom="opacity-0 -translate-y-5"
			enterTo="opacity-100 translate-y-0"
			leave="transition ease-in duration-300 transform"
			leaveFrom="opacity-100 translate-y-0"
			leaveTo="opacity-0 -translate-y-5"
		>
			{ children }
		</Transition>
	)
}