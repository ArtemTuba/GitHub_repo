import axios from "axios"

const fetchPopularRepos = (language) => {
  return  axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=desc&type=Repositiries`)
  .then(res => res.data.items)
  .catch(error => {
    throw new Error(error)
  })
}

export default fetchPopularRepos;