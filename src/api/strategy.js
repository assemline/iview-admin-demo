import axios2 from '@/libs/test.api.request'

export const getCategory = () => {
  return axios2.request({
    url: 'variableCategory/listVariableCategory',
    method: 'post'
  })
}
