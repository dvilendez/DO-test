export const request = async (url) => {
  const response = await fetch(url)
  return await response.json()
}