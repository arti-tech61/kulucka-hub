// ═══════════════════════════════════════════════════════════════════════════
// HEDEF BÖLGE VERİ KATMANI
//
// Her domainin hedef yüzeyi şudur:
//   1. MERKEZ İL          → il adı
//   2. İLÇELER            → o ilin tüm ilçeleri
//   3. SANAYİ ALANLARI    → OSB + Küçük Sanayi Sitesi (KSS)
//   4. ÇEVRE İLLER        → komşu iller
//   5. ÇEVRE İLÇE/SANAYİ  → komşu illerin ilçe ve sanayi alanları
//
// ⛔ BİLGİ UYDURMA YASAĞI (CLAUDE.md Kural 1):
//   - İLÇE listeleri idari bölünme verisidir, doğrulanabilir.
//   - KOMSU listeleri coğrafi sınır komşuluğudur, doğrulanabilir.
//   - SANAYİ listelerine YALNIZCA varlığı bilinen OSB/KSS yazılır. Emin
//     olmadığınız bir tesis adını buraya EKLEMEYİN — sayfada "X OSB'de
//     hizmet veriyoruz" cümlesi kurulur ve var olmayan bir yer uydurulmuş olur.
//
// Yeni il eklerken üç tabloya da girdi açın; eksik il sessizce boş liste döner.
// ═══════════════════════════════════════════════════════════════════════════

export interface IlVerisi {
    ilceler: string[];
    /** OSB, KSS, sanayi sitesi, liman/serbest bölge — ad olarak geçen yerler. */
    sanayi: string[];
}

