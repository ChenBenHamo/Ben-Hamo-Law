import React, { useEffect, useMemo, useState } from "react";
import yossiProfile from "./assets/yossi-ben-hamo-profile.webp";

const contact = {
  phone: "03-9608886",
  fax: "03-9608778",
  email: "office@ybl-law.com",
  address: "קניון G, רוטשילד 45, ראשון לציון",
  hours: "ימים א' - ה', 09:00-17:30",
};

const contactEn = {
  phone: "03-9608886",
  fax: "03-9608778",
  email: "office@ybl-law.com",
  address: "G Mall, 45 Rothschild St., Rishon LeZion",
  hours: "Sunday-Thursday, 09:00-17:30",
};

const navItems = {
  he: [
    ["home", "ראשי"],
    ["about", "אודות"],
    ["employers", "מעסיקים וחברות"],
    ["verdicts", "פסקי דין"],
    ["links", "קישורים"],
    ["thanks", "מכתבי תודה"],
    ["contact", "צור קשר"],
  ],
  en: [
    ["home", "Home"],
    ["about", "About"],
    ["employers", "Employers & Companies"],
    ["verdicts", "Verdicts"],
    ["links", "Useful Links"],
    ["thanks", "Testimonials"],
    ["contact", "Contact"],
  ],
};

const ui = {
  he: {
    skip: "דילוג לתוכן",
    homeLabel: "דף הבית",
    firmName: "יוסי בן חמו",
    firmType: "משרד עורכי דין",
    accessibility: "ניגודיות",
    footerSummary: "דיני עבודה, ביטוח לאומי, אובדן כושר עבודה וייעוץ משפטי למעסיקים וחברות.",
    footerNav: "ניווט מהיר",
    copyright: "כל הזכויות שמורות",
  },
  en: {
    skip: "Skip to content",
    homeLabel: "Home",
    firmName: "Yossi Ben Hamo",
    firmType: "Law Office",
    accessibility: "Contrast",
    footerSummary: "Labor law, National Insurance, loss of work capacity and legal counsel for employers and companies.",
    footerNav: "Quick navigation",
    copyright: "All rights reserved",
  },
};

const seoContent = {
  he: {
    home: {
      title: "יוסי בן חמו משרד עורכי דין | דיני עבודה, ביטוח לאומי ואובדן כושר עבודה",
      description:
        "משרד עורכי דין יוסי בן חמו מעניק ייצוג משפטי בדיני עבודה, ביטוח לאומי, אובדן כושר עבודה וייעוץ למעסיקים וחברות.",
    },
    about: {
      title: "אודות | יוסי בן חמו משרד עורכי דין",
      description:
        "מידע על משרד עורכי דין יוסי בן חמו, ניסיון המשרד, תחומי ההתמחות והשירותים המשפטיים בדיני עבודה וביטוח לאומי.",
    },
    employers: {
      title: "ייעוץ למעסיקים וחברות | יוסי בן חמו משרד עורכי דין",
      description:
        "ייעוץ משפטי למעסיקים וחברות בדיני עבודה, עריכת חוזים, ייצוג בתביעות עובדים, שירותי ריטיינר וליווי שוטף.",
    },
    verdicts: {
      title: "פסקי דין | יוסי בן חמו משרד עורכי דין",
      description: "מאגר פסקי דין ומסמכים משפטיים של משרד עורכי דין יוסי בן חמו בתחומי דיני העבודה.",
    },
    links: {
      title: "קישורים שימושיים | יוסי בן חמו משרד עורכי דין",
      description: "קישורים לגופים רשמיים בתחומי דיני עבודה, שירות המדינה וביטוח לאומי.",
    },
    thanks: {
      title: "מכתבי תודה | יוסי בן חמו משרד עורכי דין",
      description: "מכתבי תודה והמלצות מלקוחות המשרד.",
    },
    contact: {
      title: "צור קשר | יוסי בן חמו משרד עורכי דין בראשון לציון",
      description:
        "צור קשר עם משרד עורכי דין יוסי בן חמו: קניון G, רוטשילד 45, ראשון לציון. טלפון 03-9608886.",
    },
    article: {
      title: "מגמה חדשה בבחירת עורך דין | יוסי בן חמו משרד עורכי דין",
      description: "מאמר מקצועי על חשיבות בחירת עורך דין בעל התמחות ייחודית וניסיון בתחום המשפטי הרלוונטי.",
    },
    "contact-success": {
      title: "פנייתך התקבלה | יוסי בן חמו משרד עורכי דין",
      description: "פנייתך נשלחה בהצלחה למשרד עורכי דין יוסי בן חמו.",
    },
  },
  en: {
    home: {
      title: "Yossi Ben Hamo Law Office | Labor Law and National Insurance",
      description:
        "Yossi Ben Hamo Law Office provides legal representation in labor law, National Insurance, loss of work capacity and employer counsel.",
    },
    about: {
      title: "About | Yossi Ben Hamo Law Office",
      description: "Learn about Yossi Ben Hamo Law Office, its experience, legal focus and professional services.",
    },
    employers: {
      title: "Employer Counsel | Yossi Ben Hamo Law Office",
      description:
        "Legal counsel for employers and companies, employment agreements, employee claims, retainers and ongoing labor-law advice.",
    },
    verdicts: {
      title: "Verdicts | Yossi Ben Hamo Law Office",
      description: "Legal documents and verdicts from Yossi Ben Hamo Law Office.",
    },
    links: {
      title: "Useful Links | Yossi Ben Hamo Law Office",
      description: "Official resources relating to labor, civil service and National Insurance in Israel.",
    },
    thanks: {
      title: "Testimonials | Yossi Ben Hamo Law Office",
      description: "Client thank-you letters and testimonials for Yossi Ben Hamo Law Office.",
    },
    contact: {
      title: "Contact | Yossi Ben Hamo Law Office in Rishon LeZion",
      description:
        "Contact Yossi Ben Hamo Law Office: G Mall, 45 Rothschild St., Rishon LeZion. Phone 03-9608886.",
    },
    article: {
      title: "Choosing an Attorney with Focused Expertise | Yossi Ben Hamo Law Office",
      description: "A professional article about the importance of choosing an attorney with focused legal expertise.",
    },
    "contact-success": {
      title: "Inquiry Received | Yossi Ben Hamo Law Office",
      description: "Your inquiry was sent successfully to Yossi Ben Hamo Law Office.",
    },
  },
};

const serviceCards = [
  {
    id: "labor",
    title: "דיני עבודה",
    titleEn: "Labor Law",
    text: "הלנת שכר, שעות נוספות, תנאים סוציאליים, פנסיה, קרן השתלמות, פיצויי פיטורים וזכויות מכוח הסכמים קיבוציים ואישיים.",
    textEn: "Wage delay, overtime, social benefits, pensions, study funds, severance pay and rights under collective and personal agreements.",
  },
  {
    id: "insurance",
    title: "ביטוח לאומי",
    titleEn: "National Insurance",
    text: "תביעות לביטוח לאומי, עררים למל\"ל וערעורים לבית הדין לעבודה, תוך ליווי מקצועי וממוקד.",
    textEn: "National Insurance claims, appeals to the NII and appeals before the labor court, with focused professional guidance.",
  },
  {
    id: "capacity",
    title: "אובדן כושר עבודה",
    titleEn: "Loss of Work Capacity",
    text: "תביעות מול גופי ביטוח ומימוש זכויות בעזרת היכרות מעמיקה עם דיני הביטוח ועם מומחים רפואיים.",
    textEn: "Claims against insurance providers and realization of rights through in-depth insurance-law knowledge and medical experts.",
  },
  {
    id: "employers",
    title: "ייעוץ למעסיקים",
    titleEn: "Counsel for Employers",
    text: "ליווי משפטי שוטף, עריכת חוזים, ייצוג בתביעות עובדים והטמעת תיקון 24 לחוק הגנת השכר.",
    textEn: "Ongoing legal counsel, employment agreements, representation in employee claims and implementation of Amendment 24 to the Wage Protection Law.",
  },
];

