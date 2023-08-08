

fetch("data.json")
    .then(r => r.json())
    .then(data => {
        let recurrence = document.querySelectorAll(".user ul li"),
            active = document.querySelector(".active"),
            time = document.querySelectorAll(".time"),
            previous = document.querySelectorAll(".previous");
        for (let i in data) {
            switch (active.textContent) {
                case "Daily":
                    time[i].textContent = `${data[i].timeframes.daily.current}hrs`;
                    previous[i].textContent = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
                    break;
                case "Weekly":
                    time[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
                    previous[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
                    break;
                default:
                    time[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
                    previous[i].textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
                    break;
            }
        }
        recurrence.forEach(a => {
            a.addEventListener("click", function(e) {
                recurrence.forEach(x => x.classList.remove("active"));
                this.classList.add("active");
                active = document.querySelector(".active");
                for (let i in data) {
                    switch (active.textContent) {
                        case "Daily":
                            time[i].textContent = `${data[i].timeframes.daily.current}hrs`;
                            previous[i].textContent = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
                            break;
                        case "Weekly":
                            time[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
                            previous[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
                            break;
                        default:
                            time[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
                            previous[i].textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
                            break;
                    }
                }
            });
        });
        
    });