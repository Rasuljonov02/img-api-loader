import axios from "axios";

const baseURL = "https://picsum.photos/v2/list?page=2&limit=130";

async function searchVideos() {
  try {
    const response = await axios.get(`${baseURL}`);
    imgApi(response);
  } catch (error) {
    console.error(error);
  }
}

const imgdiv: NodeListOf<HTMLDataElement> = document.querySelectorAll(".imgdiv")!;
const loader: NodeListOf<HTMLDataElement> = document.querySelectorAll(".loader")!;

function imgApi(a: any) {
  for (let i = 0; i < 4; i++) {
    let img: HTMLImageElement = document.createElement("img");
    let random = Math.floor(Math.random() * 130);
    img.src = a.data[random].download_url;
    console.log(random);

    console.log((img.id = i.toString()));

    if (imgdiv[i].querySelector("img")) {
      loader[i].classList.add("naull") ;
      continue;
    }

    imgdiv[i].innerHTML = "";
    imgdiv[i].appendChild(img);

    loader[i].classList.add("naull") ;
  }

  console.log(a.data);
}

let i = 0;
let maxIterations = 4;

function updateDisplay() {
  if (i < maxIterations) {
    i++;
    setTimeout(updateDisplay, 1000);
  } else {
    searchVideos();
  }
}
// searchVideos();
updateDisplay();
