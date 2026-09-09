import React from 'react';
import Image from 'next/image';
import Profile from '../images/Ashok.jpeg';

const ProfilePicture = () => {
	return <Image src={Profile} alt="profile" width={150} height={250} />;
};

export default ProfilePicture;
