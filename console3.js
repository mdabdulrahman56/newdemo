// switch case
// if else if -switch
var marks = 50;
switch (marks){
    case 90:
    case 80:
    case 70:
        console.log("distinction");
        break;// fall through
    case 60:
        console.log("first division");
        break;
    case 50:
        console.log ("second division");
        break;
    case 40:
        console.log("third divison");
        break;
    default:
        console.log("fail");
        break;
}