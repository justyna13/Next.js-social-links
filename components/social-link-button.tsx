import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons/icons';

type TProps = {
	type: 'github' | 'twitter' | 'linkedin' | 'instagram' | 'frontendMentor';
	url: string;
	customLabel?: string;
};
export default function SocialLinkButton({ type, url, customLabel }: TProps) {
	let icon;
	if (type === 'github') {
		icon = <Icons.github />;
	} else if (type === 'twitter') {
		icon = <Icons.twitter />;
	} else if (type === 'linkedin') {
		icon = <Icons.linkedin />;
	} else if (type === 'instagram') {
		icon = <Icons.instagram />;
	} else if (type === 'frontendMentor') {
		icon = (
			<div className="flex size-5 items-center justify-center bg-blue-50">
				<Icons.frontendMentor />
			</div>
		);
	}
	return (
		<Link href={url}>
			<Button className="mb-4 w-full rounded-lg bg-muted py-4 capitalize transition-colors hover:bg-[hsl(75,94%,30%)]">
				{icon ?? ''} {customLabel ?? type}
			</Button>
		</Link>

	);
}
