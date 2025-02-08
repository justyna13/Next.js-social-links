import Image from 'next/image';

import { TUser } from '@/types/user';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import SocialLinkButton from '@/components/social-link-button';

type TProps = {
	user: TUser;
};

export default function SocialLinksCard({ user }: TProps) {
	const { name, address, role, photo, socialLinks } = user;

	return (
		<Card className="max-w-[300px]">
			<CardHeader>
				{photo && (
					<Image
						src={photo}
						alt="User image"
						width={74}
						height={74}
						className="mb-4 flex aspect-square size-[74px] self-center rounded-full object-cover shadow-foreground drop-shadow-xl"
					/>
				)}
				<CardTitle className="text-center text-lg">{name}</CardTitle>
				<CardDescription className="text-center text-sm">
					<p className="mb-2 text-green">{address}</p>
					<p>{role}</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				{socialLinks.github && (
					<SocialLinkButton type="github" url={socialLinks.github} />
				)}
				{socialLinks.frontendMentor && (
					<SocialLinkButton
						type="frontendMentor"
						url={socialLinks.frontendMentor}
					/>
				)}
				{socialLinks.linkedin && (
					<SocialLinkButton
						type="linkedin"
						url={socialLinks.linkedin}
					/>
				)}
				{socialLinks.twitter && (
					<SocialLinkButton
						type="twitter"
						url={socialLinks.twitter}
					/>
				)}
				{socialLinks.instagram && (
					<SocialLinkButton
						type="instagram"
						url={socialLinks.instagram}
					/>
				)}
			</CardContent>
		</Card>
	);
}
