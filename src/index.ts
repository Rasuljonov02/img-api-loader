
const button:HTMLButtonElement = document.querySelector("button")!;
const boxAll:HTMLDivElement = document.querySelector(".boxAll")!
const firstLoading:NodeListOf<HTMLDivElement> = document.querySelectorAll(".loading")!;
const imgs:NodeListOf<HTMLImageElement> = document.querySelectorAll(".imageCity")!

let loadingArray:number[] = []
let counter:number = 0
let lastLoading:any[] = []
let lastCityImage:any[] = []
let tekshir:boolean = false

button.addEventListener("click",function() {result()})

function fnLoading():void {
    for (let i = 0; i < firstLoading.length; i++) {
        let random:number = Math.ceil(Math.random() * 2+2)
        loadingArray.push(random)
        firstLoading[i].style.animationDuration = `${random}s`
    }
}
fnLoading()

let time:any = setInterval(function():void {
    counter++
    loadingStop()

    console.log(counter);
    if (counter === 4) {
        clearInterval(time)
    }
}, 1000);



function loadingStop():void {
    for (let i = 0; i < loadingArray.length; i++) {
        if (loadingArray[i] == counter) {
            console.log(lastCityImage[i]);
            if (lastCityImage.length <= 0) {
                imgs[i].style.opacity = "1"
                firstLoading[i].style.display = "none"
            }

            if (tekshir) {
                lastLoading[i].style.display = "none"
                lastCityImage[i].style.opacity = "1"
            }

            if (counter === 4) {
                clearInterval(time)
            }
        }

    }
}


function result():void {

    if (counter >= 4) {
        console.log(counter);

        counter = 0
        if (counter <= 0) {
            tekshir = true
            let time:any = setInterval(function():void {
                counter++
                loadingStop()

                console.log(counter);
                if (counter === 4) {
                    clearInterval(time)
                }
            }, 1000);
        }
    }
    let section:HTMLElement = document.createElement("section")

    let boxAll:HTMLDivElement = document.createElement("div")
    boxAll.classList.add("boxAll")

    for (let i = 0; i < 8; i++) {
        let loading:HTMLImageElement = document.createElement("img")
        lastLoading.push(loading)
        loading.classList.add("loading")
        loading.src = "loading (1).png"
        loading.style.animationDuration = `${loadingRandom()}s`
        let img:HTMLImageElement = document.createElement("img")
        let box:HTMLDivElement = document.createElement("div")
        img.src = `${randomImg()}`
        lastCityImage.push(img)
        box.appendChild(loading)
        box.appendChild(img)
        boxAll.appendChild(box)
    }
    section.appendChild(boxAll)
    document.body.appendChild(section)

    console.log(boxAll);

}

function randomImg():string {
    let img:string[] = [
    "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3859774/pexels-photo-3859774.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1121782/pexels-photo-1121782.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"]

    let random = Math.ceil(Math.random() * 7)
    console.log(random);

    return img[random]
}

function loadingRandom():number {
    let random = Math.ceil(Math.random() * 2+2)
    loadingArray.push(random)
    return random
}