// code your solution here
function saturdayFun(event="roller-skate"){
    return(`This Saturday, I want to ${event}!`);
}


function mondayWork(eventName="go to the office"){
    return (`This Monday, I will ${eventName}.`);
}



function wrapAdjective(flair="*"){
    return function(level="a hard worker"){
        return `You are ${flair}${level}${flair}!`
    }
}