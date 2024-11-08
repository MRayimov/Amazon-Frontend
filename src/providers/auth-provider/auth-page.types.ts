import { NextPage } from 'next';

export type TypeRoles = {
	isOnlyUser?: boolean;
};
// eslint-disable-next-line
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles;

export type TypeComponentAuthFields = { Component: TypeRoles };
