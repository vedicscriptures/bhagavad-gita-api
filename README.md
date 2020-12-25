<center><h1>Bhagavad Gita API</h1></center>
<p align="center"><img alt="Bhagavad Gita API" src="https://raw.githubusercontent.com/vedicscriptures/bhagavad-gita-api/main/docs/gita-logo.jpg" width="300vw"/></p>
<p align="center">
	<a href="https://github.com/PtPrashantTripathi"><img alt="Devloper" src="https://img.shields.io/badge/Devloper-Pt.%20Prashant%20Tripathi-Success.svg?style=flat-square"/></a>
	<a href="https://github.com/vedicscriptures/bhagavad-gita-api/LICENSE"><img alt="License" src="https://img.shields.io/github/license/vedicscriptures/bhagavad-gita-api.svg?style=flat-square"/></a>
	<a href="https://ptprashanttripathi.github.io"><img alt="Website Status" src="https://img.shields.io/website/http/ptprashanttripathi.github.io.svg?down_message=Down&up_message=Online&style=flat-square"/></a>
	<a href="https://github.com/vedicscriptures/bhagavad-gita-api/stargazers"><img alt="stars-shield" src="https://img.shields.io/github/stars/vedicscriptures/bhagavad-gita-api.svg?style=flat-square"/></a>
	<a href="https://github.com/vedicscriptures/bhagavad-gita-api/network/members"><img alt="forks-shield" src="https://img.shields.io/github/forks/vedicscriptures/bhagavad-gita-api.svg?style=flat-square"/></a>
	<a href="https://github.com/vedicscriptures/bhagavad-gita-api/graphs/traffic"><img alt="Total-Downlode" src="https://img.shields.io/github/downloads/vedicscriptures/bhagavad-gita-api/total.svg?style=flat-square"/></a>
</p>
<p align="center">
	<a href="https://ptprashanttripathi.github.io">View Demo</a> · <a href="https://github.com/PtPrashantTripathi/ptprashanttripathi.github.io/issues/new/choose">Report Bug</a> · <a href="https://github.com/PtPrashantTripathi/ptprashanttripathi.github.io/issues/new/choose">Request Feature</a>
</p>
<p align="center">
	<i>Loved the tool? Please consider <a href="https://paypal.me/ptprashanttripathi/100">donating</a> 💸 to help it improve!</i><br>
	<a href="https://paypal.me/PtPrashantTripathi"><img height='23' src="https://img.shields.io/badge/support-PayPal-blue?logo=PayPal&style=flat-square&label=Donate" alt="Donate"/></a>
	<a href='https://ko-fi.com/ptprashanttripathi' target='_blank'><img height='23' width="100" src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' alt='Buy Coffee for ptprashanttripathi' /></a>
	<a href="https://www.buymeacoffee.com/ptprashant09" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="23" width="100" style="border-radius:1px" /></a>
	<a href="https://ptprashanttripathi.github.io/linkpe?pa=pt1998@ybl&pn=Pt.+Prashant+Tripati" target="_blank"><img src="https://raw.githubusercontent.com/PtPrashantTripathi/linkpe/main/img/linkpebadge.svg" alt="Support Via UPI" height="23" style="border-radius:1px" /></a>
</p>

## About

Bhagavad-Gita-API is A lightweight Node.js based Bhagavad Gita API server 

## 🚀 How to use

1. to get gita API description

- **Endpoint** `https://vedicscripturesapi.herokuapp.com/`

2. to get SVG of Random gita Slok(Verse)

- **Endpoint** `https://vedicscripturesapi.herokuapp.com/gita.svg`

