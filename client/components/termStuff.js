import api from './API'

const getDefinition = (e, input, updateLoading, showResults) => {
  e.preventDefault()
  const url = `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${input}`
  updateLoading(true)
  api.getDefinition(url, showResults)
}

export {
  getDefinition
}
