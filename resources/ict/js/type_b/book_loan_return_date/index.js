$(function () {
	const loanMonthClock = new FlipClock(document.getElementById('loan-month'), {
		clockFace: 'Counter',
		autoStart: false,
	});
	const loanDayClock = new FlipClock(document.getElementById('loan-day'), {
		clockFace: 'Counter',
		autoStart: false,
	});
	const loanWeekdayClock = new FlipClock(document.getElementById('loan-weekday'), {
		clockFace: 'Counter',
		autoStart: false,
	});
	const loanSecondsClock = new FlipClock(document.getElementById('loan-seconds'), {
		clockFace: 'Counter',
	});

	// FlipClock 인스턴스 생성 (반납일)
	const returnMonthClock = new FlipClock(document.getElementById('return-month'), {
		clockFace: 'Counter',
		autoStart: false,
	});
	const returnDayClock = new FlipClock(document.getElementById('return-day'), {
		clockFace: 'Counter',
		autoStart: false,
	});
	const returnWeekdayClock = new FlipClock(document.getElementById('return-weekday'), {
		clockFace: 'Counter',
		autoStart: false,
	});
	const returnSecondsClock = new FlipClock(document.getElementById('return-seconds'), {
		clockFace: 'Counter',
	});

	// 요일 배열 정의
	const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

	// 대출일과 반납일 계산
	const loanDate = new Date(); // 대출일: 현재 날짜
	const returnDate = new Date(); // 반납일: 14일 후 날짜
	returnDate.setDate(loanDate.getDate() + 14);

	// 날짜 형식을 가져오는 함수
	function getFormattedDate(date) {
		return {
			month: date.getMonth() + 1, // 월은 1부터 시작
			day: date.getDate(), // 일
			weekday: weekdays[date.getDay()], // 요일
		};
	}

	// 대출일과 반납일 초기화
	const loan = getFormattedDate(loanDate);
	const returnInfo = getFormattedDate(returnDate);

	// FlipClock에 대출일과 반납일 값 설정
	loanMonthClock.setTime(loan.month);
	loanDayClock.setTime(loan.day);
	loanWeekdayClock.setTime(loan.weekday);

	returnMonthClock.setTime(returnInfo.month);
	returnDayClock.setTime(returnInfo.day);
	returnWeekdayClock.setTime(returnInfo.weekday);

	// 매초마다 현재 초를 갱신하는 함수
	function updateSeconds() {
		const now = new Date();
		const seconds = now.getSeconds();

		loanSecondsClock.setTime(seconds);
		returnSecondsClock.setTime(seconds);
	}

	// 초를 1초마다 업데이트
	setInterval(updateSeconds, 1000);
	updateSeconds(); // 초기 초 설정
});
