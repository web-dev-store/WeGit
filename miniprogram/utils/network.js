const HOST_URL = 'https://github.lingyikz.cn'
const requestHandler = {
  success: function (res) { },
  fail: function (res) { },
}

function requestGet(url, requestHandler, data) {
  requestget(url, requestHandler, data);
}

function requestget(url, requestHandler, data) {
  wx.request({
    url: HOST_URL + url,
    data: data,
    method: 'GET',
    header: { 'content-type': 'application/json' },
    success: function (res) {
      wx.hideLoading()
      if (res.statusCode == 200) {
        requestHandler.success(res.data)
      } else if (res.statusCode == 404) {

      } else if (res.statusCode == 500) {

      }
    },
    fail: function (res) {

    },
    complete: function () { },
  })
}

module.exports = {
  requestGet: requestGet
}