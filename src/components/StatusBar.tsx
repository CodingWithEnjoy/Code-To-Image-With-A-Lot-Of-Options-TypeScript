import React, { useState } from 'react';
import { Modal } from 'react-daisyui';
import { useStoreState } from '../stores/Hooks';
import cwe from '../assets/cwe.png';
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandTwitter,
} from '@tabler/icons';

export const StatusBar: React.FC = () => {
	const [showAbout, setShowAbout] = useState(false);
	const workspaceName = useStoreState((state) => state.workspaceName);
	const workspaceWidth = useStoreState((state) => state.workspaceWidth);
	const workspaceHeight = useStoreState((state) => state.workspaceHeight);

	return (
		<>
			<div className='flex flex-row p-1 text-gray-500 select-none'>
				<p className='text-xs my-auto'>
					Workspace: {workspaceName} Size: {workspaceWidth} X {workspaceHeight}
				</p>

				<div
					onMouseDown={() => setShowAbout(true)}
					className='ml-auto flex flex-row gap-2 hover:bg-base-100 hover:rounded cursor-pointer p-1'
				>
					<p className='text-xs my-auto'>Karbonized V1.0.0</p>
					<p className='text-xs my-auto'>made by Coding With Enjoy</p>
				</div>
			</div>

			{showAbout && (
				<Modal
					className='bg-base-200'
					open={showAbout}
					onClickBackdrop={() => setShowAbout(false)}
				>
					<Modal.Header className='font-bold dark:text-white'>
						Karbonized
					</Modal.Header>

					<Modal.Body className='select-none'>
						<img className='h-36 rounded-full mx-auto' src={cwe}></img>
						<p className='text-white font-bold text-2xl m-2 text-center'>
							Hi !
						</p>
						<p className='text-gray-500 m-2 text-center'>
							Thank's for use Karbonized. You can support my work with following
							me on my social networks
						</p>

						<div className='m-2 mt-4 p-2 flex flex-auto flex-row gap-2 mx-auto  w-fit'>
							<a
								href='https://twitter.com/codingwithenjoy'
								target={'_blank'}
								className='flex flex-row gap-1 p-2 hover:bg-gradient-to-bl select-none cursor-pointer text-white rounded-3xl bg-gradient-to-br from-blue-400 to to-blue-500  '
							>
								<IconBrandTwitter></IconBrandTwitter>
								<p className='my-auto font-bold'>Twitter</p>
							</a>

							<a
								href='https://instagram.com/codingeithenjoy'
								target={'_blank'}
								className='flex flex-row gap-1 p-2 hover:bg-gradient-to-bl select-none cursor-pointer text-white rounded-3xl bg-gradient-to-br from-red-500 to to-orange-600 '
							>
								<IconBrandInstagram></IconBrandInstagram>
								<p className='my-auto font-bold'>Instagram</p>
							</a>

							<a
								href='https://github.com/CodingWithEnjoy'
								target={'_blank'}
								className='flex flex-row gap-1 p-2 hover:bg-gradient-to-bl select-none cursor-pointer text-white rounded-3xl bg-gradient-to-br  from-base-100 to bg-gray-900'
							>
								<IconBrandGithub></IconBrandGithub>
								<p className='my-auto font-bold'>GitHub</p>
							</a>
						</div>
					</Modal.Body>

					<Modal.Actions>
						<button
							className='dark:text-white'
							onClick={() => setShowAbout(false)}
						>
							OK
						</button>
					</Modal.Actions>
				</Modal>
			)}
		</>
	);
};
