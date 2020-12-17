import axios from 'axios'

axios.defaults.baseURL = 'https://wedevsback.rashedulhasan.com/api';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');