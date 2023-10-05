"use strict";

window.addEventListener("load", function(){
    showFields.addEventListener("click", CreateFields);
    processTips.addEventListener("click", CalculateTip);
    processTips.addEventListener("click", checkTips);
});

// generate the fields based on the number of employees entered by the user
function CreateFields() {
    
    //disables the button after it is clicked
    document.getElementById("showFields").disabled = true;
    
    var numOfEmployees = document.getElementById("numEmployees").value;
    var form = document.createElement("form");
    form.setAttribute("name", "tipForm");
    form.setAttribute("method", "post");

    for (var i = 0; i < numOfEmployees; i++) {

        var fieldElem = document.createElement("fieldset");
        fieldElem.setAttribute("id", "e" + i);
        var legendElem = document.createElement("legend");
        var labelElem = document.createElement("label");
        labelElem.setAttribute("for", "eName");
        var hoursWorkedLabel = document.createElement("label");
        hoursWorkedLabel.setAttribute("for", "eHours");
        var tipOutLabel = document.createElement("label");
        tipOutLabel.setAttribute("for", "tipOut");
        var hoursWorkedInputElem = document.createElement("input");
        hoursWorkedInputElem.setAttribute("type", "text");
        hoursWorkedInputElem.setAttribute("class", "hours");
        var tipOutInput = document.createElement("input");
        tipOutInput.setAttribute("type", "text");
        tipOutInput.setAttribute("class", "tipOut");
        tipOutInput.setAttribute("name", "tipOut");
        tipOutInput.setAttribute("readonly", true);
        var eLabelName = document.createTextNode("Name: ");
        var eLabelHours = document.createTextNode("Hours Worked Today: ");
        var eTip = document.createTextNode("Calculated Tip: ");
        labelElem.appendChild(eLabelName);
        hoursWorkedLabel.appendChild(eLabelHours);
        tipOutLabel.appendChild(eTip);
        var inputElem = document.createElement("input");
        inputElem.setAttribute("type", "text");
        inputElem.setAttribute("id", "eName");
        var textElem = document.createTextNode("Employee" + " " + (i + 1));
        
        legendElem.appendChild(textElem);
        fieldElem.appendChild(legendElem);
        fieldElem.appendChild(labelElem);
        fieldElem.appendChild(inputElem);
        fieldElem.appendChild(hoursWorkedLabel);
        fieldElem.appendChild(hoursWorkedInputElem);
        fieldElem.appendChild(tipOutLabel);
        fieldElem.appendChild(tipOutInput);
        form.appendChild(fieldElem);
        //document.body.appendChild(form);
        var footerElem = document.getElementById("footer");
        document.body.insertBefore(form, footerElem); 
        
    }
}    

//write a function to calculate the tips for each person
//takes the total number of hours worked by each person
//take the total tips divided by the total hours worked
//multiply individual hours by the new calculation
//display the amount in the calculated tip box


function CalculateTip() {
    
  var eHoursList = document.querySelectorAll("input.hours");
  var eTipOutList = document.querySelectorAll("input.tipOut");
  var totalTips = document.getElementById("sales").value;
  var addedHours = 0;
  var tip = 0;
  
  for (var i = 0; i < eHoursList.length; i++) {
    addedHours += parseFloat(eHoursList[i].value);
    
  }

  var eTipOut = parseFloat(totalTips / addedHours);
  //display the amount in the calculated tip box
  for (var i = 0; i < eHoursList.length; i++) {
      tip = eHoursList[i].value * eTipOut;
      eTipOutList[i].value = tip.toFixed(2);
  }
}

//get the tips from each of the employees and add them all together
//check to see if the value is the same as the total tips

function checkTips() {
  
  var eTotalTips = document.querySelectorAll("input.tipOut");
  var checkTip = 0;
  var footerElem = document.getElementById("footer");

  for (var i = 0; i < eTotalTips.length; i++) {
    checkTip += parseFloat(eTotalTips[i].value);
  }

  //create an input display box to show the checked tip value
  var checkTipLabel = document.createElement("label");
  checkTipLabel.setAttribute("for", "checkTip");
  var checkTipText = document.createTextNode("Value after adding employee tips together: ");
  checkTipLabel.appendChild(checkTipText);
  
  var checkTipBox = document.createElement("input");
  checkTipBox.setAttribute("name", "checkTip");
  checkTipBox.setAttribute("id", "checkTip");
  checkTipBox.setAttribute("readonly", true);
  document.body.insertBefore(checkTipLabel, footerElem);
  document.body.insertBefore(checkTipBox, footerElem);

  document.getElementById("checkTip").value = checkTip;
 
}