const aboutItems = [
  "מתן שירותים משפטיים וליטיגציה בתחום יחסי עבודה, דיני עבודה ותאונות עבודה.",
  "טיפול בהיבטים המשפטיים במצב של אפליה או חוסר שוויון הזדמנויות בעבודה.",
  "טיפול בהיבטים המשפטיים של כל נושאי השכר החל משכר עבודה, דרך שעות נוספות, הלנת שכר, דמי חופשה שנתית, פדיון חופשה שנתית, דמי הבראה, דמי מחלה וכו'.",
  "עריכת חוזי עבודה עבור קבלנים עצמאיים, פרילנסרים וכן חוזי עבודה בענפי המשק השונים.",
  "ייצוג עובדים בישיבות שימוע ובפני ועדות פריטטיות.",
  "משרדינו מטפל גם בגוון הפלילי של דיני עבודה ומייצג נאשמים שהוגשו כנגדם כתבי אישום לבית הדין לעבודה. (משרדינו מייצג בענין זה גם נאשמים מטעם הסנגוריה הציבורית)",
  "המרצות פתיחה למתן צווי מניעה להשבת עובד למקום עבודתו הן במגזר הפרטי והן במגזר הציבורי.",
  "ניהול משא ומתן קיבוצי בשם מעבידים או בשם ארגוני מעבידים.",
  "ייצוג מעסיקים בתביעות עובדים ובכלל זה בתובענות ייצוגיות.",
  "משרדינו מייצג עובדים בסכסוכים אישיים לרבות הליכים משמעתיים הליכי שימוע, בוררות ובתי דין לעבודה.",
  "ליווי עובדים לקראת פרישה מהעבודה תוך כדי שימת דגש על נסיבות סיום העבודה עובר להתפטרות/פיטורים.",
  "כמומחה בדיני עבודה, משרדינו מייצג עובדים במצב של הליכי פירוק או פשיטת רגל המעסיק.",
  "הגשת תביעות ייצוגיות בשם עובדים.",
  "עבודת נשים, פיטורי אישה בהריון וייצוג נשים בהריון בהליך לקבלת היתר לפיטורים.",
  "תביעת פיצויים לעובדים בגין הפרת חוזה עבודה.",
  "עריכת הסכמי עבודה וניסוח הסכמי עבודה לשכירים.",
  "ליווי מעסיקים להטמעת תיקון 24 לחוק הגנת השכר.",
  "ניסוח חוזי פרישה לקראת יציאה לפנסיה.",
];

const employerItems = [
  "עריכת חוזים בענפי המשק השונים.",
  "בחינת סוגיות משפטיות המתעוררות מחוזים קיימים.",
  "ייצוג בתביעות ובכלל זה הכנת כתבי תביעה וכתבי הגנה.",
  "ייעוץ בשאלות שוטפות לגבי פיטורי עובדים, שינוי תנאי עבודה, הרעת תנאי עבודה וזכויות הנגזרות מחוקי המגן וצווי ההרחבה.",
  "ניהול מו\"מ בשם המעסיק עם עובדים במטרה להגיע להסדר פשרה.",
  "ייעוץ פנסיוני הן בהתאם לצו ההרחבה לביטוח פנסיוני מקיף והן הסדרי פנסיה מקיפה מהסכמים קיבוציים וצווי הרחבה בכל ענפי הכלכלה.",
  "ההסדרים המוצעים לגבי חברות הינם במתכונות שונות ובהתאם לכל חברה וחברה והכל לאחר ניתוח מעמיק של צורכי החברה אל מול מנהלי החשבונות ורו\"ח.",
  "משרדנו מטפל גם בגוון הפלילי של דיני העבודה ונבחר לייצג נאשמים מטעם הסנגוריה הציבורית.",
];

const aboutItemsEn = [
  "Legal services and litigation in the fields of labor relations, labor law and workplace accidents.",
  "Handling the legal aspects of discrimination or unequal treatment in the workplace.",
  "Handling the legal aspects of wage-related matters, including salary, overtime, wage delay, annual leave pay, payment in lieu of annual leave, convalescence pay, sick pay, pension rights and related benefits.",
  "Drafting employment agreements for independent contractors, freelancers and employees across various sectors of the economy.",
  "Representation of employees and employers at hearings and before parity committees.",
  "Representation in the criminal aspects of labor law, including defendants against whom indictments have been filed with the labor court, including representation on behalf of the Public Defender's Office.",
  "Filing originating motions for injunctions to return employees to their workplace in both the private and public sectors.",
  "Conducting collective bargaining negotiations on behalf of employers or employer organizations.",
  "Representation of employers in employee claims, including class actions.",
  "Representation of employees in personal disputes, including disciplinary proceedings, hearings, arbitrations and labor court proceedings.",
  "Guidance for employees prior to leaving work, with emphasis on the circumstances of termination, resignation or dismissal.",
  "Representation of employees in cases involving liquidation or bankruptcy proceedings of the employer.",
  "Filing class actions on behalf of employees.",
  "Women's employment matters, dismissal during pregnancy and representation of pregnant employees in proceedings for dismissal permits.",
  "Employee compensation claims arising from breach of an employment agreement.",
  "Preparing and drafting employment agreements for salaried employees.",
  "Guiding employers in the implementation of Amendment 24 to the Wage Protection Law.",
  "Drafting retirement agreements prior to retirement.",
];

const employerItemsEn = [
  "Drafting agreements for various sectors of the economy.",
  "Reviewing legal issues arising from existing agreements.",
  "Representation in claims, including preparing statements of claim and defense.",
  "Ongoing advice on dismissal, changes to employment terms, deterioration of conditions and rights under protective labor laws and extension orders.",
  "Negotiating on behalf of employers with employees in order to reach settlement arrangements.",
  "Pension advice under the comprehensive pension insurance extension order and industry-specific collective arrangements.",
  "Building company-specific arrangements based on the company's needs and accounting teams.",
  "Handling the criminal aspect of labor law and representing defendants through the Public Defender's Office.",
];

const usefulLinks = [
  {
    title: "משרד העבודה, הרווחה והשירותים החברתיים",
    titleEn: "Ministry of Labor",
    description:
      "משרד העבודה הוא משרד ממשלתי שפעל בישראל מקום המדינה ועד לשנת 1977, שבה אוחד עם משרד הסעד לשם הקמת משרד העבודה והרווחה.",
    descriptionEn:
      "The Ministry of Labor provides official government information and services relating to labor and employment in Israel.",
    url: "https://www.gov.il/he/departments/molsa",
    logo: "/link-logos/labor.png",
  },
  {
    title: "נציבות שירות המדינה",
    titleEn: "Civil Service Commission",
    description:
      "נציבות שירות המדינה (נש\"מ) רואה את יעודה כארגון המטה האחראי והמוסמך לניהול ההון האנושי והמערך הארגוני בשירות המדינה. נש\"מ מופקדת על ייזום, הובלה, הכוונה, הנחלה ובקרה של מערך ניהול ההון האנושי בשירות המדינה, תוך הבטחת ערכיו, מצוינותו ותקינות התנהלותו של שירות המדינה - על ארגונו, יחידותיו וכלל עובדיו.",
    descriptionEn:
      "The Civil Service Commission is responsible for human-resources policy and administration across Israel's civil service.",
    url: "https://www.gov.il/he/departments/civil_service_commission/govil-landing-page",
    logo: "/link-logos/civil-service.png",
  },
  {
    title: "ביטוח לאומי",
    titleEn: "National Insurance Institute",
    description:
      "המוסד לביטוח לאומי הוא אחד מעמודי התווך שעליהם נשענת המדיניות החברתית בישראל. הוא פועל מתוקף חוק הביטוח הלאומי שהתקבל בכנסת בנובמבר 1953. המוסד לביטוח הלאומי נועד להבטיח לאוכלוסיות חלשות ולמשפחות שנקלעו למצוקה זמנית או ממושכת בסיס כלכלי לקיומן. כיום מעוגנות בחוק הביטוח הלאומי תוכניות לביטוח זקנה ושאירים, אמהות, ילדים, נפגעי עבודה, נכות כללית, סיעוד, אבטלה, פשיטת רגל ופירוק תאגיד.\n\nלבד מגמלאות בכסף נותן המוסד לביטוח לאומי שירותי שיקום והכשרה מקצועית לנכים, לאלמנות ולנפגעי איבה, שירותי סיעוד ושירותי ייעוץ לקשישים.",
    descriptionEn:
      "The National Insurance Institute handles social-security rights, benefits, work injuries, disability, unemployment and related matters.",
    url: "https://www.btl.gov.il/Pages/default.aspx",
    logo: "/link-logos/national-insurance.png",
  },
];