export const IL_VERILERI: Record<string, IlVerisi> = {
    "İzmir": {
        ilceler: ["Konak", "Karşıyaka", "Bornova", "Buca", "Bayraklı", "Çiğli", "Gaziemir", "Balçova", "Narlıdere", "Güzelbahçe", "Karabağlar", "Aliağa", "Menemen", "Kemalpaşa", "Torbalı", "Menderes", "Seferihisar", "Urla", "Çeşme", "Karaburun", "Foça", "Bergama", "Dikili", "Kınık", "Kiraz", "Beydağ", "Ödemiş", "Tire", "Bayındır", "Selçuk"],
        sanayi: ["Aliağa Organize Sanayi Bölgesi", "Atatürk Organize Sanayi Bölgesi (Çiğli)", "Kemalpaşa Organize Sanayi Bölgesi", "İTOB Organize Sanayi Bölgesi (Menderes)", "Torbalı Organize Sanayi Bölgesi", "Ege Serbest Bölgesi (Gaziemir)", "Bergama Organize Sanayi Bölgesi", "Tire Organize Sanayi Bölgesi", "Ödemiş Organize Sanayi Bölgesi", "İzmir Atatürk Sanayi Sitesi", "Bornova Küçük Sanayi Sitesi", "Buca Küçük Sanayi Sitesi", "Karabağlar Küçük Sanayi Sitesi", "Işıkkent Sanayi Sitesi", "Aliağa Petkim ve Rafineri Bölgesi", "Alsancak Limanı", "Nemrut Limanı"],
    },
    "Manisa": {
        ilceler: ["Şehzadeler", "Yunusemre", "Akhisar", "Alaşehir", "Turgutlu", "Salihli", "Soma", "Kırkağaç", "Saruhanlı", "Gölmarmara", "Ahmetli", "Demirci", "Gördes", "Kula", "Selendi", "Köprübaşı", "Sarıgöl"],
        sanayi: ["Manisa Organize Sanayi Bölgesi", "Manisa 2. Organize Sanayi Bölgesi", "Turgutlu Organize Sanayi Bölgesi", "Akhisar Organize Sanayi Bölgesi", "Salihli Organize Sanayi Bölgesi", "Soma Organize Sanayi Bölgesi", "Alaşehir Organize Sanayi Bölgesi", "Manisa Küçük Sanayi Sitesi", "Turgutlu Küçük Sanayi Sitesi", "Akhisar Küçük Sanayi Sitesi"],
    },
    "Ankara": {
        ilceler: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Pursaklar", "Gölbaşı", "Polatlı", "Kahramankazan", "Akyurt", "Elmadağ", "Çubuk", "Beypazarı", "Nallıhan", "Ayaş", "Kızılcahamam", "Şereflikoçhisar", "Haymana", "Bala", "Güdül", "Kalecik", "Çamlıdere", "Evren"],
        sanayi: ["OSTİM Organize Sanayi Bölgesi", "İvedik Organize Sanayi Bölgesi", "Ankara Sanayi Odası 1. Organize Sanayi Bölgesi (Sincan)", "ASO 2. ve 3. Organize Sanayi Bölgesi (Temelli)", "Başkent Organize Sanayi Bölgesi", "Polatlı Organize Sanayi Bölgesi", "Anadolu Organize Sanayi Bölgesi", "Şaşmaz Sanayi Sitesi", "Siteler Mobilya Sanayi Bölgesi", "Ostim Küçük Sanayi Sitesi", "Etimesgut Küçük Sanayi Sitesi"],
    },
    "İstanbul": {
        ilceler: ["Bağcılar", "Başakşehir", "Küçükçekmece", "Büyükçekmece", "Esenyurt", "Beylikdüzü", "Avcılar", "Bahçelievler", "Bakırköy", "Zeytinburnu", "Şişli", "Beşiktaş", "Kağıthane", "Sarıyer", "Eyüpsultan", "Gaziosmanpaşa", "Sultangazi", "Esenler", "Güngören", "Arnavutköy", "Silivri", "Çatalca", "Kadıköy", "Ataşehir", "Ümraniye", "Üsküdar", "Maltepe", "Kartal", "Pendik", "Tuzla", "Sancaktepe", "Sultanbeyli", "Çekmeköy", "Beykoz", "Şile"],
        sanayi: ["İkitelli Organize Sanayi Bölgesi", "Tuzla Organize Sanayi Bölgesi", "Dudullu Organize Sanayi Bölgesi", "Beylikdüzü Organize Sanayi Bölgesi", "Birlik Organize Sanayi Bölgesi (Beylikdüzü)", "Tuzla Kimya Sanayicileri OSB", "İstanbul Deri Organize Sanayi Bölgesi (Tuzla)", "Tuzla Tersaneler Bölgesi", "Ambarlı Limanı", "Haramidere Sanayi Sitesi", "Maslak ve Levent İş Merkezleri Bölgesi", "İMES Sanayi Sitesi (Ümraniye)", "Kartal Küçük Sanayi Sitesi", "Bayrampaşa Sanayi Bölgesi"],
    },
    "Bursa": {
        ilceler: ["Nilüfer", "Osmangazi", "Yıldırım", "Gemlik", "İnegöl", "Mustafakemalpaşa", "Karacabey", "Mudanya", "Gürsu", "Kestel", "Orhangazi", "İznik", "Yenişehir", "Orhaneli", "Keles", "Büyükorhan", "Harmancık"],
        sanayi: ["Bursa Organize Sanayi Bölgesi (Nilüfer)", "Demirtaş Organize Sanayi Bölgesi (DOSAB)", "Nilüfer Organize Sanayi Bölgesi", "İnegöl Organize Sanayi Bölgesi", "Gemlik Organize Sanayi Bölgesi", "Kestel Organize Sanayi Bölgesi", "Yenişehir Organize Sanayi Bölgesi", "Karacabey Organize Sanayi Bölgesi", "Mustafakemalpaşa Organize Sanayi Bölgesi", "Gemlik Limanı ve Serbest Bölgesi", "Bursa Küçük Sanayi Sitesi", "İnegöl Mobilya Küçük Sanayi Sitesi", "Beşevler Küçük Sanayi Sitesi"],
    },
    "Eskişehir": {
        ilceler: ["Odunpazarı", "Tepebaşı", "Sivrihisar", "Çifteler", "Seyitgazi", "Alpu", "Beylikova", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Günyüzü", "Han", "Sarıcakaya"],
        sanayi: ["Eskişehir Organize Sanayi Bölgesi", "Eskişehir 2. Organize Sanayi Bölgesi", "Beylikova Organize Sanayi Bölgesi", "Sivrihisar Organize Sanayi Bölgesi", "Eskişehir Küçük Sanayi Sitesi", "Eskişehir Demirciler Sanayi Sitesi", "Organize Sanayi Bölgesi Havacılık Kümesi (TUSAŞ Motor çevresi)"],
    },
    "Bilecik": {
        ilceler: ["Merkez", "Bozüyük", "Osmaneli", "Söğüt", "Gölpazarı", "Pazaryeri", "Yenipazar", "İnhisar"],
        sanayi: ["Bilecik Organize Sanayi Bölgesi", "Bozüyük Organize Sanayi Bölgesi", "Osmaneli Organize Sanayi Bölgesi", "Pazaryeri Organize Sanayi Bölgesi", "Söğüt Organize Sanayi Bölgesi", "Bozüyük Seramik Sanayi Bölgesi", "Bilecik Küçük Sanayi Sitesi", "Bozüyük Küçük Sanayi Sitesi"],
    },
    "Bolu": {
        ilceler: ["Merkez", "Gerede", "Mudurnu", "Göynük", "Mengen", "Yeniçağa", "Dörtdivan", "Kıbrıscık", "Seben"],
        sanayi: ["Bolu Organize Sanayi Bölgesi", "Gerede Deri Organize Sanayi Bölgesi", "Gerede Organize Sanayi Bölgesi", "Bolu Küçük Sanayi Sitesi", "Gerede Küçük Sanayi Sitesi"],
    },
    "Konya": {
        ilceler: ["Selçuklu", "Karatay", "Meram", "Ereğli", "Akşehir", "Beyşehir", "Çumra", "Seydişehir", "Ilgın", "Kulu", "Cihanbeyli", "Karapınar", "Kadınhanı", "Sarayönü", "Bozkır", "Yunak", "Doğanhisar", "Hüyük", "Altınekin", "Emirgazi", "Güneysınır", "Halkapınar", "Derbent", "Derebucak", "Ahırlı", "Yalıhüyük", "Taşkent", "Çeltik", "Tuzlukçu", "Akören"],
        sanayi: ["Konya Organize Sanayi Bölgesi", "Konya 2. Organize Sanayi Bölgesi", "Ereğli Organize Sanayi Bölgesi", "Akşehir Organize Sanayi Bölgesi", "Seydişehir Organize Sanayi Bölgesi", "Beyşehir Organize Sanayi Bölgesi", "Çumra Organize Sanayi Bölgesi", "Konya Büyükkayacık OSB", "Konya Küçük Sanayi Sitesi", "Konya Yeni Sanayi Sitesi", "Karatay Sanayi Sitesi"],
    },
    "Denizli": {
        ilceler: ["Merkezefendi", "Pamukkale", "Çivril", "Acıpayam", "Tavas", "Sarayköy", "Buldan", "Honaz", "Kale", "Çal", "Serinhisar", "Bozkurt", "Güney", "Çameli", "Babadağ", "Bekilli", "Beyağaç", "Baklan", "Çardak"],
        sanayi: ["Denizli Organize Sanayi Bölgesi", "Denizli Deri İhtisas Organize Sanayi Bölgesi", "Çardak Organize Sanayi Bölgesi", "Acıpayam Organize Sanayi Bölgesi", "Çivril Organize Sanayi Bölgesi", "Denizli Küçük Sanayi Sitesi", "Denizli Mermerciler Sanayi Sitesi"],
    },
    "Aydın": {
        ilceler: ["Efeler", "Nazilli", "Söke", "Kuşadası", "Didim", "Germencik", "İncirliova", "Köşk", "Sultanhisar", "Bozdoğan", "Çine", "Karacasu", "Karpuzlu", "Koçarlı", "Kuyucak", "Yenipazar", "Buharkent"],
        sanayi: ["Aydın Organize Sanayi Bölgesi", "Astim Organize Sanayi Bölgesi", "Nazilli Organize Sanayi Bölgesi", "Söke Organize Sanayi Bölgesi", "Çine Organize Sanayi Bölgesi", "Aydın Küçük Sanayi Sitesi", "Nazilli Küçük Sanayi Sitesi"],
    },
    "Muğla": {
        ilceler: ["Menteşe", "Bodrum", "Marmaris", "Fethiye", "Milas", "Ortaca", "Dalaman", "Yatağan", "Köyceğiz", "Seydikemer", "Ula", "Datça", "Kavaklıdere"],
        sanayi: ["Muğla Organize Sanayi Bölgesi", "Milas Organize Sanayi Bölgesi", "Yatağan Termik Santral Bölgesi", "Muğla Küçük Sanayi Sitesi", "Bodrum Küçük Sanayi Sitesi", "Fethiye Küçük Sanayi Sitesi", "Marmaris Küçük Sanayi Sitesi"],
    },
    "Kütahya": {
        ilceler: ["Merkez", "Tavşanlı", "Simav", "Gediz", "Emet", "Altıntaş", "Domaniç", "Aslanapa", "Hisarcık", "Pazarlar", "Şaphane", "Çavdarhisar", "Dumlupınar"],
        sanayi: ["Kütahya Organize Sanayi Bölgesi", "Tavşanlı Organize Sanayi Bölgesi", "Gediz Organize Sanayi Bölgesi", "Simav Organize Sanayi Bölgesi", "Kütahya Seramik Sanayi Bölgesi", "Tunçbilek Termik Santral Bölgesi", "Seyitömer Termik Santral Bölgesi", "Kütahya Küçük Sanayi Sitesi"],
    },
    "Çanakkale": {
        ilceler: ["Merkez", "Biga", "Çan", "Gelibolu", "Yenice", "Ezine", "Bayramiç", "Ayvacık", "Lapseki", "Eceabat", "Gökçeada", "Bozcaada"],
        sanayi: ["Çanakkale Organize Sanayi Bölgesi", "Biga Organize Sanayi Bölgesi", "Çan Organize Sanayi Bölgesi", "Ezine Organize Sanayi Bölgesi", "Çan Termik Santral Bölgesi", "Çanakkale Küçük Sanayi Sitesi", "Biga Küçük Sanayi Sitesi", "Gelibolu Tersane Bölgesi"],
    },
    "Balıkesir": {
        ilceler: ["Karesi", "Altıeylül", "Bandırma", "Edremit", "Burhaniye", "Ayvalık", "Gönen", "Susurluk", "Bigadiç", "Sındırgı", "Dursunbey", "İvrindi", "Savaştepe", "Kepsut", "Havran", "Manyas", "Erdek", "Gömeç", "Balya", "Marmara"],
        sanayi: ["Balıkesir Organize Sanayi Bölgesi", "Bandırma Organize Sanayi Bölgesi", "Gönen Organize Sanayi Bölgesi", "Susurluk Organize Sanayi Bölgesi", "Edremit Organize Sanayi Bölgesi", "Bandırma Limanı", "Balıkesir Küçük Sanayi Sitesi", "Bandırma Küçük Sanayi Sitesi"],
    },
    "Afyonkarahisar": {
        ilceler: ["Merkez", "Sandıklı", "Dinar", "Bolvadin", "Emirdağ", "Şuhut", "Sultandağı", "İhsaniye", "Sinanpaşa", "Çay", "Dazkırı", "İscehisar", "Çobanlar", "Bayat", "Hocalar", "Başmakçı", "Evciler", "Kızılören"],
        sanayi: ["Afyonkarahisar Organize Sanayi Bölgesi", "Afyonkarahisar Mermer İhtisas Organize Sanayi Bölgesi (İscehisar)", "Sandıklı Organize Sanayi Bölgesi", "Dinar Organize Sanayi Bölgesi", "Bolvadin Organize Sanayi Bölgesi", "Emirdağ Organize Sanayi Bölgesi", "Afyonkarahisar Küçük Sanayi Sitesi", "İscehisar Mermer Sanayi Sitesi"],
    },
    "Uşak": {
        ilceler: ["Merkez", "Banaz", "Eşme", "Sivaslı", "Ulubey", "Karahallı"],
        sanayi: ["Uşak Organize Sanayi Bölgesi", "Uşak Deri Karma Organize Sanayi Bölgesi", "Banaz Organize Sanayi Bölgesi", "Uşak Küçük Sanayi Sitesi"],
    },
    "Amasya": {
        ilceler: ["Merkez", "Merzifon", "Suluova", "Taşova", "Gümüşhacıköy", "Göynücek", "Hamamözü"],
        sanayi: ["Amasya Organize Sanayi Bölgesi", "Merzifon Organize Sanayi Bölgesi", "Suluova Organize Sanayi Bölgesi", "Amasya Küçük Sanayi Sitesi"],
    },
    "Kayseri": {
        ilceler: ["Melikgazi", "Kocasinan", "Talas", "İncesu", "Develi", "Yahyalı", "Bünyan", "Pınarbaşı", "Tomarza", "Sarıoğlan", "Akkışla", "Felahiye", "Hacılar", "Özvatan", "Sarız", "Yeşilhisar"],
        sanayi: ["Kayseri Organize Sanayi Bölgesi", "Kayseri Mobilya Kenti", "İncesu Organize Sanayi Bölgesi", "Develi Organize Sanayi Bölgesi", "Kayseri Serbest Bölgesi", "Kayseri Küçük Sanayi Sitesi", "Eski Sanayi Bölgesi"],
    },
    "Gaziantep": {
        ilceler: ["Şahinbey", "Şehitkamil", "Nizip", "İslahiye", "Nurdağı", "Araban", "Oğuzeli", "Yavuzeli", "Karkamış"],
        sanayi: ["Gaziantep Organize Sanayi Bölgesi", "Gaziantep 2., 3., 4. ve 5. Organize Sanayi Bölgeleri", "Nizip Organize Sanayi Bölgesi", "İslahiye Organize Sanayi Bölgesi", "Başpınar Organize Sanayi Bölgesi", "Gaziantep Küçük Sanayi Sitesi", "Gaziantep Ayakkabıcılar Sanayi Sitesi"],
    },
    "Samsun": {
        ilceler: ["İlkadım", "Atakum", "Canik", "Tekkeköy", "Bafra", "Çarşamba", "Terme", "Vezirköprü", "Havza", "Ladik", "Kavak", "Alaçam", "Ondokuzmayıs", "Salıpazarı", "Ayvacık", "Asarcık", "Yakakent"],
        sanayi: ["Samsun Organize Sanayi Bölgesi (Tekkeköy)", "Kavak Organize Sanayi Bölgesi", "Bafra Organize Sanayi Bölgesi", "Havza Organize Sanayi Bölgesi", "Samsun Limanı", "Samsun Serbest Bölgesi", "Samsun Küçük Sanayi Sitesi"],
    },
    "Adana": {
        ilceler: ["Seyhan", "Yüreğir", "Çukurova", "Sarıçam", "Ceyhan", "Kozan", "İmamoğlu", "Karataş", "Karaisalı", "Pozantı", "Yumurtalık", "Feke", "Saimbeyli", "Tufanbeyli", "Aladağ"],
        sanayi: ["Adana Hacı Sabancı Organize Sanayi Bölgesi", "Ceyhan Organize Sanayi Bölgesi", "Kozan Organize Sanayi Bölgesi", "Adana Yumurtalık Serbest Bölgesi", "Adana Küçük Sanayi Sitesi", "Ceyhan Enerji İhtisas Endüstri Bölgesi"],
    },
};

/** Coğrafi sınır komşuluğu — çevre il hedeflemesi için. */
export const KOMSU_ILLER: Record<string, string[]> = {
    "İzmir": ["Manisa", "Aydın", "Balıkesir"],
    "Manisa": ["İzmir", "Balıkesir", "Kütahya", "Uşak", "Denizli", "Aydın"],
    "Ankara": ["Eskişehir", "Konya", "Kırıkkale", "Çankırı", "Bolu", "Bartın", "Kırşehir", "Aksaray"],
    "İstanbul": ["Kocaeli", "Tekirdağ"],
    "Bursa": ["Balıkesir", "Bilecik", "Kocaeli", "Sakarya", "Yalova", "Kütahya"],
    "Eskişehir": ["Bilecik", "Bursa", "Kütahya", "Afyonkarahisar", "Konya", "Ankara", "Bolu", "Çankırı"],
    "Bilecik": ["Bursa", "Eskişehir", "Kütahya", "Sakarya", "Bolu"],
    "Bolu": ["Düzce", "Zonguldak", "Karabük", "Çankırı", "Ankara", "Eskişehir", "Bilecik", "Sakarya"],
    "Konya": ["Ankara", "Eskişehir", "Afyonkarahisar", "Isparta", "Antalya", "Karaman", "Mersin", "Niğde", "Aksaray"],
    "Denizli": ["Aydın", "Manisa", "Uşak", "Afyonkarahisar", "Burdur", "Muğla"],
    "Aydın": ["İzmir", "Manisa", "Denizli", "Muğla"],
    "Muğla": ["Aydın", "Denizli", "Burdur", "Antalya"],
    "Kütahya": ["Bursa", "Bilecik", "Eskişehir", "Afyonkarahisar", "Uşak", "Manisa", "Balıkesir"],
    "Çanakkale": ["Balıkesir", "Edirne", "Tekirdağ"],
    "Balıkesir": ["Çanakkale", "Bursa", "Kütahya", "Manisa", "İzmir"],
    "Afyonkarahisar": ["Kütahya", "Eskişehir", "Konya", "Isparta", "Burdur", "Denizli", "Uşak"],
    "Uşak": ["Manisa", "Kütahya", "Afyonkarahisar", "Denizli"],
    "Amasya": ["Samsun", "Tokat", "Yozgat", "Çorum"],
    "Kayseri": ["Sivas", "Yozgat", "Nevşehir", "Niğde", "Adana", "Kahramanmaraş"],
    "Gaziantep": ["Kilis", "Şanlıurfa", "Adıyaman", "Kahramanmaraş", "Osmaniye", "Hatay"],
    "Samsun": ["Ordu", "Tokat", "Amasya", "Çorum", "Sinop"],
    "Adana": ["Mersin", "Niğde", "Kayseri", "Kahramanmaraş", "Osmaniye", "Hatay"],
};

/** Bir domainin tam hedef yüzeyi: merkez il + ilçeler + sanayi + çevre iller. */
export interface HedefYuzey {
    il: string;
    ilceler: string[];
    sanayi: string[];
    komsuIller: string[];
    /** Komşu illerin öne çıkan sanayi alanları (her komşudan ilk 2). */
    komsuSanayi: string[];
}

export function hedefYuzey(il: string): HedefYuzey {
    const v = IL_VERILERI[il];
    const komsular = KOMSU_ILLER[il] ?? [];
    return {
        il,
        ilceler: v?.ilceler ?? [],
        sanayi: v?.sanayi ?? [],
        komsuIller: komsular,
        komsuSanayi: komsular.flatMap((k) => (IL_VERILERI[k]?.sanayi ?? []).slice(0, 2)),
    };
}
