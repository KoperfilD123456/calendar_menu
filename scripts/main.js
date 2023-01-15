const month_list = document.getElementsByClassName("calendar_list")
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

// if (window.innerWidth =< 830) {
//     month_list[0].addEventListener()
// }     
// }



