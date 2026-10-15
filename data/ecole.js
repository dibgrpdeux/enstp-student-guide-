// ============================================
// data/ecole.js — قسم مدرستي
// Guide de survie ENSTP
// ============================================
// يحتوي على: الخريطة التفاعلية، الخريطة، القاعات،
//            المدرجات، المخابر، الأقسام، الخدمات، المطعم
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "ecole",
  icon: "🏫",
  titleKey: "sectionEcole",
  introKey: "ecoleIntro",
  type: "ecole",
  
  categories: [
    
    // ========== 0. الخريطة التفاعلية (جديد) ==========
    {
      id: "interactive-map",
      icon: "🗺️",
      titleKey: "ecoleInteractiveMap",
      descKey: "ecoleInteractiveMapDesc",
      type: "garidi-map"
    },
    
    // ========== 1. الخريطة القديمة ==========
    {
      id: "plan",
      icon: "🗺️",
      titleKey: "ecolePlan",
      descKey: "ecolePlanDesc",
      type: "map",
      buildings: [
        { id: "entree",    icon: "🚪", x: 50, y: 92, nameKey: "ecoleEntree",  name: "Entrée principale" },
        { id: "admin",     icon: "🏛️", x: 50, y: 78, nameKey: "adminDirection", name: "Direction" },
        { id: "scolarite", icon: "📋", x: 28, y: 72, nameKey: "adminScolarite", name: "Scolarité" },
        { id: "biblio",    icon: "📖", x: 72, y: 72, nameKey: "ecoleBiblio", name: "Bibliothèque" },
        { id: "amphiA",    icon: "🅰️", x: 25, y: 50, nameKey: "ecoleAmphi", name: "Amphi A" },
        { id: "amphiB",    icon: "🅱️", x: 50, y: 50, nameKey: "ecoleAmphi", name: "Amphi B" },
        { id: "salles",    icon: "📚", x: 75, y: 50, nameKey: "ecoleSalle", name: "Salles 1-26" },
        { id: "labos",     icon: "🔬", x: 75, y: 30, nameKey: "ecoleLabs", name: "Laboratoires" },
        { id: "resto",     icon: "🍽️", x: 25, y: 30, nameKey: "ecoleResto", name: "Restaurant" },
        { id: "foyer",     icon: "🛋️", x: 50, y: 25, nameKey: "ecoleFoyer", name: "Foyer" },
        { id: "medecin",   icon: "🩺", x: 25, y: 15, nameKey: "ecoleMedecin", name: "Médecin" },
        { id: "cite",      icon: "🏠", x: 75, y: 15, nameKey: "ecoleCite", name: "Cité" }
      ]
    },
    
    // ========== 2. القاعات والمدرجات ==========
    {
      id: "salles",
      icon: "📚",
      titleKey: "ecoleSalle",
      descKey: "ecoleSalleDesc",
      type: "items",
      items: [
        { titleKey: "ecoleSalle", icon: "📚", descKey: "ecoleSalleDesc", map: "ENSTP Garidi Kouba", img: "", video: "" },
        { titleKey: "ecoleAmphi", icon: "🏛️", descKey: "ecoleAmphiDesc", map: "ENSTP Garidi Kouba", img: "", video: "" },
        { titleKey: "ecoleLabs", icon: "🔬", descKey: "ecoleLabs", img: "", video: "" }
      ]
    },
    
    // ========== 3. الخدمات ==========
    {
      id: "services",
      icon: "🩺",
      titleKey: "ecoleMedecin",
      descKey: "ecoleMedecinDesc",
      type: "items",
      items: [
        { titleKey: "ecoleMedecin", icon: "🩺", descKey: "ecoleMedecinDesc", img: "", video: "" },
        { titleKey: "ecoleSecu", icon: "💼", descKey: "ecoleSecuDesc", img: "", video: "" },
        { titleKey: "ecoleEntrepreneuriat", icon: "🚀", descKey: "ecoleEntrepreneuriatDesc", img: "", video: "" },
        { titleKey: "ecoleBiblio", icon: "📖", descKey: "ecoleBiblioDesc", img: "", video: "" },
        { titleKey: "ecoleCite", icon: "🏠", descKey: "ecoleCiteDesc", img: "", video: "" }
      ]
    },
    
    // ========== 4. الأقسام ==========
    {
      id: "depts",
      icon: "🎓",
      titleKey: "ecoleDept",
      descKey: "ecoleIntro",
      type: "items",
      items: [
        { titleKey: "ecoleDeptPrep", icon: "📘", descKey: "ecoleDeptPrepDesc", img: "", video: "" },
        { titleKey: "ecoleDeptMat", icon: "🔩", descKey: "ecoleDeptMatDesc", img: "", video: "" },
        { titleKey: "ecoleDeptInf", icon: "🏗️", descKey: "ecoleDeptInfDesc", img: "", video: "" }
      ]
    },
    
    // ========== 5. المخابر ==========
    {
      id: "labs",
      icon: "🔬",
      titleKey: "ecoleLabs",
      descKey: "ecoleLabs",
      type: "items",
      items: [
        { titleKey: "ecoleLabPhysique", icon: "⚛️", descKey: "ecoleLabPhysiqueDesc", img: "", video: "" },
        { titleKey: "ecoleLabChimie", icon: "🧪", descKey: "ecoleLabChimieDesc", img: "", video: "" },
        { titleKey: "ecoleLabMeca", icon: "💧", descKey: "ecoleLabMecaDesc", img: "", video: "" },
        { titleKey: "ecoleLabElec", icon: "⚡", descKey: "ecoleLabElecDesc", img: "", video: "" }
      ]
    },
    
    // ========== 6. الحياة اليومية ==========
    {
      id: "vie",
      icon: "🍽️",
      titleKey: "ecoleResto",
      descKey: "ecoleRestoDesc",
      type: "items",
      items: [
        { titleKey: "ecoleResto", icon: "🍽️", descKey: "ecoleRestoDesc", img: "", video: "" },
        { titleKey: "ecoleFoyer", icon: "🛋️", descKey: "ecoleFoyerDesc", img: "", video: "" }
      ]
    }
    
  ]
});
