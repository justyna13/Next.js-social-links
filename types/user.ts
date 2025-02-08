import { TSocialLinks } from '@/types/types';

export type TUser = {
	name: string;
	address: string;
	role: string;
	socialLinks: TSocialLinks;
	photo?: string;
};
