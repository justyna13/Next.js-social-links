import { getProfile } from '@/server/actions/user-actions';

import SocialLinksCard from '@/components/social-links-card';

export default async function Home() {
	const userData = await getProfile();
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<SocialLinksCard user={userData} />
		</div>
	);
}
