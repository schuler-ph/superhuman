export default defineEventHandler(async (event) => {

  // query parameter
  const { name } = getQuery(event)

  // post request body
  const { age } = await readBody(event)

  return {
    message: `Hello, ${name}! You are ${age} years old.`
  }
})