import { Action, action, createStore, persist } from 'easy-peasy';
import React, { ReactElement } from 'react';

interface Item {
	type: string;
}

export interface AppStoreModel {
	ControlsTree: Item[];
	currentControlID: string;

	workspaceName: string;
	workspaceColor: string;
	workspaceWidth: string;
	workspaceHeight: string;

	setWorkspaceName: Action<AppStoreModel, string>;
	setWorkspaceColor: Action<AppStoreModel, string>;
	setWorkspaceSize: Action<AppStoreModel, { height: string; width: string }>;
	addControl: Action<AppStoreModel, Item>;
	setcurrentControlID: Action<AppStoreModel, string>;
}

export const AppStore = createStore<AppStoreModel>({
	ControlsTree: [{ type: 'code' }],
	currentControlID: '',
	workspaceName: 'karbonized-code',
	workspaceColor: '#5895c8',
	workspaceHeight: '512',
	workspaceWidth: '512',

	setWorkspaceColor: action((state, payload) => {
		state.workspaceColor = payload;
	}),
	setWorkspaceName: action((state, payload) => {
		state.workspaceName = payload;
	}),
	setWorkspaceSize: action((state, payload) => {
		state.workspaceHeight = payload.height;
		state.workspaceWidth = payload.width;
	}),
	addControl: action((state, payload) => {
		state.ControlsTree.push(payload);
	}),

	setcurrentControlID: action((state, payload) => {
		state.currentControlID = payload;
	}),
});
