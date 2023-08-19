import "../../App.css";
import React from 'react'
import styled from '@emotion/styled'
import {BsGithub} from 'react-icons/bs'




const Foot = styled.div`
      border-top : 1px solid var(--border-color);
      padding : 25px 0px;
      position : absolute;
      bottom : 0px;
      left : 0px;
      right : 0px;
      margin : 0px 35px;
      @media only screen and (max-width : 668px){
            padding : 15px 0px;
            margin : 0px 5%;
      }
`

const Footer = () => {
	const link = "https://github.com/Mayur9167";
	const target = "_blank";

	return (
		<Foot style={{borderTop : '1px solid var(--border-color)'}} className="d-flex align-items-center justify-content-between" >
			
			<p className='logo'>
			<small>{new Date().getFullYear()}</small>  {" "}
					<a href={link} target={target} >
						<BsGithub size={20} />
					</a>
				</p>
				</Foot>
	);
};

export default Footer;
