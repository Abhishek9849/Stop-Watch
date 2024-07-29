
let hr = 0
let min = 0
let sec = 0
let ms = 0



let timer = false
let counter = 0



start = () =>{
    timer = true
    stopWatch()

}

stop = () =>{
    timer = false
    
}

reset = () =>{
    timer = false
    hr = 0
    min = 0
    sec = 0
    ms = 0

    document.getElementById("sec").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("ms").innerHTML = "00"
    
}


stopWatch = () =>{
    if(timer == true){

        if(counter == 100){
            sec = sec + 1
            counter = 0
            document.getElementById("sec").innerHTML = sec
        }
        
        if(sec == 60){
            min = min +1 
            sec = 0
            document.getElementById("min").innerHTML = min
        }

        if(min == 60){
            hr = hr +1 
            min = 0
            document.getElementById("hr").innerHTML = hr
        }


        let hrstr = hr
        let minstr = min
        let secstr = sec
        let msstr = counter

        if(hr < 10){
            hrstr = "0" + hrstr
        }
        if(min < 10){
            minstr = "0" + minstr
        }
        if(sec < 10){
            secstr = "0" + secstr
        }
        if(counter < 10){
            msstr = "0" + msstr
        }




        counter = counter + 1
        document.getElementById("ms").innerHTML = msstr
        document.getElementById("sec").innerHTML = secstr
        document.getElementById("min").innerHTML = minstr

        setTimeout("stopWatch()",10)
    }

}