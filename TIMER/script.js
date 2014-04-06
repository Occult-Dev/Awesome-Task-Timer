	var second = 0;
	var minute = 0;
	var alertsnd = new Audio('sound.wav');
	var alertsnd2 = new Audio('sound2.wav');
	var action = true;
	var secondsInterval;
	var printOutInterval;
	var act1Time;
	var act2Time;
	var act1;
	var act2;
	var resume = false;
	var resumeChecker = false;
	function seconds(){
		second ++;
		if(second == 60){
			second = 0;
			minutes();
		};
	};
	function minutes(){
		minute ++;
		if(action == false){
			if(minute == act2Time){
				alertsnd.play();
				action = true;
				minute = 0;
				second = 0;
			};
		}else if(minute == act1Time-1){
				alertsnd2.play();
				document.getElementById('alert').innerHTML = 'One Minute Left';
			}else if(minute == act1Time && action == true){
			alertsnd.play();
			action = false;
			minute = 0;
			second = 0;
			document.getElementById('alert').innerHTML = '';
		}else{document.getElementById('alert').innerHTML = '';};
	};
	function printOutTime(){
		document.getElementById('minutes').innerHTML = 'Minutes: '+minute;
		document.getElementById('seconds').innerHTML = 'Seconds: '+second;
		if(action == false){
			document.getElementById('activity1').innerHTML = '';
			document.getElementById('activity2').innerHTML = act2;
			document.getElementById('alert').innerHTML = '';
		}else{
			document.getElementById('activity2').innerHTML = '';
			document.getElementById('activity1').innerHTML = act1;
		};
	};
	function start(){
		act1 = prompt('THE ACTION\nWhat is the first activity?\n\(working out, cleaning, programming, fighting space-dinosaurs, etc.\)');
		act2 = prompt('THE DOWNTIME\nWhat is the second activity?\n\(relaxing, partying, talking to the space-dinosaurs, etc.\)');
		act1Time = prompt('How long should \"'+act1+'\" last?\n\(in minutes\)');
		act2Time = prompt('How long should \"'+act2+'\" last?\n\(in minutes\)');
		clearInterval(secondsInterval);
		clearInterval(printOutInterval);
		second = 0;
		minute = 0;
		secondsInterval = setInterval(seconds, 1000);
		printOutInterval = setInterval(printOutTime, 1);
		resumeChecker = true;
	};
	function stop(){
		if(resumeChecker == true){
			if(resume == false){
				clearInterval(secondsInterval);
				clearInterval(printOutInterval);
				document.getElementById('stop').innerHTML = 'RESUME';
				resume = true;
			}else{
				secondsInterval = setInterval(seconds, 1000);
				printOutInterval = setInterval(printOutTime, 1);
				document.getElementById('stop').innerHTML = 'STOP';
				resume = false;
			};
		};
	};
	function colorChange(color){
		document.body.style.background = color;
	};