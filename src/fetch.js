require('dotenv').config();

export const base = "https://newsapi.org/v2";
export const API_KEY = process.env.REACT_APP_API_KEY;


export const fetchGetNews  = (source) => 
  fetch(`${base}/top-headlines?sources=${source}&apiKey=${API_KEY}`);

export const fetchGetReactions = () => 
  fetch(` http://localhost:3003/reactions/`);
  
  export const fetchGetBookmarks = () => 
  fetch(`http://localhost:3001/bookmarks`);

export const fetchPostBookmark = ({data}) => 
  fetch(`http://localhost:3001/bookmarks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "title": data.title,
      "url": data.url,
      "key":data.id, 
      "reaction": data.reaction
    }),
  })

export const fetchDeleteBookmarks = (id) => {
  fetch(`http://localhost:3001/bookmarks?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id)
  })
}