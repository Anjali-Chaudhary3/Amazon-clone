import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
// import * as React from 'react';

import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button';
// import AbcIcon from '@mui/icons-material/Abc';

const SignUp = () => {
	return (
		<div>
			<h1>Sign Up Successful</h1>
			{/* <Icon>AddCircle</Icon>
			<Icon>access_alarm</Icon> */}
			<MenuIcon />
			<Button variant="contained">Hello world</Button>;
            <Rating />
		</div>
	);
};

export default SignUp;
