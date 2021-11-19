function FindProxyForURL(url, host) {

	var country = "${COUNTRY}"
	
	// If user in China AND visiting Chinese sites
	if (shExpMatch(country,"China") &&
        shExpMatch(host,"*.cn") ||
		shExpMatch(host,"*.maycur.com") ||
		shExpMatch(host,"*.dhrplus.com") ||
		shExpMatch(host,"*.aliyuncs.com") ||
		shExpMatch(host,"*baidu.com") ||
		shExpMatch(host,"*.alicdn.com") ||
		shExpMatch(host,"*.ctrip.com") ||
		shExpMatch(host,"*.c-ctrip.com") ||
		shExpMatch(host,"*.alibaba.com") ||
		shExpMatch(host,"*.xiaojukeji.com") ||
		shExpMatch(host,"*.mxhichina.com") ||
		shExpMatch(host,"*.dingtalk.com") ||
		shExpMatch(host,"*.dingtalkapps.com") ||
		shExpMatch(host,"*.mmstat.com") ||
		shExpMatch(host,"*.qq.com") ||
		shExpMatch(host,"*.aliun.com") ||
		shExpMatch(host,"*.fliggy.com") ||
		shExpMatch(host,"*.taobao.com") ||
		shExpMatch(host,"*.alipay.com") ||
		shExpMatch(host,"*.coli688.com") ||
		shExpMatch(host,"*.meituan.com") ||
		shExpMatch(host,"*.meituan.net") ||
		shExpMatch(host,"*.sankuai.com") ||
		shExpMatch(host,"*.wechat.com") ||
		shExpMatch(host,"*.suning.com") ||
		shExpMatch(host,"*.idmschina.com") ||
		shExpMatch(host,"*.huijimall.com") ||
		shExpMatch(host,"*.cmbchina.com") ||
		shExpMatch(host,"*.zhiketong.com") ||
		shExpMatch(host,"*.jd.com") ||
		shExpMatch(host,"*.szuo.com") ||
		shExpMatch(host,"*.gtimg.com") ||
		shExpMatch(host,"*.bdimg.com") ||
		shExpMatch(host,"*.163.com") ||
		shExpMatch(host,"*.126.net") ||
		shExpMatch(host,"*.127.net") ||
		shExpMatch(host,"*.cnzz.com") ||
		shExpMatch(host,"*.hbhtxx.com") ||
		shExpMatch(host,"*.fapiao.com") ||
		shExpMatch(host,"*.travelzoo.biz") ||
		shExpMatch(host,"*lianlianlvyou.com") ||
		shExpMatch(host,"*.tingjiandan.com") ||
		shExpMatch(host,"*.pingan.com") ||
		shExpMatch(host,"*.dianping.com") ||
		shExpMatch(host,"*.verystar.net") ||
		shExpMatch(host,"*.tmall.com") ||
		shExpMatch(host,"*.cnbooking.net") ||
		shExpMatch(host,"*.whgaty.com") ||
		shExpMatch(host,"*.bcebos.com") ||
		shExpMatch(host,"*.zhihu.com") ||
		shExpMatch(host,"*.moseeker.com") ||
		shExpMatch(host,"*.coolbook.cc") ||
		shExpMatch(host,"*.2345.com") ||
		shExpMatch(host,"*.ssbooking.com") ||
		shExpMatch(host,"*.baiwang.com") ||
		shExpMatch(host,"*.xinghaitour.com") ||
		shExpMatch(host,"*.alitrip.com") ||
		shExpMatch(host,"*.elong.com") ||
		shExpMatch(host,"*.xinghaitour.com") ||
		shExpMatch(host,"*.lvmama.com") ||
		shExpMatch(host,"*.bank-of-china.com") ||
		shExpMatch(host,"*.chinaums.com") ||
		shExpMatch(host,"*.bocsolution.com") ||
		shExpMatch(host,"*.tianyancha.com") ||
		shExpMatch(host,"*.appkyt.com") ||
		shExpMatch(host,"*.leyaoyao.com") ||
		shExpMatch(host,"*.ktvsky.com") ||
		shExpMatch(host,"*.bestdo.com") ||
		shExpMatch(host,"*.51quanyi.com") ||
		shExpMatch(host,"*.colourfulchina.com") ||
		shExpMatch(host,"*.toptastewin.com.com") ||
		shExpMatch(host,"*.sf-express.com") ||
		shExpMatch(host,"*.jiandaoyun.com") ||
		shExpMatch(host,"*.jdycdn.com") ||
		shExpMatch(host,"*.tianyancha.com") ||
		shExpMatch(host,"*.cnbooking.net") ||
		shExpMatch(host,"*.didatravel.com") ||
		shExpMatch(host,"*.meitu.com") ||
		shExpMatch(host,"*.huijinlife.com") ||
		shExpMatch(host,"*.by-pi.com") ||
		shExpMatch(host,"*.cnzz.com") ||
		shExpMatch(host,"*.pa18.com") ||
		shExpMatch(host,"*.oray.com") ||
		shExpMatch(host,"*.360buyimg.com") ||
		shExpMatch(host,"*.orayimg.com") ||
		shExpMatch(host,"*.7moor.com") ||
		shExpMatch(host,"*.7moor-fs1.com") ||
		shExpMatch(host,"*.zhiketong.com") ||
		shExpMatch(host,"*.tripcdn.com") ||
		shExpMatch(host,"*.growingio.com") ||
		shExpMatch(host,"*.bankofchina.com") ||
		shExpMatch(host,"*.kf5.com") ||
		shExpMatch(host,"*.xiaojukeji.com") ||
		shExpMatch(host,"*.didichuxing.com") ||
		shExpMatch(host,"*.xiumi.us") ||
		shExpMatch(host,"*.szcdc.net") ||
		shExpMatch(host,"*.foodmate.net") ||
		shExpMatch(host,"*.gdqjp.com") ||
		shExpMatch(host,"*.qcc.com") ||
		shExpMatch(host,"*.geetest.com") ||
		shExpMatch(host,"*.qichacah.com") ||
		shExpMatch(host,"*.cnzz.com") ||
		shExpMatch(host,"*.qhres.com") ||
		shExpMatch(host,"*.58pic.com") ||
		shExpMatch(host,"*.design006.com") ||
		shExpMatch(host,"*.freepik.com") ||
		shExpMatch(host,"*.cdnpk.net") ||
		shExpMatch(host,"*.hs-analytics.net") ||
		shExpMatch(host,"*.freepikcompany.com") ||
		shExpMatch(host,"*.qiantucdn.com") ||
		shExpMatch(host,"*.1688.com") ||
		shExpMatch(host,"*.ibenjing.com") ||
		shExpMatch(host,"*.processon.com") ||
		shExpMatch(host,"*.yunaq.com") ||
		shExpMatch(host,"*.knowsafe.com") ||
		shExpMatch(host,"*.zhugeio.com") ||
		shExpMatch(host,"*.colinker.com") ||
		shExpMatch(host,"*.cndrealty.com") ||
		shExpMatch(host,"*.shijicrm.shijicloud.com") ||
		shExpMatch(host,"*.lanniao.com") ||
		shExpMatch(host,"*.jinmao-hotels.com") ||
		shExpMatch(host,"*.shfda.org") ||
		shExpMatch(host,"*.ksudi.com") ||
		shExpMatch(host,"*.dcits.com") ||
		shExpMatch(host,"*.hrsinternational.com") ||
		shExpMatch(host,"*.app.smartsheet.com") ||
		shExpMatch(host,"*.xmnjdwx.com")) ||
		shExpMatch(host,"savant.okta.com")) {
    
        	return "PROXY bjs1.sme.zscloud.net:80; PROXY tsn1.sme.zscloud.net:80; DIRECT";}

	// For websites outside of China, when user in China connect to Hong Kong or Singapore
	 
    if (shExpMatch(country,"China")) {
    	return "PROXY hkg3.sme.zscloud.net:80; PROXY sin4.sme.zscloud.net:80; DIRECT"; }
    	
    // Default traffic forwarding. GATEWAY variable won't work in China or Surcharge DCs
    return "PROXY ${GATEWAY}:80; PROXY ${SECONDARY_GATEWAY}:80; DIRECT";
}
   
