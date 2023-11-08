import styled from 'styled-components';

export const DataTitle = styled.h1`
	font-size: 22px;
	font-weight: bold;
	margin: 50px 0 12px 0;
`;

export const RankNumber = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-bg-black);
	color: var(--color-bg-white);
	font-size: 16px;
	font-weight: bold;
	border-radius: 3px;
	padding: 7px 3px 5px 3px;
	width: 30px;
	height: 30px;
	left: 18px;
	top: 8px;
`;

export const Title = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
	width: 200px;
	margin-top: 5px;
`;

export const SwiperImg = styled.div`
	& img {
		width: 95%;
		border-radius: 5px;
		cursor: pointer;
	}
`;

export const SwiperWrap = styled.div`
	width: 80%;
	margin: auto;
`;

export const StyledSwiperContainer = styled.div`
	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		display: flex;
		flex-direction: column;
		font-size: 16px;
		overflow: hidden;
	}

	.swiper-button-prev {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-100%);
	}

	.swiper-button-next {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-100%);
	}
`;

export const InfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: -50px;
`;

export const DateText = styled.div`
	font-size: 16px;
	margin-top: 7px;
`;

export const AverageText = styled.div`
	font-size: 14px;
	color: var(--color-light-gray);
	margin-top: 10px;
`;
