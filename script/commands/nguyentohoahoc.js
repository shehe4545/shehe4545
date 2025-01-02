module.exports.config = {
	name: "كيمياء",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LeMinh",
	description: "عناصر كيميائية",
	commandCategory: "𝔼ℕ𝕁𝕆𝕐",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`جدول العناصر الرقم / الاسم / الرمز / الكتلة الذرية / الكيميائية 
1 / هيدروجين / H / 1 / I
2 / هيليوم / He / 4/ غير متوفر
3 / ليثيوم / Li / 7 / I
4 / بيريليوم / Be / 9 / II
5 / بورون / B / 11 / III
6 / كاربون / C / 12 / IV,II
7 / نيتروجين / N / 14 / III,II,IV...
8 / اوكسجين / O / 16 / II
9 / الفلور / F / 19 / I
10 / النيون  / Ne / 20 / غير متوفر
11 / صوديوم / Na / 23 / I
12 / المغنسيوم / Mg / 24 / II
13 / الألومنيوم / Al / 27/ III
14 / السيليكون / Si / 28 / IV
15 / Photpho / P / 31 / III,V
16 / Lưu Huỳnh / S / 32 / II,IV,V
17 / كلوريد / Cl / 35,5 / I,...
18 / Agon / Ar / 39,9 / غير متوفر
19 / Kali / K / 39 / I
20 / Canxin / Ca / 40 / II

24/ Crom / Cr / 52 / II,III...
25 / Mangan / Mn / 55 / II,IV,VII..
26 / Sắt / Fe / 56 / II,III
29 / Đồng / Cu / 64 / I,II
30 / Kẽm / Zn / 65 / II
35 / Brom / Br / 80 / I...
47 / Bạc / Ag / 108 / I
56 / Bari / Ba / 137 / II
80 / Thủy Ngân / Hg / 201 / I,II
82 / Chì / Pb / 207 / II,IV`, event.threadID, event.messageID);
