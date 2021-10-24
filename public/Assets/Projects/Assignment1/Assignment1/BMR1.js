function bmr1() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("metricHeight").value;
    var Weight = document.getElementById("metricWeight").value;
    var Gender = document.getElementById("Gender").value;

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");
    var activityLevel4 = document.getElementById("activityLevel4");
    var activityLevel5 = document.getElementById("activityLevel5");
    (activityLevel1.checked) ? (calories += 1.2) : (calories += 0);
    (activityLevel2.checked) ? (calories += 1.375) : (calories += 0);
    (activityLevel3.checked) ? (calories += 1.55) : (calories += 0);
    (activityLevel4.checked) ? (calories += 1.725) : (calories += 0);
    (activityLevel5.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age ) : bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age ) : bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age);
    GrandCalories = bmr + calories;
    var result = "Your BMR is " + bmr + "\n" +
        "Daily calorie intake is " + GrandCalories;
    alert(result);
}
document.getElementById("submit").addEventListener("click", bmr1, false);

function bmr2() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");
    var activityLevel4 = document.getElementById("activityLevel4");
    var activityLevel5 = document.getElementById("activityLevel5");
    (activityLevel1.checked) ? (calories += 1.2) : (calories += 0);
    (activityLevel2.checked) ? (calories += 1.375) : (calories += 0);
    (activityLevel3.checked) ? (calories += 1.55) : (calories += 0);
    (activityLevel4.checked) ? (calories += 1.725) : (calories += 0);
    (activityLevel5.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
    (Gender == "Female") ? bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);
    GrandCalories = bmr + calories;
    var result = "Your BMR is " + bmr + "\n" +
        "Daily calorie intake is " + GrandCalories;
    alert(result);
}
document.getElementById("submit").addEventListener("click", bmr2, false);

