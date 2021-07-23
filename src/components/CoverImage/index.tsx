import imgBkg from "../../assets/images/backgroundPrincipal.jpg";

import { CoverImageContainerBG, Image } from "./style";

export function CoverImage() {
  return (
    <>
      <CoverImageContainerBG>
        <Image></Image>
        {/* <img src={imgBkg} alt="" /> */}
        <h1> MARVEL CATALOG API</h1>
        <h2>Browse through more than 1000 Marvel Characters!</h2>
      </CoverImageContainerBG>
    </>
  );
}