const verdicts = [
  {
    title: "מי-רם - תגובה לבקשה לצו מניעה זמני",
    file: "/verdicts/mi-ram-response-temporary-injunction.pdf",
  },
  {
    title: "החלטה בתיק מי רם לאחר הגשת תגובתנו לצו מניעה",
    file: "/verdicts/mi-ram-decision-after-response.pdf",
  },
  {
    title: "אולניק - בוריס כץ - פס\"ד",
    file: "/verdicts/olnik-boris-katz-verdict.pdf",
  },
  {
    title: "מוניות לכיש - פסק דין - תיק אזרחי",
    file: "/verdicts/lachish-taxis-civil-verdict.pdf",
  },
  {
    title: "מוניות לכיש - פסק דין בבית הדין הארצי בערעור",
    file: "/verdicts/lachish-taxis-national-labor-appeal.pdf",
  },
  {
    title: "דוד ושלום בוסקילה",
    file: "/verdicts/david-and-shalom-buskila.pdf",
  },
  {
    title: "ברמט - חציב",
    file: "/verdicts/bramat-hatziv.pdf",
  },
  {
    title: "אולניק - בר\"ע - סמכות מקומית",
    file: "/verdicts/olnik-local-jurisdiction.pdf",
  },
];

const thanks = [
  "מרילין שביט",
  "מכתב תודה",
  "שלומי דגון",
  "עדי זמיר",
  "אמיר בן דוד",
  "שרון עמר מושב מסלול",
  "ערד הנדסה",
  "גלי ודניאל דייגי",
  "רומית ראובני",
  "עו\"ד שי כהן",
  "מישל בנסטי",
  "אליקו שטיחים",
  "יעל אבס",
  "עדי מוזס",
  "שי אסרף, חברת ESS",
  "מיכל וחמיה אוהד",
  "יצחק נדר",
  "איתן לב ארי",
  "חנן קלין",
  "יהושוע מאירי ליכטר",
  "יפה חורונזיצקי",
  "צפרירי יעקב",
  "שלום שמואל",
  "רונית צמח",
  "יואל",
  "אבוחצירה",
  "ארמונד אסל",
  "מכניקה עדינה",
  "משה עמרם",
  "גדי פורטל",
  "גיל גורביץ",
  "שלמה בנס",
  "פנינה יצחקי",
  "אריק ברמן",
  "אבישי זאבי",
  "גולן את הורנשטיין",
  "דיוואני ויטוריו",
  "שלום ודוד בוסקילה",
  "בת שבע אפרים",
  "רפי אורפלי",
  "גורגט שלמה",
  "ציונה אוחנה",
  "מובילי צפון הנגב",
  "טויריפיק",
  "אתיס מתוקים",
  "יעקב טקו",
  "יאיר פרג",
  "שרה אימברי",
  "משפחת תנעמי",
  "אסף ואור",
  "צרויה גידול ירקות ועופות",
  "אויזרת ציונה ורוברט",
  "המלצה לשירותו של עו\"ד יוסי בן חמו",
  "גלצר בוקסנשפר",
  "מ צפון הנגב",
  "מסיעי שדרות",
  "עזרא לוי",
  "ש.י.א. אחים שמואלי תעשיות בע\"מ",
  "נתנאל וזמירה חג'בי",
  "גצלר ביקסנשפנר חשמל בע\"מ",
  "כהן מרים",
  "חנה ואבי ספורטה",
  "חוות ב.ר בע\"מ",
  "הסעות מוני סיטון בע\"מ",
  "אורן אשטיבקר",
  "אבי חלוץ דלי קרים אשדוד",
];

const testimonialFiles = {
  "מרילין שביט": "/testimonials/marilyn-shavit.pdf",
  "מכתב תודה": "/testimonials/thank-you-letter.pdf",
  "שלומי דגון": "/testimonials/shlomi-dagon.pdf",
  "עדי זמיר": "/testimonials/adi-zamir.pdf",
  "אמיר בן דוד": "/testimonials/amir-ben-david.pdf",
  "שרון עמר מושב מסלול": "/testimonials/sharon-amar-moshav-maslul.docx",
  "ערד הנדסה": "/testimonials/arad-engineering.pdf",
  "גלי ודניאל דייגי": "/testimonials/gali-daniel-dayagi.pdf",
  "רומית ראובני": "/testimonials/romit-reuveni.pdf",
  "עו\"ד שי כהן": "/testimonials/adv-shai-cohen.pdf",
  "מישל בנסטי": "/testimonials/michel-benisti.pdf",
  "אליקו שטיחים": "/testimonials/eliko-carpets.pdf",
  "יעל אבס": "/testimonials/yael-abbas.pdf",
  "עדי מוזס": "/testimonials/adi-moses.pdf",
  "שי אסרף, חברת ESS": "/testimonials/shai-asaraf-ess.pdf",
  "מיכל וחמיה אוהד": "/testimonials/michal-chemya-ohad.pdf",
  "יצחק נדר": "/testimonials/itzhak-neder.pdf",
  "איתן לב ארי": "/testimonials/eitan-lev-ari.pdf",
  "חנן קלין": "/testimonials/hanan-klein.docx",
  "יהושוע מאירי ליכטר": "/testimonials/yehoshua-meiri-lichter.pdf",
  "יפה חורונזיצקי": "/testimonials/yafa-choronzitzky.pdf",
  "צפרירי יעקב": "/testimonials/tzafriri-yaakov.pdf",
  "שלום שמואל": "/testimonials/shalom-shmuel.pdf",
  "רונית צמח": "/testimonials/ronit-tzemach.pdf",
  "יואל": "/testimonials/yoel.pdf",
  "אבוחצירה": "/testimonials/abuhatzira.pdf",
  "ארמונד אסל": "/testimonials/armond-assel.pdf",
  "מכניקה עדינה": "/testimonials/fine-mechanics.pdf",
  "משה עמרם": "/testimonials/moshe-amram.pdf",
  "גדי פורטל": "/testimonials/gadi-portal.pdf",
  "גיל גורביץ": "/testimonials/gil-gurevich.pdf",
  "שלמה בנס": "/testimonials/shlomo-bens.pdf",
  "פנינה יצחקי": "/testimonials/pnina-itzhaki.pdf",
  "אריק ברמן": "/testimonials/arik-berman.pdf",
  "אבישי זאבי": "/testimonials/avishai-zeevi.pdf",
  "גולן את הורנשטיין": "/testimonials/golan-et-hornstein.pdf",
  "דיוואני ויטוריו": "/testimonials/diwani-vitorio.pdf",
  "שלום ודוד בוסקילה": "/testimonials/shalom-david-buskila.pdf",
  "בת שבע אפרים": "/testimonials/bat-sheva-efraim.pdf",
  "רפי אורפלי": "/testimonials/rafi-orfali.pdf",
  "גורגט שלמה": "/testimonials/gorget-shlomo.pdf",
  "אריה": "/testimonials/arie.pdf",
  "ציונה אוחנה": "/testimonials/tziona-ohana.pdf",
  "מובילי צפון הנגב": "/testimonials/movilei-tzafon-hanegev.pdf",
  "מ צפון הנגב": "/testimonials/m-zafon-hanegev.pdf",
  "טויריפיק": "/testimonials/toyrific.pdf",
  "אתיס מתוקים": "/testimonials/atis-metukim.pdf",
  "יעקב טקו": "/testimonials/yaakov-tako.pdf",
  "יאיר פרג": "/testimonials/yair-pereg.pdf",
  "שרה אימברי": "/testimonials/sara-imbari.pdf",
  "משפחת תנעמי": "/testimonials/tanami-family.pdf",
  "המלצה לשירותו של עו\"ד יוסי בן חמו": "/testimonials/recommendation-for-adv-yossi-ben-hamo.pdf",
  "אסף ואור": "/testimonials/assaf-and-or.pdf",
  "צרויה גידול ירקות ועופות": "/testimonials/tzruya-vegetables-poultry.pdf",
  "אויזרת ציונה ורוברט": "/testimonials/avizeret-tziona-robert.pdf",
  "גלצר בוקסנשפר": "/testimonials/gletzer-boksenchper.pdf",
  "מסיעי שדרות": "/testimonials/masiei-sderot.pdf",
  "עזרא לוי": "/testimonials/ezra-levi.pdf",
  "ש.י.א. אחים שמואלי תעשיות בע\"מ": "/testimonials/shia-shmueli-industries.pdf",
  "נתנאל וזמירה חג'בי": "/testimonials/netanel-zmira-hagbi.pdf",
  "גצלר ביקסנשפנר חשמל בע\"מ": "/testimonials/getzler-biksenchpener-electric.pdf",
  "כהן מרים": "/testimonials/miriam-cohen.pdf",
  "חנה ואבי ספורטה": "/testimonials/hana-avi-sporta.pdf",
  "חוות ב.ר בע\"מ": "/testimonials/br-farm.pdf",
  "הסעות מוני סיטון בע\"מ": "/testimonials/moni-siton-transport.pdf",
  "אורן אשטיבקר": "/testimonials/oren-ashtivker.pdf",
  "אבי חלוץ דלי קרים אשדוד": "/testimonials/avi-halutz-deli-cream-ashdod.pdf",
};

