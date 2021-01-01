import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rJ8i24ydh3UTO1-06A5Hu7teXhYvEJKd0q9tjN9Svrlx0lZMYFF-xK8HhggY4MGsNelAGgOFs3vfH0shuFONMOA2KSPjcw89rZTHwwlScT4mLe_N1jZDa_shnP_lX3Yx'
    }
})