// Datas e Horas
var d;
var x = new Date();
var y = new Date(2016, 01, 10, 17, 30, 12);

d = new Date();
d = x - y;
d = x.getFullYear();
d = x.getMonth();
d = x.getDate();
d = x.getDay();
d = x.getHours();
d = x.getUTCHours();
d = x.toString();
d = x.toUTCString();
d = x.toLocaleDateString();
d = x.toLocaleTimeString();
d = x.toISOString();

console.log(d);