function normalizeSearch(value) {
  return value.trim().toLowerCase();
}

function setMeta(name, content, attribute = "name") {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function App() {
  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("sent") === "1" ? "contact-success" : "home";
  });
  const [lang, setLang] = useState("he");
  const [activeService, setActiveService] = useState("");
  const [contrast, setContrast] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = ui[lang];
  const contactInfo = lang === "he" ? contact : contactEn;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const fallback = seoContent[lang].home;
    const currentSeo = seoContent[lang][page] || fallback;

    document.title = currentSeo.title;
    setMeta("description", currentSeo.description);
    setMeta("og:title", currentSeo.title, "property");
    setMeta("og:description", currentSeo.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", currentSeo.title);
    setMeta("twitter:description", currentSeo.description);
  }, [lang, page]);

  function navigate(nextPage) {
    setPage(nextPage);
    if (window.location.search) {
      window.history.replaceState({}, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={contrast ? "app high-contrast" : "app"} dir={lang === "he" ? "rtl" : "ltr"}>
      <Header page={page} navigate={navigate} lang={lang} setLang={setLang} t={t} />
      <main id="main">
        {page === "home" && (
          <Home
            navigate={navigate}
            activeService={activeService}
            setActiveService={setActiveService}
            lang={lang}
            contactInfo={contactInfo}
          />
        )}
        {page === "about" && <About lang={lang} />}
        {page === "employers" && <Employers lang={lang} />}
        {page === "article" && <Article lang={lang} />}
        {page === "verdicts" && <Verdicts lang={lang} />}
        {page === "links" && <Links lang={lang} />}
        {page === "thanks" && <Thanks lang={lang} />}
        {page === "contact" && <Contact lang={lang} contactInfo={contactInfo} navigate={navigate} />}
        {page === "contact-success" && <ContactSuccess lang={lang} navigate={navigate} />}
      </main>
      <button className="accessibility" onClick={() => setContrast((value) => !value)}>
        {t.accessibility}
      </button>
      <MobileActions lang={lang} />
      <Footer year={year} navigate={navigate} lang={lang} t={t} />
    </div>
  );
}

function Header({ page, navigate, lang, setLang, t }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="container header-inner">
        <button className="brand" onClick={() => navigate("home")} aria-label={t.homeLabel}>
          <span className="brand-symbol">YB</span>
          <span>
            <strong>{t.firmName}</strong>
            <small>{t.firmType}</small>
          </span>
        </button>
        <nav aria-label={lang === "he" ? "ניווט ראשי" : "Primary navigation"}>
          {navItems[lang].map(([id, label]) => (
            <button key={id} className={page === id ? "active" : ""} onClick={() => navigate(id)}>
              {label}
            </button>
          ))}
        </nav>
        <div className="language-switch" aria-label={lang === "he" ? "בחירת שפה" : "Language selection"}>
          <button className={lang === "he" ? "active" : ""} onClick={() => setLang("he")}>
            עברית
          </button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
            English
          </button>
        </div>
      </div>
    </header>
  );
}

