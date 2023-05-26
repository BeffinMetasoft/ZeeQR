import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import PMGF from '../../assests/img/black and gold back.png';
import PMGB from '../../assests/img/black and gold back1.png';
import PMSF from '../../assests/img/cardwhite.png';
import PMSB from '../../assests/img/cardwhite1.png';
import PMFF from '../../assests/img/cardscanner.png';
import PMFB  from '../../assests/img/cardscanner1.png';
import PMWGF  from '../../assests/img/whitecardgold.png';
import PMWGB   from '../../assests/img/whitecardgold1.png';
import LGGF   from '../../assests/img/goldcard.png';
import LGGB   from '../../assests/img/gold card.png';
import PMWBF  from '../../assests/img/whitecardblack.png';
import PMWBB  from '../../assests/img/whitecardblack1.png';
import PMWCF  from '../../assests/img/whitecardcolor.png';
import PMWCB  from '../../assests/img/whitecardcolor1.png';

function App({rotate, materailcolor, materailFavoriteColor}) {
	
	return (
		<ReactCardFlip isFlipped={rotate}
			flipDirection="horizontal">
			<div >

			 
			
	{materailcolor==="MBlack"&&materailFavoriteColor==="GMBlack"?<img src={PMGF}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="SMBlack"?<img src={PMSF}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="FMBlack"?<img src={PMFF}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="GMBlack"?<img src={PMWGF}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="SMBlack"?<img src={PMWBF}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="FMBlack"?<img src={PMWCF}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="GMBlack"?<img src={PMGF}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="SMBlack"?<img src={PMSF}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="FMBlack"?<img src={PMFF}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="GMBlack"?<img src={PMWGF}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="SMBlack"?<img src={PMWBF}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="FMBlack"?<img src={PMWCF}></img>:<img src={LGGF}></img>}				<br />
				<br />
				
			</div>
			<div >
			{materailcolor==="MBlack"&&materailFavoriteColor==="GMBlack"?<img src={PMGB}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="SMBlack"?<img src={PMSB}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="FMBlack"?<img src={PMFB}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="GMBlack"?<img src={PMWGB}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="SMBlack"?<img src={PMWBB}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="FMBlack"?<img src={PMWCB}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="GMBlack"?<img src={PMGB}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="SMBlack"?<img src={PMSB}></img>:materailcolor==="MBlack"&&materailFavoriteColor==="FMBlack"?<img src={PMFB}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="GMBlack"?<img src={PMWGB}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="SMBlack"?<img src={PMWBB}></img>:materailcolor==="MWhite"&&materailFavoriteColor==="FMBlack"?<img src={PMWCB}></img>:<img src={LGGB}></img>}
				<br />
				
			</div>
		</ReactCardFlip>
	);
}

export default App;
