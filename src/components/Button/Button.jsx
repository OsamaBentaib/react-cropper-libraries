import styled from "styled-components";

const Button = ({ children, className, ...props }) => {
	return (
		<StyledButton
			style={{
				background: "#a70cff",
				color: "#fff",
			}}
			className={`${className} block text-black px-6 rounded-md font-semibold hover:opacity-75 transition-opacity duration-500 ease-in`}
			type="button"
			{...props}
		>
			{children}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	background-color: #a70cff;
	border: none;
	outline: none;
	height: 45px;

	&:focus {
		border: none;
		outline: none;
	}

	&:disabled {
		opacity: 1;
		cursor: not-allowed;
	}
`;

export default Button;
