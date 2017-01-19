import AppDispatcher from './AppDispatcher';
import axios from 'axios';

const API = {
  getAll(){
    axios.get('/api/articles')
      .then(res => {
        AppDispatcher.dispatch({
          type: 'ALL_ARTICLES',
          res.data
        })
      })
      .catch(err => console.log(err))
  },
  getOne(id){
    axios.get(`/api/articles/${id}`)
      .then(res => {
        AppDispatcher.dispatch({
          type: 'SELECT_ARTICLE',
          res.data
        })
      })
  }
}

export default API;
