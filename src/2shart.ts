
import axios from "axios";

const baseURL = "https://picsum.photos/v2/list?page=2&limit=50";

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

function addImageToPhotoList(url: string) {
  const imgdivList: NodeListOf<HTMLDataElement> = document.querySelectorAll(".imgdiv");

  imgdivList.forEach((imgdiv) => {
    if (!imgdiv.querySelector("img")) {
      let newImg = document.createElement("img");

      newImg.src = url;
      imgdiv.appendChild(newImg);
    }
  });
}

function imgApi(a: any) {
  const photoList = document.querySelector("div.photo-list");

  for (let i = 0; i < 4; i++) {
    let img: HTMLImageElement = document.createElement("img");
    let random = Math.floor(Math.random() * 50);
    img.src = a.data[random].download_url;
    console.log(random);

    console.log((img.id = i.toString()));

    if (imgdiv[i].querySelector("img")) {
      loader[i].remove();
      continue;
    }

    imgdiv[i].innerHTML = "";
    imgdiv[i].appendChild(img);

    loader[i].remove();

    addImageToPhotoList(img.src);
  }

  console.log(a.data);
}



let i = 0;
let taim = setTimeout(function updateDisplay() {
    if (i < 3) {
        i++;
        taim = setTimeout(updateDisplay, 1000);
    } else {
searchVideos();
    }
}, 1000);
