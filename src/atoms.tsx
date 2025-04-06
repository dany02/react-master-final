import { atom } from "recoil";

export const toMovieId = atom<number|undefined>({
	key:'movieID',
	default:undefined,
});


export const toShouldFetch = atom<boolean>({
	key:'shouldFetch',
	default: false,
});