function isPassed(marks){
    return marks >=35 && marks <= 100
}
function getResult(marks){ 
    var result = isPassed(marks) ? "passed" : "failed";

    if (marks>=35){
     results = "passed"
    }
    else {
        result = "failed";
    }

    console.log(result);
    return result;
 }

 getResult(53);
 getResult(34);
 getResult(76);
