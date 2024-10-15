setInterval(() => {
	const date = new Date();

	const h = date.getHours();
	const m = date.getMinutes();
	const s = date.getSeconds();

	const degHour = h * (360 / 12) + m * (360 / 12 / 60);
	const degMinute = m * (360 / 60);
	const degSecond = s * (360 / 60);

	const $hour = $('.hour');
	const $minute = $('.minute');
	const $second = $('.second');

	$hour.css('transform', `rotate(${degHour}deg)`);
	$minute.css('transform', `rotate(${degMinute}deg)`);
	$second.css('transform', `rotate(${degSecond}deg)`);
}, 50);

$(document).ready(function () {
	function updateClock() {
		const now = new Date();

		const year = now.getFullYear();
		const month = now.getMonth() + 1;
		const date = now.getDate();
		const day = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];

		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');

		$('#clock_date').text(`${year}년 ${month}월 ${date}일(${day})`);
		$('#clock_time').text(`${hours}:${minutes}`);
	}

	updateClock();
	setInterval(updateClock, 60000);

	setInterval(function () {
		$('.clock').animate({ opacity: 0.7 }, 500).animate({ opacity: 1 }, 500);
	}, 1000);
});

var weathers = new Array(
	'thunderstorm with light rain',
	'thunderstorm with rain',
	'thunderstorm with heavy rain',
	'light thunderstorm',
	'thunderstorm',
	'heavy thunderstorm',
	'ragged thunderstorm',
	'thunderstorm with light drizzle',
	'thunderstorm with drizzle',
	'thunderstorm with heavy drizzle',
	'light intensity drizzle',
	'drizzle',
	'heavy intensity drizzle',
	'light intensity drizzle rain',
	'drizzle rain',
	'heavy intensity drizzle rain',
	'shower rain and drizzle',
	'heavy shower rain and drizzle',
	'shower drizzle',
	'light rain',
	'moderate rain',
	'heavy intensity rain',
	'very heavy rain',
	'extreme rain',
	'freezing rain',
	'light intensity shower rain',
	'shower rain',
	'heavy intensity shower rain',
	'ragged shower rain',
	'light snow',
	'snow',
	'heavy snow',
	'sleet',
	'light shower sleet',
	'shower sleet',
	'light rain and snow',
	'rain and snow',
	'light shower snow',
	'shower snow',
	'heavy shower snow',
	'mist',
	'smoke',
	'haze',
	'sand/dust whirls',
	'fog',
	'sand',
	'dust',
	'volcanic ash',
	'squalls',
	'tornado',
	'clear sky',
	'few clouds',
	'scattered clouds',
	'broken clouds',
	'overcast clouds'
);

var weatherskor = new Array(
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'뇌우',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'이슬비',
	'비 약간',
	'적당한 비',
	'비 많이',
	'비 많이',
	'폭우',
	'우박',
	'소나기 약간',
	'소나기',
	'폭우 수준의 소나기',
	'오락가락한 소나기',
	'눈 약간',
	'눈',
	'폭설',
	'진눈째비',
	'약간의 진눈깨비',
	'갑자기 진눈깨비',
	'약간의 비와 눈',
	'비와 눈',
	'갑자기 약간 눈',
	'갑자기 눈',
	'폭설',
	'안개',
	'연기',
	'안개',
	'모래/먼지 소용돌이',
	'모래',
	'모래',
	'먼지',
	'화산재',
	'돌풍',
	'토네이도',
	'맑음',
	'구름 약간',
	'약간 흐림',
	'흐림 구름',
	'구름 많음',
	'흐림'
);

var i;

$.ajax({
	url: 'https://api.openweathermap.org/data/2.5/forecast?q=Gumi&appid=3bcf7eca7fc5d5df252135e43043a0a7&units=metric',
	dataType: 'json',
	type: 'GET',
	async: 'false',
	success: function (data) {
		console.log(data);
		const feelsLike = parseFloat(data.list[0].main.feels_like.toFixed(1)) + '°';
		const currentTemp = parseFloat(data.list[0].main.temp.toFixed(1)) + '°';
		const description = data.list[0].weather[0].description;

		const weatherIcon = data.list[0].weather[0].icon;

		$('.weather_wrapper .weather_description').html('체감 ' + feelsLike);

		$('.weather_wrapper .weather').html(currentTemp);

		$('.weather_wrapper .weather_img').attr('src', `../../../../../resources/ict/img/type_c/promotion/${weatherIcon}.png`);

		var kor = '';
		for (i = 0; i < weathers.length; i++) {
			if (weathers[i] == description) {
				kor = weatherskor[i];
				break;
			}
		}
		$('.weather_wrapper .weather_caption').html(kor);
	},
});
