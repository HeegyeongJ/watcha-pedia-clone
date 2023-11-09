import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContentsBanner from '../../components/contents/ContentsBanner/ContentsBanner';
import ContentsInfo from '../../components/contents/ContentsInfo/ContentsInfo';
import { useEffect, useState } from 'react';
import movieAxios from '../../api/axios';
import tvAxios from '../../api/axios';
import {
	SET_GALLERY,
	SET_MOVIE_DETAIL,
	SET_SIMILAR,
	SET_VIDEOS,
} from '../../slice/movieSlice';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { SET_TV_DETAIL, SET_TV_SIMILAR } from '../../slice/tvSeasonsSlice';
import { ModalProvider } from '../../context/ModalContext';
import Loading from './Loading/Loading';

const Contents = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);

	const fetchMovieDetailData = async () => {
		try {
			const response = await movieAxios.get(`movie/${id}`);

			dispatch(SET_MOVIE_DETAIL(response.data));
		} catch (error) {
			console.error('Movie Detail Fetch Error:', error);
		}
	};

	const fetchGalleryImages = async () => {
		try {
			const response = await movieAxios.get(`movie/${id}/images`);

			dispatch(SET_GALLERY(response.data.backdrops));
		} catch (error) {
			console.error('Gallery Images Fetch Error:', error);
		}
	};
	const fetchTVGalleryImages = async () => {
		try {
			const response = await movieAxios.get(`tv/${id}/images`);

			dispatch(SET_GALLERY(response.data.backdrops));
		} catch (error) {
			console.error('TV Gallery Images Fetch Error:', error);
		}
	};

	const fetchSimilarMovieData = async () => {
		try {
			const response = await movieAxios.get(`/movie/${id}/similar`);

			dispatch(SET_SIMILAR(response.data.results));
		} catch (error) {
			console.error('Similar Movies Fetch Error:', error);
		}
	};

	const fetchTVDetailData = async () => {
		try {
			const response = await tvAxios.get(`tv/${id}`);

			dispatch(SET_TV_DETAIL(response.data));
		} catch (error) {
			console.error('TV Detail Fetch Error:', error);
		}
	};

	const fetchSimilarTVData = async () => {
		try {
			const response = await tvAxios.get(`tv/${id}/similar`);

			dispatch(SET_TV_SIMILAR(response.data.results));
		} catch (error) {
			console.error('Similar TV Shows Fetch Error:', error);
		}
	};

	const fetchMovieVideos = async () => {
		try {
			const response = await movieAxios.get(`movie/${id}/videos`);
			
			dispatch(SET_VIDEOS(response.data.results));
		} catch (error) {
			console.error('Similar TV Shows Fetch Error:', error);
		}
	};

	const fetcTVVideos = async () => {
		try {
			const response = await tvAxios.get(`tv/${id}/videos`);
			
			dispatch(SET_VIDEOS(response.data.results));
		} catch (error) {
			console.error('Similar TV Shows Fetch Error:', error);
		}
	}; 

	useEffect(() => {
		Promise.all([
			fetchMovieDetailData(),
			fetchGalleryImages(),
			fetchTVGalleryImages(),
			fetchTVDetailData(),
			fetchSimilarMovieData(),
			fetchSimilarTVData(),
			fetchMovieVideos(),
			fetcTVVideos()
		])
			.then(() => setIsLoading(false))
			.catch(() => setIsLoading(false));
	}, []);

	useScrollToTop();

	if (isLoading) {
		return <Loading/>;
	}

	return (
		<div>
			<ModalProvider>
				<ContentsBanner />
				<ContentsInfo />
			</ModalProvider>
		</div>
	);
};

export default Contents;
