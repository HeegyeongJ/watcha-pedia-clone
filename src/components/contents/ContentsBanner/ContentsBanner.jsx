import React from 'react';
import * as style from './ContentsBanner.style'
import { useSelector } from 'react-redux';

const ContentsBanner = () => {
	const mockMovieData = useSelector(state=> state.movie[0]);

    return (
        <style.Banner>
            <style.BgImg></style.BgImg>
            <style.contentsInfoBox>
                <style.contentsTitle>{mockMovieData.title}</style.contentsTitle>
                <style.contentsInfo>{mockMovieData.original_title}</style.contentsInfo>
                <style.contentsInfo>{mockMovieData.release_date} · 장르 · 국가</style.contentsInfo>
                <style.contentsInfo>러닝타임 · 전체</style.contentsInfo>
                <style.contentsInfo>예매 순위 1위(24%)</style.contentsInfo>
            </style.contentsInfoBox>
        </style.Banner>
    );
};

export default ContentsBanner;