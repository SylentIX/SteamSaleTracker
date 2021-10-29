const thisYear = new Date().getFullYear();

const dates = [

  { 'name': 'Lunar', 'start': `11/2/${thisYear}`, 'end': `15/2/${thisYear}` },
  { 'name': 'Summer', 'start': `24/6/${thisYear}`, 'end': `8/7/${thisYear}` },
  { 'name': 'Halloween', 'start': `28/10/${thisYear}`, 'end': `1/11/${thisYear}` },
  { 'name': 'Autumn', 'start': `24/11/${thisYear}`, 'end': `30/11/${thisYear}` },
  { 'name': 'Winter', 'start': `21/12/${thisYear}`, 'end': `4/1/${thisYear + 1}`}

];

var arr = [

  new Date(dates[0].start.split('/')[2], parseInt(dates[0].start.split('/')[1])-1, dates[0].start.split('/')[0], 19),
  new Date(dates[1].start.split('/')[2], parseInt(dates[1].start.split('/')[1])-1, dates[1].start.split('/')[0], 19),
  new Date(dates[2].start.split('/')[2], parseInt(dates[2].start.split('/')[1])-1, dates[2].start.split('/')[0], 19),
  new Date(dates[3].start.split('/')[2], parseInt(dates[3].start.split('/')[1])-1, dates[3].start.split('/')[0], 19),
  new Date(dates[4].start.split('/')[2], parseInt(dates[4].start.split('/')[1])-1, dates[4].start.split('/')[0], 19),

];

var today = new Date();

var closestDates = arr.sort(function(a, b) {

    var distanceA = Math.abs(today - a);
    var distanceB = Math.abs(today - b);
    return distanceA - distanceB;

});

var nextDates = arr.filter(function(d) {

  return d - today < 0;

});

var afterDates = arr.filter(function(d) {

  return d - today > 0;

});

var title;
var dateStart;
var dateEnd;

var currentTitle;
var currentStart;
var currentEnd;

dateStart = today.getTime() < nextDates[0] ? nextDates[0] : afterDates[0];

currentStart = closestDates[0];

var dateFormat = (dateStart.getDate() + '/' + (parseInt(dateStart.getMonth()) + 1) + '/' + dateStart.getFullYear()).toString();

var currentFormat = (currentStart.getDate() + '/' + (parseInt(currentStart.getMonth()) + 1) + '/' + currentStart.getFullYear()).toString();

title = dates.find(obj => {

  return obj.start === dateFormat;

})

currentTitle = dates.find(obj => {

  return obj.start === currentFormat;

})

dateEnd = new Date(title.end.split('/')[2], (parseInt(title.end.split('/')[1])- 1), title.end.split('/')[0], 19);

currentEnd = new Date(currentTitle.end.split('/')[2], (parseInt(currentTitle.end.split('/')[1])- 1), currentTitle.end.split('/')[0], 19);

var date;

const isBetween = (date, min, max) => (date.getTime() >= min.getTime() && date.getTime() <= max.getTime());

