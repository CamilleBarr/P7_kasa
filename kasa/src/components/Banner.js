
import bannerImg from '../assets/bannerImg.png'
import BannerCSS from '../styles/BannerCSS.css'

function Banner () {
    return (
		<div className="banner-container">
            <img src={bannerImg} alt="logo" />
			<p className="banner-text">Chez vous, partout et ailleurs</p>
		</div>
	);
}

export default Banner