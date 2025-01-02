module.exports.config = {
	name: "الذرات",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LeMinh",
	description: "جدول المجموعة الذرية المتقدمة",
	commandCategory: "𝔼ℕ𝕁𝕆𝕐",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`جدول المجموعة الذرية المتقدمة
الرقم المقابل / الاسم / التكافؤ / الحمض
1 /Nitrat(NO3) / I / Axit nitric HNO3
2 /Hiđroxit(OH) / I / không có
(tên này dùng trong các hợp chất với kim loại)
3 /Cacbonat(CO3) / II / Axit cacbonic H2CO3
4 /Photphat(PO4) / III / Axit photphoric H3PO4
5 /Sunfat(SO4) / II / Axit sunfuric H2SO4
6 /Sunfit(SO3) / II / Axit sunfurơ H2SO3
7 /Hiđrocacbonat(HCO3) / I / Axit cacbonic H2SO4
8 /Hirđrosunfit(HSO3) / I / Axit sunfurơ H2SO3
9 /Hiđrosunfat(HSO4) / I / Axit sunfuric H2SO4 
10 /Hiđrophotphat(HPO4) / II / Axit photphoric H3PO4
11 /Đihiđrophotphat(H2PO4) / I / Axit photphoric H3PO4
12 /Amoni(NH4) / I / Không có
13 /Silicat(SiO3) / II / Axit silixic H2SiO3 
14 /Clorat(ClO3) / I / Axit cloric HClO3
15 /Peclorat(ClO4) / I / Axit pecloric HClO4
16 /Clorit(ClO2) / I / Axit clorơ HClO2
17 /Hipoclorit(ClO) / I / Axit hipoclorơ HClO
18 /Bromat(BrO3) / I / Axit bromic HBrO3
19 /Pemanganat(MnO4) / I / axit pemanganic HMnO4.`, event.threadID, event.messageID);
