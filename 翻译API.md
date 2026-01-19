
-- 翻译请求API
curl --location --request POST 'https://fanyi-api.baidu.com/ait/api/aiTextTranslate' \
--header 'Authorization: env.fanyi_key' \
--header 'User-Agent: Apifox/1.0.0 (https://apifox.com)' \
--header 'Content-Type: application/json' \
--data-raw '{
"appid": env.fanyi_appid,
"from": "zh",
"to": "en",
"q": "你好"
}'

--- 正常响应
{
"from": "zh",
"to": "en",
"trans_result": [
{
"src": "你好",
"dst": "Hello"
}
]
}

--错误响应
{
    "error_code": "54001",
    "error_msg": "Invalid Sign"
}



语种列表
自动检测	auto	中文	zh	英语	en
粤语	yue	文言文	wyw	日语	jp
韩语	kor	法语	fra	西班牙语	spa
泰语	th	阿拉伯语	ara	俄语	ru
葡萄牙语	pt	德语	de	意大利语	it
希腊语	el	荷兰语	nl	波兰语	pl
保加利亚语	bul	爱沙尼亚语	est	丹麦语	dan
芬兰语	fin	捷克语	cs	罗马尼亚语	rom
斯洛文尼亚语	slo	瑞典语	swe	匈牙利语	hu
繁体中文	cht	越南语	vie		