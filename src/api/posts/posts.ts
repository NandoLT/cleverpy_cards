import { requests } from '../client';
import { PostType } from '../../types';

const postPath = 'posts';

export const Posts = {
	getPosts: (): Promise<PostType[]> => requests.get(`${postPath}`),
};