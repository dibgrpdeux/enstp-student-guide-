// ============================================
// data/transport.js — قسم النقل الكامل
// ============================================

window.SECTIONS = window.SECTIONS || [];

for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'transport') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "transport",
  icon: "🚌",
  titleKey: "sectionTransport",
  introKey: "transportIntro",
  type: "items",

  items: [
    // ========== 1. الخريطة التفاعلية (زر يفتح خرائط جوجل) ==========
    {
      title: "🗺️ Carte interactive des transports",
      icon: "🗺️",
      desc: "Localisez les arrêts de bus, les stations de taxis, le métro et les itinéraires piétonniers autour de l'ENSTP.",
      type: "map-button",
      mapLink: "https://maps.app.goo.gl/uJ8rrZfGFSpD5fyb6?g_st=it" // رابط المشاركة الخاص بك
    },

    // ========== 2. محطات الحافلات ==========
    {
      title: "🚌 Arrêts de bus à proximité",
      icon: "🚏",
      desc: "Découvrez les arrêts de bus situés à proximité de l'ENSTP, les lignes disponibles et leurs principales destinations.",
      details: "📍 **Arrêt 1 - C (CNEP Banque)**\n- Localisation : En face de la CNEP Banque (Disponible sur la carte)\n- Distance : 350 m / 5 minutes à pied\n- Destinations : Station de Ben Omar (où l'on retrouve toutes les destinations)\n- Fréquence : Toutes les 10 minutes\n\n📍 **Arrêt 2 - B (Gare routière Kouba)**\n- Localisation : Gare routière de Kouba (Disponible sur la carte)\n- Distance : 500 m / 7 minutes à pied\n- Destinations : Plusieurs destinations à travers Alger\n- Fréquence : Toujours disponible\n\n📍 **Arrêt 3 - D (ENS)**\n- Localisation : En face de l'ENS (Disponible sur la carte)\n- Distance : 950 m / 14 minutes à pied\n- Destinations : Plusieurs destinations à travers Alger\n- Fréquence : Dépend des destinations, mais généralement disponible pour deux horaires (7h30 et 16h)"
    },

    // ========== 3. سيارات الأجرة ==========
    {
      title: "🚕 Stations de taxis à Kouba",
      icon: "🚕",
      desc: "Les stations de taxis à Kouba et ses environs.",
      details: "• **Ben Omar** : Points de prise en charge pour Birkhadem, Bir Mourad Raïs ou Baraki.\n• **Garidi 1** : Points de transport pour rejoindre Bir Mourad Raïs ou Birkhadem.\n• **Garidi 2** : Points de prise en charge pour Bir Mourad Raïs ou d'autres quartiers de Kouba.\n• **Vieux Kouba** : Pour rejoindre Ruisseau, Hussein Dey ou le centre d'Alger.\n• **Jolie Vue** : Points de transport pour Bir Mourad Raïs ou Birkhadem.\n• **L'Appreval** : Points de transport pour Gué de Constantine ou Bachdjerrah.\n• **La Croix** : Points de prise en charge pour Kouba et les quartiers voisins.\n• **Haï El Badr** : À proximité de la station de métro pour Bachdjerrah ou Baraki.\n• **Ruisseau** : Pôle de transport pour Hussein Dey ou le centre d'Alger.\n• **Caroubier** : À proximité de la gare routière pour destinations locales ou inter-wilayas."
    },

    // ========== 4. المترو والترامواي ==========
    {
      title: "🚇 Métro et Tramway",
      icon: "🚇",
      desc: "Comment se rendre au métro et au tramway depuis l'ENSTP.",
      details: "**1. Comment se rendre de l'ENSTP à la station de métro Haï El Badr ?**\n- Départ de l'ENSTP.\n- Prendre le bus en direction de Bachdjerrah.\n- Descendre à l'arrêt de métro Haï El Badr.\n- Si nécessaire, prendre un taxi pour rejoindre la station.\n\n**2. Comment se rendre de l'ENSTP au tramway ?**\n- Départ de l'ENSTP.\n- Prendre le bus en direction de Bachdjerrah pour rejoindre la station de métro Haï El Badr.\n- Prendre le métro à Haï El Badr en direction du centre d'Alger.\n- Descendre à la station Les Fusillés.\n- À la sortie du métro, rejoindre la station de tramway située à proximité.\n- Prendre le tramway en direction de la destination souhaitée.\n\n**3. Tarifs :**\n- 🚇 **Métro** : 50 DA par trajet.\n- 🚊 **Tramway** : 40 DA par trajet.\n- 🎓 **Offre étudiante (eTWASSEL)** : Application eTWASSEL. Frais d'inscription : 150 DA au début de l'année universitaire. Avantage : gratuité des trajets en métro et tramway pendant toute l'année universitaire. Objectif : réduire les dépenses de transport des étudiants et faciliter leurs déplacements quotidiens."
    },

    // ========== 5. مسارات المشي ==========
    {
      title: "🚶 Itinéraires à pied",
      icon: "🚶",
      desc: "Retrouvez les itinéraires piétonniers utiles pour rejoindre les arrêts de transport et les points importants autour de l'ENSTP.",
      details: "Les itinéraires sont disponibles directement sur la carte interactive ci-dessus. Vous pouvez zoomer pour voir les chemins exacts menant aux arrêts de bus, stations de taxis et stations de métro."
    }
  ]
});
