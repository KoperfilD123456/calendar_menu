const month_list = document.getElementsByClassName("calendar_list")

// Тут определяется месяц

let today = new Date();
let now_month = today.getMonth();
const month_date = new Map();
month_date.set("0","january").set("1","february").set("2","march").set("3","april").set("4","may").set("5","june").set("6","july").set("7","august").set("8","september").set("9","october").set("10","november").set("11","december")
const month_today= month_date.get(String(now_month));

const date_month = document.getElementsByClassName(month_today)
date_month[0].classList.add("selected")


// Логика выбора

month_list[0].addEventListener("click",function () {
     if (event.target.classList.contains("nonselected")) {
        const selected_month = document.querySelector(".selected")
        event.target.classList.toggle("selected")
        selected_month.classList.toggle("selected")
        const target_month_id = (event.target.classList[1]); 
        const selected_month_befor_id = (selected_month.classList[1])
        const none_month_table = document.getElementById(target_month_id)
        const selected_month_table = document.getElementById(selected_month_befor_id)
        none_month_table.style.display = "table"
        selected_month_table.style.display = "none"


    }
})


// Адаптив под mob

// if (window.innerWidth =< 830) {
//     month_list[0].addEventListener()
// }     
// }



