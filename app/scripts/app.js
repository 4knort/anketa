import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();

	$( function () {
		$('#slider-range-max').slider({
			value: 20
		});
	} );
});
