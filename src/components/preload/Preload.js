import React, { useRef } from 'react';
import './preload.css'

function Preload() {
    const preload = useRef()
     setTimeout(function () {
				$(preload).fadeOut();
			}, 2000);
    return (
			<div class="loading_container" ref={preload}>
				<div class="loader">
					<span class="one" style="--i:1;"></span>
					<span class="two" style="--i:2;"></span>
					<span class="three" style="--i:3;"></span>
				</div>
			</div>
		);
}

export default Preload
