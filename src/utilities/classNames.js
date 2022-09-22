// this function helps when we need to set a lot of options with our classes
export function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

// className={classNames(
// 	large ? 'w-28 h-28' : 'w-16 h-16',
// 	'flex items-center justify-center',
// )}
