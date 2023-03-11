export default defineEventHandler(async (event) => {
  const { code }: any = event.context.params
  const { currencyKey }: any = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

  const { data }: any = await $fetch(uri)

  return data
})