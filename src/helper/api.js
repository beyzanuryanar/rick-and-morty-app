import { handleResponse } from "./instance";
const API_ENDPOINT = 'https://rickandmortyapi.com/api';

export function getEpisode(page) {
  const url = `${API_ENDPOINT}/episode/?page=${page}`;
  return fetch(url, { method: 'GET' }).then(handleResponse);
}

export function getCharacters(ids) {
  const url = `${API_ENDPOINT}/character/${ids}`;
  return fetch(url, { method: 'GET' }).then(handleResponse);
}

export function getAllCharacters(page) {
  const url = `${API_ENDPOINT}/character/?page=${page}`;
  return fetch(url, { method: 'GET' }).then(handleResponse);
}

export const getEpisodeCharacters=async (list)=>{
  const data= await Promise.all(list.map((url)=>fetch(url).then(value => value.json())))
    .then((value) => {
      return value
      //json response
    })
    .catch((err) => {
      console.log(err);
    });
  return data
}

export const getCharacterEpisodes=async (list)=>{
  const data= await Promise.all(list.map((url)=>fetch(url).then(value => value.json())))
    .then((value) => {
      return value
      //json response
    })
    .catch((err) => {
      console.log(err);
    });
  return data
}
