import { TUser } from '@/types/user';

export async function getProfile(): Promise<TUser> {
	return {
		name: 'Jessica Randall',
		address: 'London, United Kingdom',
		role: '"Front-end developer and avid reader."',
		photo: '/avatar-jessica.jpeg',
		socialLinks: {
			github: '/',
			frontendMentor: '/',
			linkedin: '/',
			twitter: '/',
			instagram: '/',
		},
	};
}
