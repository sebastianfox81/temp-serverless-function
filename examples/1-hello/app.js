const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/1-hello')
    result.textContent = data
  } catch (error) {
    console.log(error.response)
  }
  console.log('fetch data called')
}

fetchData()