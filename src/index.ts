import "./main.css";
import axios, { AxiosResponse } from "axios";

const imgdiv: NodeListOf<HTMLDataElement> = document.querySelectorAll(".imgdiv")!;
const loader: NodeListOf<HTMLDataElement> = document.querySelectorAll(".loader")!;
const baseURL = "https://picsum.photos/v2/list?page=2&limit=50";

async function searchVideos() {
  try {
    const response = await axios.get(`${baseURL}`);
    imgApi(response);
  } catch (error) {
    console.error(error);
  }
}

function imgApi(a: any) {
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 50);
    console.log(random);
    let img: HTMLImageElement = document.createElement("img");
    img.src = a.data[random].download_url;
    imgdiv[i].innerHTML = '';
    imgdiv[i].appendChild(img);
  }

  loader.forEach((aaa) => {
    aaa.remove();
  });

  console.log(a.data);
}

searchVideos();
