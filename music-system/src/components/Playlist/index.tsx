import React, { ReactElement } from "react";
import { Music } from "../../types";

import { SpeakerWaveIcon, TrashIcon } from "@heroicons/react/24/solid"

interface Props {
  playlist: Music[],
  deleteMusic: (id: string) => void;
}

const Playlist = ({ playlist, deleteMusic }: Props):ReactElement => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-4 flex flex-wrap gap-x-6 gap-y-2">
      {playlist.length === 0 && (
        <p className="text-lg font-bold mt-2 dark:text-gray-200">It seems that you don't have any music in your playlist :(</p>
      )}

      {playlist.length !== 0 && (
        <>
          {playlist.map(music => (
            <div key={music.id} className="p-2 rounded-lg dark:bg-dark-200 dark:text-gray-200 lg:w-[49%] w-full mb-4 flex justify-between items-center shadow-md">
              <div className="flex justify-center">
                <SpeakerWaveIcon className="w-4 ml-2 dark:fill-gray-200 fill-cyber-300"/>
              </div>
              <div className="w-4/5">
                <p><strong>{music.artist}</strong> - {music.title}</p>
                <p>Gender: <strong>{music.gender}</strong></p>
              </div>
              <div>
                <TrashIcon className="w-4 mr-2 dark:fill-gray-200 fill-cyber-300 cursor-pointer hover:fill-red-500 dark:hover:fill-red-500 duration-100" onClick={ () => deleteMusic(music.id) }/>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Playlist;