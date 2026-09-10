import React from 'react';
import ProfilePicture from './profilePicture';

const ShowcaseContent = () => {
	return (
		<div
			className="showcase flex justify-center items-center w-full min-h-[80vh] box-border p-5 pt-24 md:pt-5"
			style={{
				minHeight: '80vh',
				width: '100%',
				boxSizing: 'border-box',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'left',
					maxWidth: '1200px',
					gap: '24px',
				}}
			>
				<ProfilePicture />
				<p
					className="my-1"
					style={{
						fontSize: '1.1rem',
						lineHeight: '1.6',
						margin: '0',
						color: '#374151',
					}}
				>
					I am a technologist with 20+ years of experience in fintech,
					e-commerce, and healthcare, with a focus on software
					development, architecture, and leadership. My passions
					include running and learning something new every day whether
					it be related to coding or not. Perseverance is one of my
					assets because whatever I do, I do it from the bottom of my
					heart. My goal for every day is to be smarter than the day
					before. One cannot escape from his/her duties no matter
					what, so I take it into my hands to follow through on my
					responsibilities as diligently as possible. The human body
					is a tool used to execute its tasks in this life; it will be
					sharper and grow stronger with increased use. The only way
					to live life to the fullest is by coming to terms with this
					idea.
				</p>
			</div>
		</div>
	);
};

export default ShowcaseContent;
