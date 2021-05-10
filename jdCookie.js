/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pin=18369331210_p;wq_uin=15298680885;buy_uin=15298680885;jdpin=18369331210_p;s_pin=18369331210_p;s_key=AAJgkhsKADBSZU0KdNOV4UDND-S2Zfokjj_6kWA8lhTNMPR_sAt3mr53ODfaZu96yDfR4OcFmu4;lang=chs;TrackerID=opFN0xCmup5kU0Zw_fhOOUdpTkUJOuqDKh5gbNZHU_6ee0GbXgaZiiLj53JJ8Bz15-ZvmfW9wVecrEVZ_J0-GYOnPs-1iOQpCwgrp1EzvZ4;okl_token=7z93f8aa;lstoken=99pvuv48;retina=0;cid=9;webp=0;sc_width=1536;__wga=1620614966828.1620614966828.1620611364795.1611853216409.1.444;__jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1611853216415;__jda=122270672.1611853216427853284976.1611853216.1620611364.1620614966.2917;mba_muid=1611853216427853284976.4.1620616040280;visitkey=47621679867203474;jxsid=16118532157402396012;wq_area=13_1072_52023%7C1;equipmentId=2E34MKANVT3IVYYD3FH44ZXMSOSKGTPMDY5BKHVI26W5LWVOFD5SW4W5BF4C5JBIVCWIC4YQ5ZQFK2BTS562UKOZ5I;fingerprint=59b21f803f674baf367cf8595dcd3178;deviceVersion=0;deviceOS=ios;deviceOSVersion=13.2;deviceName=JDAPP;mobilev=wap;__jdu=1611853216427853284976;TrackID=1tUMQDw5ofkrPFW-i401VcFFhYJ9IKv3KbhOQarMVcWEJx2Dg6ZWrRMOTpusJs6Lf1yui2pp7NZINOz5MHRy57w;pinId=FCujMAN2CHOpCSfPvgS-Fg;unick=-%E9%BB%91%E6%B6%A9%E4%BC%9A;_tp=AwbaQ1Um5w4j3Yp8GMiOOQ%3D%3D;_pst=18369331210_p;areaId=17;ipLoc-djd=17-1381-50713-0;alc=yXycnQUjUZI3/hS+hgrR2g==;m6446hnus21x8ku7en71615102170352g4sw=770;_s_id=m6446hnus21x8ku7en71615102170352g4sw;_t=Vz9CnAZ9fcBPYzRgnNqJQJ1O4BzE+N2KIGG6/bFmN3M=;wlfstk_smdl=yx8vswdq7fhf41cr062rb4or3xd1yh3w;_t=kJd7a7CgfUImEXrff4NeRHy2CBzUWsrJhE//Uz4+gqs=;DeviceSeq=ef12586bdf5e4ea38da811a5a3e6cfc4;alc=7K2RBh8jeTl22XeGPI+NYw==;PPRD_P=UUID.1611853216427853284976;rurl=https%3A%2F%2Fwqs.jd.com%2Fpromote%2F201801%2Fbean%2Findex.html;3AB9D23F7A4B3C9B=2E34MKANVT3IVYYD3FH44ZXMSOSKGTPMDY5BKHVI26W5LWVOFD5SW4W5BF4C5JBIVCWIC4YQ5ZQFK2BTS562UKOZ5I;wq_skey=zm8740C1446D6FF7E3967E557B98835C2B3066084C70305EA205393D3546EF7539AC644D63FB50FB8A85D2ADCF83CC316E68C987006CECD137CCC1100E9F5DDA3F17A4F0D38D9B5132AB2A295E1DDB8CBD;pt_key=AAJgkhsKADDtlKNOiMXQBl4e1C4FKD-5mP-U8jNaEEM5eu8s-HdHAm4bbG-NovqAGfek0g9CUHo;pwdt_id=18369331210_p;pt_pin=18369331210_p;pt_token=dvq8ova3;wxa_level=1;jxsid_s_t=1620614966916;jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action;wqmnx1=MDEyNjM1NHNvLm9Kdy5vZWw0Njc3aTVpZVVvUzFpYSBwZS8xKExrY1ZvLk1lM2EvMTNZZGY0M1ZSREZIJlI%3D;mba_sid=4.7;__jdb=122270672.109.1611853216427853284976|2917.1620614966;shshshsID=e654773dc2791efe875f577139438003_109_1620616039923;__jdc=122270672;refer_v=real-url;currenttime=1620616040.497;pre_session=ccdd58f168fbbb6a7fa447e43962c97d95c73bb8|5;pre_seq=5;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
