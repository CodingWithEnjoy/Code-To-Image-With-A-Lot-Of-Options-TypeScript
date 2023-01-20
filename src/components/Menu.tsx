import {
	IconAspectRatio,
	IconBox,
	IconPalette,
	IconShape,
	IconSquare,
	IconTag,
} from '@tabler/icons';
import React, { useEffect, useRef, useState } from 'react';
import { HexAlphaColorPicker, HexColorPicker } from 'react-colorful';
import { Input } from 'react-daisyui';
import { TabPanel, useTabs } from 'react-headless-tabs';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { TabSelector } from './TabsSelector';

export const Menu: React.FC = () => {
	// Component Store
	const [selectedTab, setSelectedTab] = useTabs(
		['workspace', 'control'],
		'control'
	);
	const [isEmpty, setIsEmpty] = useState(true);

	// App Store
	const workspaceName = useStoreState((state) => state.workspaceName);
	const workspaceWidth = useStoreState((state) => state.workspaceWidth);
	const workspaceHeight = useStoreState((state) => state.workspaceHeight);

	const controls = useStoreState((state) => state.ControlsTree);
	const currentID = useStoreState((state) => state.currentControlID);
	const workspaceColor = useStoreState((state) => state.workspaceColor);
	const setWorkspaceName = useStoreActions((state) => state.setWorkspaceName);
	const setWorkspaceColor = useStoreActions((state) => state.setWorkspaceColor);
	const setWorkspaceSize = useStoreActions((state) => state.setWorkspaceSize);

	const reference = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (reference.current?.childNodes)
			if (reference.current?.childNodes.length > 1) {
				setIsEmpty(false);
			} else {
				setIsEmpty(true);
			}
	}, [controls, isEmpty, currentID]);

	return (
		<div className='flex flex-auto flex-col'>
			{/* Seletors */}
			<div className='flex flex-auto  max-h-8 flex-row gap-4'>
				<TabSelector
					isActive={selectedTab === 'control'}
					onClick={() => setSelectedTab('control')}
				>
					<div className='flex flex-auto flex-row'>
						<IconShape className='mr-2' size={18}></IconShape>
						<p>Control</p>
					</div>
				</TabSelector>

				<TabSelector
					isActive={selectedTab === 'workspace'}
					onClick={() => setSelectedTab('workspace')}
				>
					<div className='flex flex-auto flex-row'>
						<IconSquare className='mr-2' size={18}></IconSquare>
						<div>Workspace</div>
					</div>
				</TabSelector>
			</div>

			{/* Tab Panels */}
			<div className='flex flex-auto flex-col mt-4'>
				{/* Workspace */}
				<TabPanel
					hidden={selectedTab !== 'workspace'}
					className={`${
						selectedTab === 'workspace' && 'flex flex-auto text-gray-400'
					}`}
					id='workspace'
				>
					<div className='flex flex-auto flex-col p-2 text-xs'>
						{/* Workspace Name */}
						<>
							<div className='flex flex-row m-2 gap-2'>
								<IconTag size={22}></IconTag>
								<p className='font-bold my-auto'>Workspace Name</p>
							</div>
							<div className='flex flex-auto flex-row max-h-14 p-2'>
								<Input
									spellCheck={false}
									className='bg-base-100 p-2 rounded-xl my-auto  w-full'
									onChange={(ev) => setWorkspaceName(ev.target.value)}
									value={workspaceName}
								></Input>
							</div>
						</>

						{/* Size */}
						<>
							<div className='flex flex-row m-2 gap-2 '>
								<IconAspectRatio size={22}></IconAspectRatio>
								<p className='font-bold my-auto'>Size</p>
							</div>
							<div className='flex flex-auto flex-row max-h-16 p-2'>
								{/* Size W */}
								<div className='flex flex-auto flex-row'>
									<p className='my-auto mr-2'>W:</p>
									<Input
										type={'number'}
										className='bg-base-100 p-2 rounded-xl my-auto  w-full'
										onChange={(ev) =>
											setWorkspaceSize({
												width: ev.target.value,
												height: workspaceHeight,
											})
										}
										value={workspaceWidth}
									></Input>
								</div>
								{/* Size H */}
								<div className='flex flex-auto flex-row ml-2'>
									<p className='my-auto mr-2'>H:</p>
									<Input
										type={'number'}
										className='bg-base-100 p-2 rounded-xl my-auto  w-full'
										onChange={(ev) =>
											setWorkspaceSize({
												height: ev.target.value,
												width: workspaceWidth,
											})
										}
										value={workspaceHeight}
									></Input>
								</div>
							</div>
						</>

						{/* Background Color */}
						<>
							<div className='flex flex-row m-2 gap-2 '>
								<IconPalette size={22}></IconPalette>
								<p className='font-bold my-auto'>Background</p>
							</div>
							<HexAlphaColorPicker
								color={workspaceColor}
								onChange={setWorkspaceColor}
								className='flex flex-auto max-w-xs w-36 mx-auto max-h-44'
							></HexAlphaColorPicker>
						</>
					</div>
				</TabPanel>

				{/* Controls */}
				<TabPanel
					className={`${
						selectedTab === 'control' && 'flex flex-auto flex-col text-gray-400'
					}`}
					hidden={selectedTab !== 'control'}
				>
					<div id='menu' ref={reference} className='flex flex-auto flex-col'>
						{isEmpty && (
							<p className='mx-auto my-auto text-center text-xs text-gray-700'>
								Select a control to start editing it
							</p>
						)}
					</div>
				</TabPanel>
			</div>
		</div>
	);
};
