export default defineEventHandler(async (event) => {
  // api call with private key
  const data = await $fetch(`https://api.currencyapi.com/v3/
  latest?apikey=i0aLeZfU2tr4WgJip9ajpG2DuuVOa6nwRGlD3pCT&currencies=EUR%2CUSD%2CCAD`)

  return data
})