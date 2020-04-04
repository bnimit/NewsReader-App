export const mapTime = timeStamp => {
  var dt = new Date(timeStamp * 1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  var s = "0" + dt.getSeconds();
  return hr + ":" + m.substr(-2) + ":" + s.substr(-2);
};
