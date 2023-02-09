// External content
import React, { ChangeEvent, FormEvent, ReactElement, SetStateAction } from "react";

interface Props {
  artist: string,
  gender: string,
  title: string,
  setArtist: React.Dispatch<SetStateAction<string>>,
  setGender: React.Dispatch<SetStateAction<string>>,
  setTitle: React.Dispatch<SetStateAction<string>>,
  submit: ({ artist, gender, title }: { artist: string, gender: string, title: string }) => void;
}

const Form = ({ 
  artist, setArtist,
  gender, setGender,
  title, setTitle,
  submit }: Props):ReactElement => {

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();

    submit({ artist, gender, title });
  };

  return (
    <form className="max-w-[1200px] mx-auto bg-gray-200 dark:bg-dark-200 p-4 rounded-lg shadow-sm" onSubmit={handleSubmit}>
      <div className="flex justify-between gap-4">

        <div className="w-1/2 flex flex-col items-start mb-4">
          <label htmlFor="artist" className="font-bold text-xl mb-2 dark:text-gray-200" >Artist:</label>
          <input type="text" className="w-full rounded-lg outline-none shadow-sm dark:border dark:border-gray-200 dark:bg-dark-200 py-1 px-4 dark:text-gray-200" value={artist} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setArtist(e.target.value)}/>
        </div>

        <div className="w-1/2 flex flex-col items-start mb-4">
          <label htmlFor="gender" className="font-bold text-xl mb-2 dark:text-gray-200" >Gender:</label>
          <input type="text" className="w-full rounded-lg outline-none shadow-sm dark:border dark:border-gray-200 dark:bg-dark-200 py-1 px-4 dark:text-gray-200"  value={gender} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setGender(e.target.value)}/>
        </div>

      </div>

      <div className="w-full flex flex-col items-start mb-4">
        <label htmlFor="title" className="font-bold text-xl mb-2 dark:text-gray-200" >Title:</label>
        <input type="text" className="w-full rounded-lg outline-none shadow-sm dark:border dark:border-gray-200 dark:bg-dark-200 py-1 px-4 dark:text-gray-200"  value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
      </div>

      <div className="w-full flex justify-center items-center">
        <button type="submit" className="w-full max-w-[300px] py-2 rounded-lg bg-cyber-300 hover:bg-cyber-100 dark:bg-cyber-500 dark:hover:bg-cyber-300 duration-150 text-gray-200 font-bold shadow-sm mt-2">Submit</button>
      </div>
    </form>
  );
};

export default Form;