var x = setInterval(function() {

  if (isBetween(today, currentStart, currentEnd)) {

    setTimeout(function() {

    document.getElementById('active').innerHTML = `<a target="_blank" href="https://store.steampowered.com/">${currentTitle.name} Sale</a>`;
    document.getElementById('active-status').textContent = `Ends in::`;
    document.getElementById('active-status').style.color = '#c40014';

    }, 1000);

    var now = new Date().getTime();

    date = currentEnd;

    var diff = date - now;
  
    var s = Math.floor(diff / 1000);
    var m =  Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    var w = d / 7;
    var mo = (w / 4.34524).toFixed(1);
    var y = (mo / 12).toFixed(1);
  
    h %= 24;
    m %= 60;
    s %= 60;
  
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    w = (w < 1) ? w.toFixed(1) : Math.floor(w);

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    setTimeout(function() {

    document.getElementById('date').textContent = date.toLocaleDateString(undefined, options);
    document.getElementById('date-hours').textContent = '10AM Pacific Time';
  
    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
    document.getElementById('weeks').textContent = w;
    document.getElementById('months').textContent = mo;
    document.getElementById('years').textContent = y;

    if (w <= 1) {
      document.getElementById('weeks-title-end').textContent = ' Week';
    }

    if (d === 1) {
      document.getElementById('weeks').textContent = '';
      document.getElementById('weeks-title-end').textContent = 'Tomorrow';
      document.getElementById('weeks-title-end').style.fontWeight = '700';
      document.getElementById('weeks-title-start').textContent = '';
    }

    if (d === 0) {
      document.getElementById('weeks').textContent = '';
      document.getElementById('weeks-title-end').textContent = 'Today';
      document.getElementById('weeks-title-end').style.fontWeight = '700';
      document.getElementById('weeks-title-start').textContent = '';
    }

    if (mo <= 1) {
      document.getElementById('months-title-end').textContent = ' Month';
    }

    if (d === 1) {
      document.getElementById('months').textContent = '';
      document.getElementById('months-title-end').textContent = '';
      document.getElementById('months-title-end').style.fontWeight = '700';
      document.getElementById('months-title-start').textContent = '';
    }

    if (d === 0) {
      document.getElementById('months').textContent = '';
      document.getElementById('months-title-end').textContent = '';
      document.getElementById('months-title-end').style.fontWeight = '700';
      document.getElementById('months-title-start').textContent = '';
    }

    if (y <= 1) {
      document.getElementById('years-title-end').textContent = ' Year';
    }

    if (d === 1) {
      document.getElementById('years').textContent = '';
      document.getElementById('years-title-end').textContent = '';
      document.getElementById('years-title-end').style.fontWeight = '700';
      document.getElementById('years-title-start').textContent = '';
    }

    if (d === 0) {
      document.getElementById('years').textContent = '';
      document.getElementById('years-title-end').textContent = '';
      document.getElementById('years-title-end').style.fontWeight = '700';
      document.getElementById('years-title-start').textContent = '';
    }
    
    }, 1000);

  } else {

    setTimeout(function() {

    document.getElementById('active').innerHTML = `<a target="_blank" href="https://store.steampowered.com/">${title.name} Sale</a>`;
    document.getElementById('active-status').textContent = `Starts in:`;
    document.getElementById('active-status').style.color = '#70af85';

    }, 1000);

    var now = new Date().getTime();

    date = dateStart;

    var diff = date - now;
  
    var s = Math.floor(diff / 1000);
    var m =  Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    var w = d / 7;
    var mo = (w / 4.34524).toFixed(1);
    var y = (mo / 12).toFixed(1);
  
    h %= 24;
    m %= 60;
    s %= 60;
  
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    w = (w < 1) ? w.toFixed(1) : Math.floor(w);

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    setTimeout(function() {

    document.getElementById('date').textContent = date.toLocaleDateString(undefined, options);
    document.getElementById('date-hours').textContent = '10AM Pacific Time';
  
    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
    document.getElementById('weeks').textContent = w;
    document.getElementById('months').textContent = mo;
    document.getElementById('years').textContent = y;

    if (w <= 1) {
      document.getElementById('weeks-title-end').textContent = ' Week';
    }

    if (d === 1) {
      document.getElementById('weeks').textContent = '';
      document.getElementById('weeks-title-end').textContent = 'Tomorrow';
      document.getElementById('weeks-title-end').style.fontWeight = '700';
      document.getElementById('weeks-title-start').textContent = '';
    }

    if (d === 0) {
      document.getElementById('weeks').textContent = '';
      document.getElementById('weeks-title-end').textContent = 'Today';
      document.getElementById('weeks-title-end').style.fontWeight = '700';
      document.getElementById('weeks-title-start').textContent = '';
    }

    if (mo <= 1) {
      document.getElementById('months-title-end').textContent = ' Month';
    }

    if (d === 1) {
      document.getElementById('months').textContent = '';
      document.getElementById('months-title-end').textContent = '';
      document.getElementById('months-title-end').style.fontWeight = '700';
      document.getElementById('months-title-start').textContent = '';
    }

    if (d === 0) {
      document.getElementById('months').textContent = '';
      document.getElementById('months-title-end').textContent = '';
      document.getElementById('months-title-end').style.fontWeight = '700';
      document.getElementById('months-title-start').textContent = '';
    }

    if (y <= 1) {
      document.getElementById('years-title-end').textContent = ' Year';
    }

    if (d === 1) {
      document.getElementById('years').textContent = '';
      document.getElementById('years-title-end').textContent = '';
      document.getElementById('years-title-end').style.fontWeight = '700';
      document.getElementById('years-title-start').textContent = '';
    }

    if (d === 0) {
      document.getElementById('years').textContent = '';
      document.getElementById('years-title-end').textContent = '';
      document.getElementById('years-title-end').style.fontWeight = '700';
      document.getElementById('years-title-start').textContent = '';
    }

    }, 1000);

  }

}, 1000)