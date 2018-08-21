const baseUrl = 'https://douban.uieee.com/v2/movie/';

function fetchApi(url, data, method){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${baseUrl}${url}`,
      method: method,
      data:data,
      header: { 'Content-Type': 'application/xml' },
      success: resolve,
      fail: reject
    })
  })
}

export default function ajax(url, data = {}, method = 'GET') {
  if(method === 'GET'){
    let paramStr = '';
    Object.keys(data).forEach(key=>{
      paramStr += key + '=' + data[key] + '&'
    })
    if (paramStr){
      paramStr = paramStr.substring(0, paramStr.length - 1)
    }
    return fetchApi(url + '?' + paramStr).then(res=>res.data)
  }else{
    return fetchApi(url,data,'POST').then(res => res.data)
  }
}