- **Response**
![bhagavad-gita-api](https://vedicscripturesapi.herokuapp.com/gita.svg)

3. to get Random gita Slok(Verse)

- **Endpoint** `https://vedicscripturesapi.herokuapp.com/gita`

4. to get All Chapters details

- **Endpoint** `https://vedicscripturesapi.herokuapp.com/chapters`

5. to get Particular single Chapters details

- **Endpoint** `https://vedicscripturesapi.herokuapp.com/gita{/cp}`

*:ch - chapter number*

- **Response**
```json
{
  "chapter_number": 2,
  "verses_count": 72,
  "name": "सांख्ययोग",
  "meaning": {
    "en": "Transcendental Knowledge",
    "hi": "गीता का सार"
  },
  "summary": {
    "en": "The second chapter of the Bhagavad Gita is Sankhya Yoga. This is the most important chapter of the Bhagavad Gita as Lord Krishna condenses the teachings of the entire Gita in this chapter. This chapter is the essence of the entire Gita. \nSankhya Yoga can be categorized into 4 main topics - \n1. Arjuna completely surrenders himself to Lord Krishna and accepts his position as a disciple and Krishna as his Guru. He requests Krishna to guide him on how to dismiss his sorrow.\n2. Explanation of the main cause of all grief, which is ignorance of the true nature of Self.\n3. Karma Yoga - the discipline of selfless action without being attached to its fruits.\n4. Description of a Perfect Man - One whose mind is steady and one-pointed.",
    "hi": "भगवद गीता का दूसरा अध्याय सांख्य योग है। यह अध्याय भगवद गीता का सबसे महत्वपूर्ण अध्याय है क्योंकि इसमें भगवान श्रीकृष्ण संपूर्ण गीता की शिक्षाओं को संघनित करते हैं। यह अध्याय पूरी गीता का सार है।\nसांख्य योग को 4 मुख्य विषयों में वर्गीकृत किया जा सकता है - \n१. अर्जुन ने पूरी तरह से भगवान कृष्ण को आत्मसमर्पण किया और उन्हें अपने गुरु के रूप में स्वीकार किया।\n२. सभी दु:खों के मुख्य कारणों की व्याख्या, जो स्व की वास्तविक प्रकृति की अज्ञानता है।\n३. कर्मयोग - अपने कर्मों के फलों से जुड़े बिना नि:स्वार्थ क्रिया का अनुशासन।\n४. एक परिपूर्ण मनुष्य का विवरण - जिसका मस्तिष्क स्थिर और एक-इशारा है।"
  },
  "translation": "Sankhya Yoga",
  "transliteration": "Sānkhya Yog"
}
```

6. to get particular verse of a chapter
- **Endpoint** `https://vedicscripturesapi.herokuapp.com/gita{/cp}`

*:ch - Adhyay(chapter) number*
*:vr - Slok(verse) number*

- **Response**
```json
{
  "meta": "Bhagavad Gita Chapter 2 Verse 1",
  "metahi": "भगवद् गीता 2.1",
  "slok": "सञ्जय उवाचतं तथा कृपयाऽविष्टमश्रुपूर्णाकुलेक्षणम्।विषीदन्तमिदं वाक्यमुवाच मधुसूदनः।।2.1।।",
  "htsrsd": "।।2.1।।सञ्जय बोले वैसी कायरतासे आविष्ट उन अर्जुनके प्रति जो कि विषाद कर रहे हैं और आँसुओंके कारण जिनके नेत्रोंकी देखनेकी शक्ति अवरुद्ध हो रही है भगवान् मधुसूदन ये (आगे कहे जानेवाले) वचन बोले।",
  "htstma": "।।2.1।। संजय ने कहा -- इस प्रकार करुणा और विषाद से अभिभूत? अश्रुपूरित नेत्रों वाले आकुल अर्जुन से मधुसूदन ने यह वाक्य कहा।।",
  "transliteration": "Sanjaya Uvaacha:\nTam tathaa kripayaavishtam ashrupoornaakulekshanam;\nVisheedantam idam vaakyam uvaacha madhusoodanah.",
  "englishmeaning": "sañjayaḥ uvācha—Sanjay said; tam—to him (Arjun); tathā—thus; kṛipayā—with pity; āviṣhṭam—overwhelmed; aśhru-pūrṇa—full of tears; ākula—distressed; īkṣhaṇam—eyes; viṣhīdantam—grief-stricken; idam—these; vākyam—words; uvācha—said; madhusūdanaḥ—Shree Krishn, slayer of the Madhu demon",
  "hcsrsd": " 2.1।। व्याख्या    तं तथा कृपयाविष्टम्   अर्जुन रथमें सारथिरूपसे बैठे हुए भगवान्को यह आज्ञा देते हैं कि हे अच्युत मेरे रथको दोनों सेनाओंके बीचमें खड़ा कीजिये जिससे मैं यह देख लूँ कि इस युद्धमें मेरे साथ दो हाथ करनेवाले कौन हैं अर्थात् मेरेजैसे शूरवीरके साथ कौनकौनसे योद्धा साहस करके लड़ने आये हैं अपनी मौत सामने दीखते हुए भी मेरे साथ लड़नेकी उनकी हिम्मत कैसे हुई इस प्रकार जिस अर्जुनमें युद्धके लिये इतना उत्साह था वीरता थी वे ही अर्जुन दोनों सेनाओंमें अपने कुटुम्बियोंको देखकर उनके मरनेकी आशंकासे मोहग्रस्त होकर इतने शोकाकुल हो गये हैं कि उनका शरीर शिथिल हो रहा है मुख सूख रहा है शरीरमें कँपकँपी आ रही है रोंगटे खड़े हो रहे हैं हाथसे धनुष गिर रहा है त्वचा जल रही है खड़े रहनेकी भी शक्ति नहीं रही है और मन भी भ्रमित हो रहा है। कहाँ तो अर्जुनका यह स्वभाव कि  न दैन्यं न पलायनम्  और कहाँ अर्जुनका कायरताके दोषसे शोकाविष्ट होकर रथके मध्यभागमें बैठ जाना बड़े आश्चर्यके साथ सञ्जय यही भाव उपर्युक्त पदोंसे प्रकट कर रहे हैं।पहले अध्यायके अट्ठाईसवें श्लोकमें भी सञ्जयने अर्जुनके लिये  कृपया परयाविष्टः  पदोंका प्रयोग किया है। अश्रुपूर्णाकुलेक्षणम्   अर्जुनजैसे महान् शूरवीरके भीतर भी कौटुम्बिक मोह छा गया और नेत्रोंमें आँसू भर आये आँसू भी इतने ज्यादा भर आये कि नेत्रोंसे पूरी तरह देख भी नहीं सकते। विषीदन्तमिदं वाक्यमुवाच मधुसूदनः   इस प्रकार कायरताके कारण विषाद करते हुए अर्जुनसे भगवान् मधुसूदनने ये (आगे दूसरेतीसरे श्लोकोंमें कहे जानेवाले) वचन कहे।यहाँ  विषीदन्तमुवाच  कहनेसे ही काम चल सकता था  इदं वाक्यम्  कहनेकी जरूरत ही नहीं थी क्योंकि  उवाच  क्रियाके अन्तर्गत ही  वाक्यम्  पद आ जाता है। फिर भी  वाक्यम्  पद कहनेका तात्पर्य है कि भगवान्का यह वचन यह वाणी बड़ी विलक्षण है। अर्जुनमें धर्मका बाना पहनकर जो कर्तव्यत्यागरूप बुराई आ गयी थी उसपर यह भगवद्वाणी सीधा आघात पहुँचानेवाली है। अर्जुनका युद्धसे उपराम होनेका जो निर्णय था उसमें खलबली मचा देनेवाली है। अर्जुनको अपने दोषका ज्ञान कराकर अपने कल्याणकी जिज्ञासा जाग्रत् करा देनेवाली है। इस गम्भीर अर्थवाली वाणीके प्रभावसे ही अर्जुन भगवान्का शिष्यत्व ग्रहण करके उनके शरण हो जाते हैं (2। 7)।सञ्जयके द्वारा  मधुसूदनः  पद कहनेका तात्पर्य है कि भगवान् श्रीकृष्ण मधु नामक दैत्यको मारनेवाले अर्थात् दुष्ट स्वभाववालोंका संहार करनेवाले हैं। इसलिये वे दुष्ट स्वभाववाले दुर्योधनादिका नाश करवाये बिना रहेंगे नहीं। सम्बन्ध   भगवान्ने अर्जुनके प्रति कौनसे वचन कहे इसे आगेके दो श्लोकोंमें कहते हैं।",
  "hcsca": "।।2.1।। द्वितीय अध्याय का प्रारम्भ संजय के कथन से होता है जिसमें वह चुने हुये शब्दों से अर्जुन की विषादमयी मानसिक स्थिति का स्पष्ट चित्रण करता है। अर्जुन का मन करुणा और विषाद से भर गया है। इस युक्ति से स्पष्ट होता है कि अर्जुन परिस्थितियों का स्वामी न होकर स्वयं उनका शिकार हो गया था। इस प्रकार एक दुर्बल व्यक्ति ही परिस्थितियों का शिकार बनकर जीवन संघर्ष के प्रत्येक अवसर पर असफल होता है। अर्जुन अपनी नैराश्यपूर्ण अवस्था में इस समय ऐसी ही बाह्य परिस्थितियों का शिकार हो गया था। अर्जुन की विषादावस्था का वर्णन करने के साथ ही संजय हमें यह भी संकेत करता है कि उसका आन्तरिक व्यक्तित्व भग्न हो गया था और उसके चरित्र में गहरी दरार पड़ गयी थी। अपने समय का सर्वश्रेष्ठ धनुर्धारी होकर भी वह किसी सामान्य युवती के समान रुदन कर रहा थाइस प्रकार करुणा और शोक से अभिभूत एवं अश्रुरहित रोदन करते हुये अर्जुन से मधुसूदन (मधु नामक असुर का वध करने वाले) भगवान् श्रीकृष्ण ने निम्नलिखित वाक्य कहा। यहाँ यह उल्लेखनीय है कि अश्रुरहित रोदन को आधुनिक मनोविज्ञान मानसिक उद्विग्नता की चरम स्थिति मानता है।",
  "etsga": "2.1 Sanjaya said To him who had been thus filled with pity, whose eyes were filled with tears and showed distress, and who was sorrowing, Madhusudana uttered these words:",
  "etssa": "2.1 Sanjaya said To him who was thus overcome with pity and who was despondent, with eyes full of tears and agitated, Madhusudana (the destroyer of Madhu) or Krishna spoke these words.",
  "etdss": "2.1. Sanjaya said To him (Arjuna) who was thus possessed by compassion, whose eyes were confused and filled with tears and who was sinking in despondency, Madhusudana told this [following] sentence.",
  "ecssa": "2.1 तम् to him? तथा thus? कृपया with pity? आविष्टम् overcome? अश्रुपूर्णाकुलेक्षणम् with eyes filled with tears and agitated? विषीदन्तम् despondent? इदम् this? वाक्यम् speech? उवाच spoke? मघुसूदनः Madhusudana.No commentary.",
  "scetsga": "2.1 Sri Sankaracharya did not comment on this sloka. The commentary starts from 2.10.",
  "scetdss": "2.1 Sri Abhinavagupta did not comment upon this sloka.",
  "scetssa": "2.1 - 2.3 Sanjaya said - Lord said When Arjuna thus sat, the Lord, opposing his action, said: What is the reason for your misplaced grief? Arise for battle, abandoning this grief, which has arisen in a critical situation, which can come only in men of wrong understanding, which is an obstacle for reaching heaven, which does not confer fame on you, which is very mean, and which is caused by faint-heartedness.",
  "chakravarthi": "In this second chapter, after destroying the darkness of bewilderment and lamentation of Arjuna by distinction of soul and body, Krishna speaks about the characteristics of the liberated soul.",
  "rudra": "\nWhat happened next? To answer this the verse states that to him meaning\nArjuna whose eyes were filled with tears in bewilderment, to him Arjuna who\nwas grieving the Supreme Lord Krishna spoke these words.",
  "brahma": "There is no commentary for this verse.",
  "shri": "There is no commentary for this verse.",
  "kumar": "Having heard Arjunas justifications from refraining from the battle due to\nthe fear of receiving sin for the slaying of relatives; Dhritarastrawas\nrelieved of the fear that his sons might have returned to the Pandavas\ntheir fair share of the kingdom and desired to know what happened next.\nSanjaya spoke that Arjunas eyes were brimming with tears, when ones eyes\nare full of tears ones clear vision is obstructed and thus refers to\nArjunas unable to see the situation in the correct perspective. By\naddressing Lord Krishna with the vocative Madhusudana indicates that just\nas He destroyed the demon Madhu in times of yore, by descending in the\nroyal dynasty as a ksatriya He would destroy all the demoniac and evil\nelements which are burdening the Earth."
}
```

#### Attribute Results

- **meta** : meta in English

- **metahi** : meta in Hindi

- **slok** : Sanskrit slok 
	source : GEETA PRESS GORAKHPUR's **SHRIMAD BHAGWAT GITA** https://www.gitapress.org/

- **htsrsd** : Hindi Translation by **Swami Ramsukhdas Ji** 
	- source : http://www.swamiramsukhdasji.net

- **htstma** : Hindi Translation by **Swami Tejomayananda Saraswati Ji**
	- source : http://www.chinmayamission.com/the-holy-gita/

- **transliteration** : Sanskrit slok to English Transliteration 
	- source : **Bhagavad Gita As It Is** Original by **Shree Prabhupada Ji** https://www.asitis.com/

- **englishmeaning** : Sanskrit slok to English Translation (source : wiki) 
	- source : **Bhagavad Gita As It Is** Original by **Shree Prabhupada Ji** https://www.asitis.com/

- **hcsrsd** : Hindi Commentary by **Swami Ram Sukhdas Ji**
	- source : http://www.swamiramsukhdasji.net

- **hcsca** : Hindi Commentary by **Swami Chinmayananda Saraswati Ji**
	- source : https://chinmaya-boston.org/

- **etsga** : English Translation by **Swami Gambirananda Ji**
	- source : https://shop.advaitaashrama.org/product/bhagavad-gita-hb-by-swami-gambhirananda/

- **etssa** : English Translation by **Swami Sivananda Ji Maharaj**
	- source : https://www.dlshq.org/saints/siva.htm

- **etdss** : English Translation by **Dr. S. Sankaranarayan Ji**
	- source : https://archive.org/details/ShrimatBhagavatGitaWithGitarthaSangrahaOfAbhinavaguptaIIDr.S.SankaraNarayanan

- **ecssa** : English Commentary by **Swami Sivananda Ji Maharaj**
	- source : https://www.dlshq.org/download/bgita.htm

- **scetsga** : English Commentary (Trans.) By **Sri Shankaracharya Ji**
	- source : https://www.rarebooksocietyofindia.org/book_archive/196174216674_10152992577146675.pdf

- **scetdss** : English Commentary (Trans.) By **Dr. S. Sankaranarayan Ji**
	- source : https://archive.org/details/ShrimatBhagavatGitaWithGitarthaSangrahaOfAbhinavaguptaIIDr.S.SankaraNarayanan

- **scetssa** : English Commentary (Trans.) By **Ramanuja Ji**
	- source : http://www.srimatham.com/uploads/5/5/4/9/5549439/ramanuja_gita_bhashya.pdf

- **chakravarthi** : English Commentary By **Vishwanath Chakravarti Thakur Ji**
	- source : https://www.iskconbangalore.org/blog/sri-vishvanatha-chakravarti-thakura/

- **rudra** : English Commentary by Rudra Vaishnava Sampradaya
	- source : https://en.wikipedia.org/wiki/Rudra_Sampradaya

- **brahma** : English Commentary by Brahma Vaishnava Sampradaya
	- source : https://www.harekrsna.com/philosophy/gss/sadhu/sampradayas/brahma/brahma.htm

- **shri** : English Commentary by Shri Vaishnava Sampradaya  
	- source : http://srivaishnavam.in/

- **kumar** : English Commentary by Kumara Vaishnava Sampradaya 
	- source : https://www.harekrsna.com/philosophy/gss/sadhu/sampradayas/kumara/kumara.htm

## 💻 Built with

<img alt="Node.js" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>

## 🙏 Support ✨
<table>
	<tr>
		<th align="center">
			<a href="https://github.com/ptprashanttripathi">
				<sub><b>Pt. Prashant Tripathi</b></sub>
			</a>
		</th>
  	</tr>
 	<tr>
		<td align="center">
			<a href="https://github.com/ptprashanttripathi">
				<img src="https://avatars2.githubusercontent.com/u/26687933?s=200&v=4" width="100px;" alt=""/>
			</a>
		</td>
	</tr>
</table>  

## Questions and Feedback

**Please contact me using one of the following:**

[![](https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ptprashant09) 
[![](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ptprashanttripathi/) 
[![](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ptprashanttripathi/) 
[![](https://img.shields.io/badge/telegram-%233498DB.svg?&style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/ptprashanttripathi/) 
[![](https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/ptprashanttripathi) 
[![](https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white)](https://dev.to/ptprashanttripathi)

<hr>
<p align="center">  
Developed with ❤️ in India 🇮🇳 
</p>
