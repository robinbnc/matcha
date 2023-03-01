import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import { GeoAltFill } from 'react-bootstrap-icons';
import { HeartbreakFill } from 'react-bootstrap-icons';
import PassionsBadge from './passionsBadges';
import LikeButton from './likeButton';
import './swipeCard.scss'

import { url } from 'inspector';

const SwipeCard = () => {
	return (
		<>
		<div className="card border-0 swipe-card" >
			<div className='swipeCardImageContainer'/>
			<div className="card-body m-20 d-flex flex-row">
				<div>					
					<h3 className="h3 fw-bolder">Robin Bicanic, 25</h3>
					<div className='txt-color-secondary d-flex pb-20'>
						<GeoAltFill size={20}/>
						<p className="h6 fw-bold">12km from you</p>
					</div>
					<p className="h6 pb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<h4 className="h4 fw-bolder pb-20">Passions</h4>
					<Stack direction="horizontal" gap={3}>
						<PassionsBadge/>
						<PassionsBadge/>
						<PassionsBadge/>
						<PassionsBadge/>
					</Stack>
				</div>
				<div pl-30>
					<Stack direction="horizontal">
						<HeartbreakFill/>
						<LikeButton/>
					</Stack>
				</div>
			</div>
			<br/>
		</div>
		</>
	) 
}

export default SwipeCard;

