var now = new Date();
var nextYear = now.getFullYear() + 1;
var newYear = new Date(nextYear, 0, 2, 0, 0, 0);


var difference = Math.floor((newYear.getTime() - now.getTime()) / 1000);

ans = "До Нового Года осталось: ";

days = Math.floor(difference / (60 * 60 * 24));
difference %= 60 * 60 * 24;
hours = Math.floor(difference / 3600);
difference %= 3600;
minutes = Math.floor(difference / 60);
seconds = difference % 60;

ans += days;
switch (days % 10) {
    case 1: {
        ans += " день ";
        break;
    }
    case 2:
    case 3:
    case 4: {
        ans += " дня ";
        break;
    }
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0: {
        ans += " дней ";
        break;
    }
}



ans += hours;
switch (hours % 10) {
    case 1: {
        ans += " час ";
        break;
    }
    case 2:
    case 3:
    case 4: {
        ans += " часа ";
        break;
    }
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0: {
        ans += " часов ";
        break;
    }
}



ans += minutes;
switch (minutes % 10) {
    case 1: {
        ans += " минута ";
        break;
    }
    case 2:
    case 3:
    case 4: {
        ans += " минуты ";
        break;
    }
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0: {
        ans += " минут ";
        break;
    }
}


ans += seconds;
switch (seconds % 10) {
    case 1: {
        ans += " секунда.";
        break;
    }
    case 2:
    case 3:
    case 4: {
        ans += " секунды.";
        break;
    }
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0: {
        ans += " секунд.";
        break;
    }
}

console.log(ans);
