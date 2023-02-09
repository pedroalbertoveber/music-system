import React, { ReactElement, useState} from "react";
import uuid from "react-uuid";

// Components
import Form from "./components/Form"
import Header from "./components/Header"
import Playlist from "./components/Playlist";
import { Music } from "./types";

const App =():ReactElement => {

  const [artist, setArtist] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [playlist, setPlaylist] = useState<Music[]>([]);

  interface Props {
    artist: string,
    gender: string,
    title: string
  }

  const addMusic = ({ artist, gender, title }: Props ):void => {
    const newMusic:Music = {
      id: uuid(),
      artist,
      gender,
      title,
    };
    
    setPlaylist([...playlist, newMusic]);

    setArtist('');
    setGender('');
    setTitle('');
  };

  const deleteMusic = (id: string) => {
    setPlaylist(playlist => playlist.filter(music => {
      return music.id !== id;
    }));
  };

  return (
    <>
      <Header />

      <Form 
        artist={artist} 
        gender={gender} 
        title={title}
        setArtist={setArtist} 
        setGender={setGender} 
        setTitle={setTitle}
        submit={addMusic}
      />

      <Playlist playlist={playlist} deleteMusic={deleteMusic}/>
    </>
  )
}

export default App