function Home({ navigate, activeService, setActiveService, lang, contactInfo }) {
  const isHebrew = lang === "he";
  const homeText = isHebrew
    ? {
        eyebrow: "דיני עבודה | ביטוח לאומי | אובדן כושר עבודה | ייעוץ למעסיקים וחברות",
        title: "יוסי בן חמו משרד עורכי דין",
        intro:
          "ייצוג משפטי ממוקד ומקצועי בדיני עבודה, ביטוח לאומי ואובדן כושר עבודה, מתוך היכרות מעמיקה עם זכויות עובדים, חובות מעסיקים והדרך למימושן.",
        consult: "קביעת פגישת ייעוץ",
        about: "אודות המשרד",
        focusTitle: "תחומי עיסוק מרכזיים",
        focusEmployers: "ייעוץ למעסיקים וחברות",
        homeAria: "אודות המשרד בדף הבית",
        contactAria: "פרטי יצירת קשר",
        contactEyebrow: "יצירת קשר",
        contactTitle: "לתיאום פגישת ייעוץ",
        address: "כתובת",
        phone: "טלפון",
        email: "דוא\"ל",
        hours: "שעות פעילות",
        paragraphs: [
          'משרד עורכי דין בן חמו מעניק טווח רחב של שירותים משפטיים בתחומי דיני עבודה השונים ובכלל זה הלנת שכר, שעות נוספות, תנאים סוציאליים, פנסיה, קרן השתלמות, פיצוי פיטורים, זכויות הקבועות בהסכמים קיבוציים/אישיים, ייצוג בבתי הדין לעבודה , תביעות לביטוח לאומי לרבות עררים למל"ל וערעורים לביה"ד לעבודה וכן תביעות אובדן כושר עבודה.',
          "למשרד ניסיון עשיר בייצוג עובדים ומעבידים במגוון רחב של סוגיות בתחומי דיני עבודה והוא מעודכן בכל עת בחידושי הפסיקה ועדכוני החקיקה. כמו כן, השירותים המשפטיים המקיפים בתחום משפטי אחד לצד היחס האישי והאדיב הניתנים לכל לקוח, תורמים לחיזוק המוניטין של המשרד כמשרד ממוקד ומקצועי השם את הלקוח במרכז העשייה.",
          "בראש המשרד עומד עורך דין מקצועי ואמין בעל היכרות מעמיקה בתחומים דיני עבודה, דיני הביטוח הלאומי ודיני הביטוח בפרט (אבדן כושר עבודה). כמו כן, המשרד מסתייע במומחים מתחומי הרפואה השונים, המגדילים בעשרות מונים את סיכויי הלקוחות לממש את זכויותיהם.",
        ],
      }
    : {
        eyebrow: "Labor Law | National Insurance | Loss of Work Capacity | Counsel for Employers",
        title: "Yossi Ben Hamo Law Office",
        intro:
          "Focused and professional legal representation in labor law, National Insurance and loss of work capacity, with in-depth understanding of employee rights, employer obligations and the path to realizing them.",
        consult: "Schedule a Consultation",
        about: "About the Office",
        focusTitle: "Main Practice Areas",
        focusEmployers: "Counsel for Employers & Companies",
        homeAria: "Office overview on the home page",
        contactAria: "Contact details",
        contactEyebrow: "Contact",
        contactTitle: "Schedule a Consultation",
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Hours",
        paragraphs: [
          "Ben Hamo Law Office provides a wide range of legal services in the fields of labor law, including wage delay, overtime, social benefits, pension, study funds, severance pay, rights under collective and personal agreements, representation before labor courts, National Insurance claims, appeals to the NII and appeals before the labor court, as well as loss of work capacity claims.",
          "The office has extensive experience representing employees and employers in a broad range of labor-law matters and remains current with developments in case law and legislation. Its focused legal services, combined with personal and courteous service, strengthen the office's reputation as a professional practice that places the client at the center.",
          "The office is headed by a professional and reliable attorney with deep familiarity with labor law, National Insurance law and insurance law, particularly loss of work capacity. The office also works with medical experts from various fields, improving clients' ability to realize their rights.",
        ],
      };

  function focusService(serviceId) {
    setActiveService(serviceId);
    document.getElementById(`service-${serviceId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-practice-links" aria-label={homeText.focusTitle}>
              {serviceCards.map((card, index) => (
                <React.Fragment key={card.id}>
                  <button onClick={() => focusService(card.id)}>
                    {card.id === "employers"
                      ? homeText.focusEmployers
                      : isHebrew
                        ? card.title
                        : card.titleEn}
                  </button>
                  {index < serviceCards.length - 1 && <span aria-hidden="true">|</span>}
                </React.Fragment>
              ))}
            </div>
            <h1>{homeText.title}</h1>
            <p>{homeText.intro}</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => navigate("contact")}>
                {homeText.consult}
              </button>
              <button className="secondary" onClick={() => navigate("about")}>
                {homeText.about}
              </button>
            </div>
          </div>
          <div className="hero-focus" aria-label={homeText.focusTitle}>
            <span>{homeText.focusTitle}</span>
            {serviceCards.map((card) => (
              <button key={card.id} onClick={() => focusService(card.id)}>
                {card.id === "employers"
                  ? homeText.focusEmployers
                  : isHebrew
                    ? card.title
                    : card.titleEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container home-text" aria-label={homeText.homeAria}>
        {homeText.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="container service-grid" aria-label="תחומי שירות">
        {serviceCards.map((card) => (
          <article
            id={`service-${card.id}`}
            className={activeService === card.id ? "service-card selected" : "service-card"}
            key={card.title}
          >
            <h2>{isHebrew ? card.title : card.titleEn}</h2>
            <p>{isHebrew ? card.text : card.textEn}</p>
          </article>
        ))}
      </section>

      <section className="container article-preview">
        <div>
          <p className="eyebrow">{isHebrew ? "מאמר מקצועי" : "Professional Article"}</p>
          <h2>{isHebrew ? "מגמה חדשה באופן בחירת עורך דין - התמחות ייחודית" : "A New Trend in Choosing an Attorney - Focused Expertise"}</h2>
          <p>
            {isHebrew
              ? "מאמר מקצועי העוסק בחשיבות בחירת עורך דין בעל התמחות ייחודית, ניסיון מעשי והיכרות עדכנית עם הפסיקה והחקיקה בתחום."
              : "A professional article on the importance of choosing an attorney with focused expertise, practical experience and up-to-date knowledge of case law and legislation."}
          </p>
        </div>
        <button className="secondary article-button" onClick={() => navigate("article")}>
          {isHebrew ? "קריאת המאמר" : "Read Article"}
        </button>
      </section>

      <section className="home-contact-band" aria-label={homeText.contactAria}>
        <div className="container home-contact-inner">
          <div>
            <p className="eyebrow">{homeText.contactEyebrow}</p>
            <h2>{homeText.contactTitle}</h2>
          </div>
          <dl className="home-contact-list">
            <div>
              <dt>{homeText.address}</dt>
              <dd>{contactInfo.address}</dd>
            </div>
            <div>
              <dt>{homeText.phone}</dt>
              <dd>{contactInfo.phone}</dd>
            </div>
            <div>
              <dt>{homeText.email}</dt>
              <dd>{contactInfo.email}</dd>
            </div>
            <div>
              <dt>{homeText.hours}</dt>
              <dd>{contactInfo.hours}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

function About({ lang }) {
  if (lang === "en") {
    return (
      <Page eyebrow="Office Profile" title="About Us">
        <p>
          The Ben Hamo Law Office provides a wide range of legal services in the various fields of
          labor law, including wage delay, overtime, social benefits, pension, study funds, severance
          pay, rights prescribed in collective agreements and personal employment agreements,
          representation before the labor courts, National Insurance claims, including appeals to the
          NII and appeals before the labor court, as well as loss of work capacity claims.
        </p>
        <p>
          The office has extensive experience representing employees and employers in a wide variety of
          labor-law matters, and remains up to date at all times on developments in case law and
          legislative updates. Furthermore, its comprehensive legal services within a focused legal
          discipline, together with the personal and courteous attention given to each client, reinforce
          the office's reputation as a focused and professional firm that places the client at the
          center of its work.
        </p>
        <section className="attorney-profile" aria-label="Attorney profile">
          <img src={yossiProfile} alt="Adv. Yossi Ben Hamo" loading="lazy" />
          <div>
            <span>Head of the Office</span>
            <h2>Adv. Yossi Ben Hamo</h2>
            <p>
              The office is headed by a professional and reliable attorney who is thoroughly proficient
              in labor law, social security law and insurance law, particularly loss of work capacity.
              The office also works with experts in various medical fields, which significantly
              increases clients' prospects of realizing their rights.
            </p>
          </div>
        </section>
        <p>
          The prospects of success in claims depend first and foremost on the manner in which the legal
          pleadings are prepared, the analysis of all disputes forming the basis of the statement of
          claim, and adherence to an active case-management strategy while continuously considering
          settlement proposals at every stage of the proceedings, provided that the client's rights are
          not prejudiced or diminished.
        </p>
        <h2>The following are the services you can receive at our office:</h2>
        <Checklist items={aboutItemsEn} />
      </Page>
    );
  }

  return (
    <Page eyebrow="פרופיל המשרד" title="אודותינו">
      <p>
        משרד עורכי דין בן חמו מעניק טווח רחב של שירותים משפטיים בתחומי דיני עבודה השונים ובכלל זה
        הלנת שכר, שעות נוספות, תנאים סוציאליים, פנסיה, קרן השתלמות, פיצוי פיטורים, זכויות הקבועות
        בהסכמים קיבוציים/אישיים, ייצוג בבתי הדין לעבודה , תביעות לביטוח לאומי לרבות עררים למל"ל
        וערעורים לביה"ד לעבודה וכן תביעות אובדן כושר עבודה.
      </p>
      <p>
        למשרד ניסיון עשיר בייצוג עובדים ומעבידים במגוון רחב של סוגיות בתחומי דיני עבודה והוא מעודכן
        בכל עת בחידושי הפסיקה ועדכוני החקיקה. כמו כן, השירותים המשפטיים המקיפים בתחום משפטי אחד לצד
        היחס האישי והאדיב הניתנים לכל לקוח, תורמים לחיזוק המוניטין של המשרד כמשרד ממוקד ומקצועי השם
        את הלקוח במרכז העשייה.
      </p>
      <section className="attorney-profile" aria-label="פרופיל עורך הדין">
        <img src={yossiProfile} alt="עו״ד יוסי בן חמו" loading="lazy" />
        <div>
          <span>בראש המשרד</span>
          <h2>עו״ד יוסי בן חמו</h2>
          <p>
            בראש המשרד עומד עורך דין מקצועי ואמין בעל היכרות מעמיקה בתחומים דיני עבודה, דיני הביטוח
            הלאומי ודיני הביטוח בפרט (אבדן כושר עבודה). כמו כן, המשרד מסתייע במומחים מתחומי הרפואה
            השונים, המגדילים בעשרות מונים את סיכויי הלקוחות לממש את זכויותיהם.
          </p>
        </div>
      </section>
      <p>
        סיכויי הצלחת התביעות תלויים בראש ובראשונה באופן הכנת כתבי בית הדין, ניתוח מלוא המחלוקות נשוא
        כתב התביעה והקפדה על אסטרטגיית ניהול תיק אקטיבית תוך כדי בחינה מתמדת של הצעות פשרה לסיום
        התיק בכל שלב של ניהול התיק ובלבד שזכויותיו של העובד לא ייפגעו ו/או ייגרעו.
      </p>
      <h2>להלן השירותים אשר תוכלו לקבל במשרדינו:</h2>
      <Checklist items={aboutItems} />
      <h2>שכר טרחה</h2>
      <p>
        פגישות הייעוץ במשרד כרוכות בתשלום בהתאם לתעריפים הנהוגים במשרד. המשרד מגלה גמישות בכל הנוגע
        להסכמי שכר הטרחה ולתנאי התשלום עם זאת יובהר כי משרדנו גובה שכר טרחה בהתאם לפעולות המשפטיות
        הנדרשות בשים לב למידת ההשקעה הנדרשת בכל הליך והליך. משרדנו, אשר ידוע במוניטין ובשמו הטוב,
        אינו מציע פתרונות קסם ללקוחות, וכאשר אין מקום לניהול הליך משפטי משרדנו יבהיר זאת ללקוח ויציג
        בפניו את סיכויי התובענה.
      </p>
      <blockquote>
        הנכם מוזמנים ליצור קשר עם מזכירתו של עו"ד יוסי בן חמו לתיאום פגישת ייעוץ ראשונית.
      </blockquote>
    </Page>
  );
}

function Employers({ lang }) {
  if (lang === "en") {
    return (
      <Page eyebrow="Employer Services" title="Counsel for Employers and Companies">
        <p>
          The office provides counsel to private employers and companies, retainer services, ongoing
          legal advice and guidance for accounting departments regarding the Wage Protection Law,
          including Amendment 24.
        </p>
        <p>
          Adv. Ben Hamo's focus on labor law enables professional legal counsel for companies and
          employers regarding employment practices, drafting agreements, defense against claims and
          ongoing legal advice.
        </p>
        <p>
          Professional legal advice can prevent unnecessary disputes, and written employment
          arrangements that comply with the law may prevent financial harm to employers upon
          termination of employment.
        </p>
        <h2>Services for Companies and Employers</h2>
        <Checklist items={employerItemsEn} />
      </Page>
    );
  }

  return (
    <Page eyebrow="שירות למעסיקים" title="ייעוץ למעסיקים וחברות">
      <p>
        ייעוץ למעסיקים פרטיים וחברות- שירותי ריטיינר, שירותי ייעוץ שוטפים, ליווי מחלקות הנה"ח של
        חברות בכל הקשור עם חוק הגנת השכר ובכלל זה תיקון 24 לחוק.
      </p>
      <p>
        התמחותו של עו"ד בן חמו בדיני העבודה בפרט ובמשפט העבודה בכלל מאפשרת שירותי ייעוץ מקצועיים
        לחברות ומעסיקים, בכל הנוגע לאופן העסקת עובדים, עריכת חוזים, ייצוג מפני תביעות וייעוץ משפטי
        שוטף בסוגיות הנוגעות לתחום דיני עבודה.
      </p>
      <p>
        כיום, על פי חוק הודעה על תנאי עבודה, מחויב מעסיק להודיע בכתב לעובד בסמוך למועד תחילת עבודתו
        מהם תנאי העבודה ובכלל זה תנאי שכר וסוציאליים באופן שאינו מותיר מקום לפרשנות, יחד עם תיקון 24
        לחוק הגנת השכר נוצרה סיטואציה המגלמת לתוכה בהירות ושקיפות של תנאי העבודה התורמת לוודאות מלאה
        של יחסי העבודה בניגוד למצב של חוסר בהירות שאינו מועיל למי מהצדדים.
      </p>
      <p>
        ייעוץ עם עורך דין המתמחה ומתמקצע בתחום דיני עבודה, יכול לחסוך אלפי שקלים בהוצאות על
        התדיינויות מיותרות, ועריכת חוזים והסדרת יחסי העבודה בכתב ובהתאם לדין עשויה למנוע אי נעימויות
        ובעטיים נזקים כלכליים למעסיק עם סיום תקופת העבודה.
      </p>
      <h2>השירותים הינם רחבי היקף:</h2>
      <Checklist items={employerItems} />
    </Page>
  );
}

function Article({ lang }) {
  if (lang === "en") {
    return (
      <Page eyebrow="Articles" title="A New Trend">
        <h2>A New Trend in Choosing an Attorney - Focused Expertise</h2>
        <p className="muted">By: Lawyer and More - Legal Portal</p>
        <p>
          Where there are many attorneys, choosing the right one can be difficult. Entrusting a legal
          matter to an attorney is significant, and may influence the outcome of the case. Therefore,
          the decision should be based on several important considerations, foremost among them focused
          expertise.
        </p>
        <h2>Professionalism and Expertise</h2>
        <p>
          It is important to choose an attorney who focuses on the legal field relevant to your matter.
          Years of experience in a specific field are reflected in knowledge of legislation, case law,
          court practice and the quality of legal arguments and drafting.
        </p>
        <h2>A Large Firm Is Not Always What You Think</h2>
        <p>
          Large firms may have impressive achievements, but the attorney handling your matter may not
          be the one involved in those achievements. Personal attention can also become fragmented when
          a case passes between several attorneys.
        </p>
        <h2>Assessing Prospects</h2>
        <p>
          A specialist attorney can assess the prospects of a case based on the legal position, the
          documents presented and experience with similar cases.
        </p>
        <p>
          Choosing an attorney who specializes in your field increases the chances of success and leads
          to a more informed, professional and precise process.
        </p>
      </Page>
    );
  }

  return (
    <Page eyebrow="מאמרים" title="מגמה חדשה">
      <h2>מגמה חדשה באופן בחירת עורך דין - התמחות ייחודית</h2>
      <p className="muted">מאת: עורך דין ועוד - הפורטל המשפטי המקיף ברשת</p>
      <h2>מבוא</h2>
      <p>
        במקום בו רבים עורכי דין, קשה הבחירה עד מאד. הפקדת תיק משפטי בידי עורך דין אינה עניין של מה
        בכך, ולעיתים היא שתנווט ותכריע את גורל התיק. לכן ההחלטה על בחירת עורך דין צריכה להיות על
        בסיס מספר כללים חשובים, כאשר החשוב ביניהם הוא ההתמחות הייחודית.
      </p>
      <h2>מקצועיות והתמחות - אין חכם כבעל הנסיון</h2>
      <p>
        חשוב לבחור עורך דין המתמחה באופן ייחודי בתחום המשפטי בו עוסק המקרה שלכם. הדבר נכון במיוחד
        למשל בתחום המשפט האזרחי בו עורכי דין רבים מתמחים במספר תחומים במשרד אחד: נזיקין, הוצאה
        לפועל, דיני עבודה, משפט מסחרי ועוד. כמובן שיש לבחון האם מדובר במשרד עורכי דין בעל מחלקות
        שונות לכל תחום, או מספר שותפים, כי אז המשרד מתמקצע בכל תחום בנפרד, או שמא מדובר במשרד של
        עורכי דין אשר מטפלים ב"כל הבא ליד".
      </p>
      <p>
        החשש הינו שלעורך דין אין די ניסיון בכל התחומים בהם הוא מטפל וייתכנו מקרים, שטיפול במקרה
        מסויים הוא רק פעילות לוואי לתחום התמחותו.
      </p>
      <p>
        הניסיון הנרכש במשך שנים של התמקצעות בתחום ספציפי בא לידי ביטוי בהכרת החקיקה והפסיקה באופן
        מעמיק לרבות הכרת מקרי הקצה, בהכרת אופן התנהלות המשפטים בתחום הספציפי, הבאה לכדי מקצוענות את
        איכות הטיעונים והניסוחים ואף הכרה של הגורמים העוסקים בתחום - עורכי דין ושופטים. כל אלו
        מגדילים באופן חד את הסיכוי שלך לקבל ייצוג יעיל ואיכותי שיביא להצלחה, בו בזמן עם יכולת ניתוח
        טובה יותר של הסיכויים והסיכונים במקרה הספציפי.
      </p>
      <p>
        חשוב לבחון האם עיקר פעילותו של עורך הדין והתמחותו הינה בבעיה המשפטית שבידיכם. לעיתים הדבר
        אינו פשוט כפי שנשמע, מאחר ועלולים להיות מקרים שעורך דין יציג עצמו כמומחה, על אף שעסק בתחום
        הנדרש רק פעמים ספורות בעבר. דרך טובה להתמודדות עם מצב זה הינה לבקש מעורך הדין דוגמאות
        והצלחות במקרים דומים שטיפל בהם בעבר. פעמים רבות התמחות של עורך דין בתחום ספציפי באה לידי
        ביטוי במאמרים וכתבות שפרסם, בין אם בספרות מקצועית ובין אם בפרסום באינטרנט ובמאגרי מידע
        אחרים.
      </p>
      <p>
        רצוי לעיין בקורות החיים של עורך הדין, לרבות מספר שנות הוותק שלו בתחום ותיאור התחומים בהם הוא
        מתמחה. יש להבין כי העולם המשפטי דינמי מאד וחלים שינויים רבים באופן שוטף הן בחקיקה והן
        בפסיקה. הדבר חשוב במיוחד לאור העובדה שלעיתים בתי משפט שונים מקבלים החלטות שונות למקרים
        דומים, מצב המספק טיעונים ונימוקים מגוונים לעורך דין, אבל זאת רק בתנאי שהוא אכן מומחה בתחומו
        ומתעדכן באופן שוטף לגבי הפסיקה בתחום.
      </p>
      <p>
        עורך דין המתמחה בתחום מסוים יתבלט בכל שלב של הטיפול בבקשה - החל משלב הערכת סיכויי המקרה,
        דרך אופן יצירת הקשר עם הצד השני והצגת הטיעונים וכלה בשלב המשא ומתן וההכרעה במקרים של הסדרי
        פשרה, שהולכים ורבים בהליכי המשפט השונים. אין כך הדבר לגבי עורכי דין העוסקים במספר תחומים כי
        אז בהחלט ייתכן כי עורך הדין אינו שולט על בוריו בחלק מהתחומים המשפטיים ואף ייתכן שאין במשרדו
        ספרות משפטית ספציפית הנוגעת למקרה שלכם.
      </p>
      <p>
        יצוין כי עורך דין אשר לא צבר ניסיון בתיקים דומים, יתקשה לטפל במקצועיות הנדרשת בתחום משפטי
        חדש או תחום משפטי המהווה פעילות משנית לפעילות העיקרית של משרדו, ויישום ניסיון וידע משפטי
        מתחום אחד למשנהו עלולה להביא לתוצאה הפוכה מהמצופה.
      </p>
      <h2>משרד גדול - לא תמיד מה שחשבת</h2>
      <p>
        משרדים גדולים יכולים להציג רשימת הישגים מרשימה, אולם פעמים רבות לא תזכו דווקא לטיפולו של
        עורך דין שלקח חלק ברשימה זו. במשרדים אלו תמצאו קרוב לוודאי עורכי דין מקצועיים עם ניסיון רב,
        אך בהחלט ייתכן שבפועל הטיפול בכם יבוצע על ידי עורך דין זוטר או אפילו מתמחה. סוגיה נוספת היא
        הטיפול האישי - במשרד גדול הטיפול בבקשתכם עלול לעבור בין מספר עורכי דין לאורך תהליך הטיפול,
        כתלות בצרכי המשרד או בתחלופה במשרד.
      </p>
      <h2>הערכת סיכויים</h2>
      <p>
        אמרה נפוצה בתחום אומרת כי ידוע איך נכנסים לבית המשפט, לא ברור איך יוצאים ממנו. ואולם, עורך
        דין מומחה יכול להעריך את סיכויי התיק, על סמך בחינת המצב המשפטי, המסמכים שהוצגו בפניו
        והתרשמותו הכללית, וזאת על בסיס ניסיונו האישי במקרים דומים והיכרות מעמיקה של הפסיקה בתחום.
      </p>
      <p>
        שימו לב, לא ניתן לחזות מראש מה יהיו תוצאות התיק, וזאת עקב המורכבות הרבה של תהליך השיפוט, בו
        לעיתים מקרים דומים נפסקים אחרת או מצב בו שוני בפרט זה או אחר למול מקרה דומה מביאים לתוצאה
        שונה. עם זאת, עורך דין מומחה בעל ניסיון בתיקים דומים יוכל לתת לכם הערכה זהירה של סיכויי התיק
        ובמיוחד האם יש עילה משפטית מבוססת דיה בנסיבות המקרה שלכם. עורך דין שכזה יוכל אף לבחור בצורה
        מושכלת בין דרכי הטיפול בתיק זה, אם לנקוט בטקטיקה של מכתב אזהרה, הצעה למשא ומתן או פתיחה
        בהליכי תביעה.
      </p>
      <p>
        הערכת סיכויים צריכה להתבצע לא רק ברמה של סיכויי הצלחה כשלעצמם, אלא אף בבחינת כדאיות כלכלית.
        עורך דין מיומן יוכל להציג בפניכם סקירה של מכלול העלויות הצפויות בתיק, לרבות הטלת הוצאות
        במקרה הפסד בתביעה, וזאת לאור סיכויי המקרה. גם במקרה של סיכוי מוערך טוב להצלחה בתיק, מומלץ
        לבחון כבר בשלב ראשוני האם לאחר ניכוי שכר הטרחה וההוצאות השונות בתיק (אגרות למשל), עדיין יש
        כדאיות כלכלית לנהל את ההליכים.
      </p>
      <h2>סיכום</h2>
      <p>
        בחירת עורך דין מומחה בתחום פנייתכם תגדיל משמעותית את סיכויי הזכייה שלכם ותהליך בחירה מושכל
        יביא לתוצאות טובות יותר עבורכם ושביעות רצון רבה יותר מהטיפול המשפטי לו זכיתם.
      </p>
    </Page>
  );
}

function Verdicts({ lang }) {
  const isHebrew = lang === "he";
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query);
  const filteredVerdicts = verdicts.filter((item) => normalizeSearch(item.title).includes(normalizedQuery));

  return (
    <Page eyebrow={isHebrew ? "מסמכים משפטיים" : "Legal Documents"} title={isHebrew ? "פסקי דין" : "Verdicts"}>
      <p>{isHebrew ? "רשימת פסקי הדין והמסמכים שהופיעה באתר המקורי." : "A list of verdicts and legal documents from the original website."}</p>
      <label className="search-field">
        <span>{isHebrew ? "חיפוש בפסקי דין" : "Search verdicts"}</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={isHebrew ? "הקלדה לפי שם מסמך..." : "Type a document name..."}
        />
      </label>
      <div className="document-list">
        {filteredVerdicts.map((item) => (
          <a className="document-row document-link" href={item.file} target="_blank" rel="noreferrer" key={item.title}>
            <span>{isHebrew ? "מסמך" : "Document"}</span>
            <strong>{item.title}</strong>
            <em>{isHebrew ? "פתיחה ב-PDF" : "Open PDF"}</em>
          </a>
        ))}
      </div>
      {filteredVerdicts.length === 0 && (
        <p className="empty-state">{isHebrew ? "לא נמצאו מסמכים התואמים לחיפוש." : "No matching documents were found."}</p>
      )}
    </Page>
  );
}

function Links({ lang }) {
  const isHebrew = lang === "he";

  return (
    <Page eyebrow={isHebrew ? "מקורות מידע שימושיים" : "Useful Resources"} title={isHebrew ? "קישורים" : "Useful Links"}>
      <p className="links-intro">
        {isHebrew
          ? "קישורים לגופים רשמיים ורלוונטיים בתחומי עבודה, שירות המדינה וביטוח לאומי."
          : "Links to official and relevant resources in the fields of labor, civil service and National Insurance."}
      </p>
      <div className="links-grid">
        {usefulLinks.map((link) => (
          <article className="resource-card" key={link.url}>
            <a className="resource-logo" href={link.url} target="_blank" rel="noreferrer" aria-label={isHebrew ? link.title : link.titleEn}>
              <img src={link.logo} alt="" loading="lazy" />
            </a>
            <span>{isHebrew ? "קישור חיצוני" : "External Link"}</span>
            <h2>{isHebrew ? link.title : link.titleEn}</h2>
            <p>{isHebrew ? link.description : link.descriptionEn}</p>
            <a className="resource-action" href={link.url} target="_blank" rel="noreferrer">
              {isHebrew ? "מעבר לאתר הרשמי" : "Open Official Website"}
            </a>
          </article>
        ))}
      </div>
    </Page>
  );
}

function ConsultationNote({ lang, compact = false }) {
  const isHebrew = lang === "he";

  return (
    <aside className={compact ? "consultation-note compact" : "consultation-note"}>
      <div className="consultation-icon" aria-hidden="true">
        ₪
      </div>
      <div>
        <h2>{isHebrew ? "פגישות ייעוץ" : "Consultation Meetings"}</h2>
        <p>
          {isHebrew
            ? "פגישות הייעוץ במשרד כרוכות בתשלום בהתאם לתעריפים הנהוגים במשרד."
            : "Consultation meetings at the office are subject to payment according to the office's customary rates."}
        </p>
      </div>
    </aside>
  );
}

function Thanks({ lang }) {
  const isHebrew = lang === "he";
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query);
  const filteredThanks = thanks.filter((name) => normalizeSearch(name).includes(normalizedQuery));

  return (
    <Page eyebrow={isHebrew ? "לקוחות ממליצים" : "Client Testimonials"} title={isHebrew ? "מכתבי תודה" : "Testimonials"}>
      <p>
        {isHebrew
          ? "עמוד זה מרכז את מכתבי התודה וההמלצות שהופיעו באתר הקיים. בשלב הבא ניתן לחבר לכל פריט את צילום המכתב המקורי או קובץ PDF."
          : "This page lists thank-you letters and testimonials from the original website. In the next stage, each item can be linked to the original letter image or PDF."}
      </p>
      <label className="search-field">
        <span>{isHebrew ? "חיפוש במכתבי תודה" : "Search testimonials"}</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={isHebrew ? "הקלדה לפי שם לקוח או חברה..." : "Type a client or company name..."}
        />
      </label>
      <div className="thanks-grid">
        {filteredThanks.map((name) => {
          const file = testimonialFiles[name];
          const label = isHebrew ? "מכתב תודה" : "Testimonial";
          const action = file
            ? isHebrew
              ? file.endsWith(".docx")
                ? "פתיחה במסמך Word"
                : "פתיחה ב-PDF"
              : file.endsWith(".docx")
                ? "Open Word document"
                : "Open PDF"
            : isHebrew
              ? "קובץ יתווסף בהמשך"
              : "File to be added";

          if (file) {
            return (
              <a className="thanks-card thanks-link" href={file} target="_blank" rel="noreferrer" key={name}>
                <span>{label}</span>
                <strong>{name}</strong>
                <em>{action}</em>
              </a>
            );
          }

          return (
            <article className="thanks-card" key={name}>
              <span>{label}</span>
              <strong>{name}</strong>
              <em>{action}</em>
            </article>
          );
        })}
      </div>
      {filteredThanks.length === 0 && (
        <p className="empty-state">{isHebrew ? "לא נמצאו מכתבי תודה התואמים לחיפוש." : "No matching testimonials were found."}</p>
      )}
    </Page>
  );
}

function Contact({ lang, contactInfo, navigate }) {
  const isHebrew = lang === "he";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      navigate("contact-success");
    } catch {
      navigate("contact-success");
    }
  }

  return (
    <Page eyebrow={isHebrew ? "נשמח לסייע" : "How Can We Help"} title={isHebrew ? "צור קשר" : "Contact"}>
      <div className="contact-grid">
        <section className="contact-panel">
          <h2>{isHebrew ? "פרטי התקשרות" : "Contact Details"}</h2>
          <p>{isHebrew ? "כתובת" : "Address"}: {contactInfo.address}</p>
          <p>{isHebrew ? "טל'" : "Phone"}: {contactInfo.phone}</p>
          <p>{isHebrew ? "פקס" : "Fax"}: {contactInfo.fax}</p>
          <p>{isHebrew ? "דוא\"ל" : "Email"}: {contactInfo.email}</p>
          <p>{isHebrew ? "שעות פעילות" : "Hours"}: {contactInfo.hours}</p>
          <a
            className="inline-map-link"
            href="https://www.google.com/maps?q=%D7%A8%D7%95%D7%98%D7%A9%D7%99%D7%9C%D7%93%2045%20%D7%A8%D7%90%D7%A9%D7%95%D7%9F%20%D7%9C%D7%A6%D7%99%D7%95%D7%9F"
            target="_blank"
            rel="noreferrer"
          >
            {isHebrew ? "פתיחה ב-Google Maps" : "Open in Google Maps"}
          </a>
          <ConsultationNote lang={lang} compact />
        </section>
        <form
          className="contact-form"
          name="contact"
          method="POST"
          action="/"
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden-field">
            <label>
              {isHebrew ? "אין למלא שדה זה" : "Do not fill this field"}
              <input name="bot-field" />
            </label>
          </p>
          <label>
            {isHebrew ? "שם מלא" : "Full Name"}
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            {isHebrew ? "טלפון" : "Phone"}
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
          <label>
            {isHebrew ? "דוא\"ל" : "Email"}
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            {isHebrew ? "פרטי הפנייה" : "Message"}
            <textarea name="message" rows="5" />
          </label>
          <button className="primary" type="submit">
            {isHebrew ? "שליחת פנייה" : "Send Inquiry"}
          </button>
        </form>
      </div>
      <div className="map">
        <iframe
          title="מפת הגעה למשרד"
          src="https://www.google.com/maps?q=%D7%A8%D7%95%D7%98%D7%A9%D7%99%D7%9C%D7%93%2045%20%D7%A8%D7%90%D7%A9%D7%95%D7%9F%20%D7%9C%D7%A6%D7%99%D7%95%D7%9F&output=embed"
          loading="lazy"
        />
      </div>
    </Page>
  );
}

function ContactSuccess({ lang, navigate }) {
  const isHebrew = lang === "he";

  return (
    <Page eyebrow={isHebrew ? "הפנייה נשלחה" : "Inquiry Sent"} title={isHebrew ? "תודה, פנייתך התקבלה" : "Thank You"}>
      <section className="success-panel">
        <div className="success-mark" aria-hidden="true">
          ✓
        </div>
        <h2>{isHebrew ? "נחזור אליך בהקדם" : "We will get back to you shortly"}</h2>
        <p>
          {isHebrew
            ? "הפנייה נשלחה למשרד בהצלחה. צוות המשרד יבחן את הפרטים ויצור קשר בהקדם האפשרי."
            : "Your inquiry has been sent to the office successfully. The team will review the details and contact you as soon as possible."}
        </p>
        <div className="success-actions">
          <button className="primary" onClick={() => navigate("home")}>
            {isHebrew ? "חזרה לדף הבית" : "Back to Home"}
          </button>
          <button className="secondary" onClick={() => navigate("contact")}>
            {isHebrew ? "פרטי התקשרות" : "Contact Details"}
          </button>
        </div>
      </section>
    </Page>
  );
}

function MobileActions({ lang }) {
  const isHebrew = lang === "he";

  return (
    <div className="mobile-actions" aria-label={isHebrew ? "פעולות מהירות" : "Quick actions"}>
      <a href={`tel:${contact.phone.replace(/-/g, "")}`}>{isHebrew ? "התקשרות" : "Call"}</a>
      <a
        href="https://www.google.com/maps?q=%D7%A8%D7%95%D7%98%D7%A9%D7%99%D7%9C%D7%93%2045%20%D7%A8%D7%90%D7%A9%D7%95%D7%9F%20%D7%9C%D7%A6%D7%99%D7%95%D7%9F"
        target="_blank"
        rel="noreferrer"
      >
        {isHebrew ? "ניווט" : "Navigate"}
      </a>
    </div>
  );
}

function Page({ eyebrow, title, children }) {
  return (
    <section className="page">
      <div className="container page-title">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="container page-content">{children}</div>
    </section>
  );
}

function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Footer({ year, navigate, lang, t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h2>{lang === "he" ? "יוסי בן חמו, משרד עורכי דין" : "Yossi Ben Hamo, Law Office"}</h2>
          <p>{t.footerSummary}</p>
        </div>
        <nav className="footer-nav" aria-label={lang === "he" ? "ניווט תחתון" : "Footer navigation"}>
          <h3>{t.footerNav}</h3>
          <button onClick={() => navigate("about")}>{lang === "he" ? "אודות" : "About"}</button>
          <button onClick={() => navigate("employers")}>{lang === "he" ? "ייעוץ למעסיקים" : "Employers"}</button>
          <button onClick={() => navigate("contact")}>{lang === "he" ? "צור קשר" : "Contact"}</button>
        </nav>
      </div>
      <p className="copyright">© {year} {t.copyright}</p>
    </footer>
  );
}

export default App;
