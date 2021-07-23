import { useCallback, useEffect, useState } from "react";
import { Container } from "./style";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/api";
import { Header } from "../../components/Header";
// import { Footer } from "../../components/Footer";
import { Button } from "@material-ui/core";
import imgNova from "../../assets/images/noimage.jpg";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  resourceURI: string;
  results: [];

  thumbnail: {
    path: string;
    extension: string;
  };

  descriptionText: string;
}

type RoomParams = {
  id: string;
};

export default function CharDetail() {
  const history = useHistory();
  const [characters, setCharacters] = useState<ResponseData>();
  const [render, setRender] = useState(true);
  // const [image, setImage] = useState("");
  // const [extension, setExtension] = useState("");

  // console.log(characters);

  const params = useParams<RoomParams>();
  const characterId = params.id;

  function handleClick() {
    history.push("/");
  }

  const load = useCallback(async () => {
    try {
      if (render) {
        const response = await api.get(`characters/${characterId}`);
        setCharacters(response.data.data.results[0]);
        console.log(response);
        setRender(false);
      }

      // setImage(response.data.data.results[0].thumbnail.path);
      // setExtension(response.data.data.results[0].thumbnail.extension);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // function handleDescription() {
  //   let descriptionText: string | undefined = "";

  //   if (characters?.description === "") {
  //     descriptionText = "No description provided";
  //   } else {
  //     descriptionText = characters?.description;
  //     console.log(descriptionText);
  //   }
  //   return descriptionText;
  // }
  useEffect(() => {
    load();

    // setImage(
    //   characters[0].thumbnail.thumbnail + "." + characters[0].thumbnail.extension
    // );
  }, [load]);

  return (
    <>
      <Header />

      <Container>
        <img
          alt="Characters"
          src={
            characters?.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? `${imgNova}`
              : `${characters?.thumbnail.path}.${characters?.thumbnail.extension}`
          }
        />
        <aside className="text">
          <h2>{characters?.name}</h2>
          <p>
            {characters?.description === ""
              ? "No description provided"
              : characters?.description}
          </p>
          <a href={characters?.resourceURI}> More Info </a>
        </aside>
      </Container>
      <Button onClick={handleClick}> BACK </Button>
    </>
  );
}
