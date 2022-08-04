import { request } from './request'

const {
  VUE_APP_BASE_URL: baseUrl
} = process.env

export const getPeopleById = async (id) => {
  console.log(1)
  return await request(`${baseUrl}people/${id}`)
}

// module.exports = {
//   getPeopleById,
// }

// export default () => {
//   getPeopleById
// }
