import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Professional Translation Services | Translation Services - Tech2globe",
  description:
    "Tech2globe - Translation Company in India. We have a tendency to work as a superior language services provider in all major global languages like French, Spanish, & German and more.",
  keywords: [
    "translation",
    "translation services",
    "language translation",
    "native translation",
    "translation solution",
    "outsourcing translation",
    "offshore translation",
    "human translation",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/translation-services",
  },
  openGraph: {
    title: "Professional Translation Services | Translation Services - Tech2globe",
    description:
      "Tech2globe - Translation Company in India. We have a tendency to work as a superior language services provider in all major global languages like French, Spanish, & German and more.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/translation-services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Translation Services | Translation Services - Tech2globe",
    description:
      "Tech2globe - Translation Company in India. We have a tendency to work as a superior language services provider in all major global languages like French, Spanish, & German and more.",
  },
};

const pageHeaderData = {
  title: "Translation Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
  { id: 3, name: "Translation Services", path: "/translation-services" },
  { id: 4, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 5, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 6, name: "Data Product Entry", path: "/data-product-entry-services" },
  { id: 7, name: "Data Entry Services", path: "/data-entry-services" },
  { id: 8, name: "Data Mining Services", path: "/data-mining-services" },
  { id: 9, name: "Data Conversion Services", path: "/data-conversion-services" },
  { id: 10, name: "Indexing Services", path: "/indexing-services" },
  { id: 11, name: "Data Analytics Services", path: "/data-analytics-services" },
  { id: 12, name: "Order Processing Services", path: "/order-processing-services" },
  { id: 13, name: "Magento Product Upload Services", path: "/magento-product-upload-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];


export default function Translation() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Translation Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <h2 className="fw-bold mb-3">Translation Services</h2>

                <ul className="nav nav-tabs transtabs" role="tablist">
                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#english">
                      English
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#german">
                      German
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#french">
                      French
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#spanish">
                      Spanish
                    </button>
                  </li>
                </ul>

                <div className="tab-content pt-5 pb-5">
                  <div className="tab-pane fade show active" id="english">
                    <p>Tech2globe is a leading translation company in India. We have a tendency to work as superior language service supplier & translation jobber. We are working for many valuable corporations, non-profits, governments, many tiny businesses too. Not simply end to end clients, however, several international translation corporations place confidence in our translation services and source to the US from time to time.</p>

                    <p>We pride ourselves not solely on the quality and accuracy of our work, however conjointly in providing wonderful client care and also the diversity of our customers. No matter how long or short your document is we are ready to translate any kind of document either it is legal documents, medical document, marriage certificate, any company report or any Death certificate. We have set our own tat time of 24 hours to complete a document.</p>

                    <p className="mb-0"><strong>Our Performance Benchmarks</strong></p>
                    <ul className="">
                      <li>Professional Experienced Translators</li>
                      <li>Translation Solutions</li>
                      <li>Quality Management</li>
                      <li>State-of-the-Art Technology</li>
                    </ul>

                    <p>We have a specialized team of highly qualified translators, editors, and proof-readers.</p>

                    <p>We have a professional team of language translation, well it’s not just translating a document, and it’s all about giving a meaning in that particular language which client needs. Here you can find complete solution accordingly your need.</p>

                    <p><strong>Why Tech2globe For Language Outsourcing</strong></p>
                    <p>It is a known fact that foreign languages will probably never disappear. Thus, the need to outsource translation becomes obvious, if you wish to explore new market segments and enter into new ventures of the domain. We constantly aim to maintain consultative relations with all our clients, in order to render authentic and error-free translations within a stipulated time frame.</p>

                    <p>If your project is cost sensitive, let us know your best-researched quote for that level of output & service and we shall beat it. But if you are looking for the best translation and not the cheapest, you’re at the right place too.</p>

                    <p><strong>Fast:</strong>A translator translates up to 2000 words per day. They always ready to fulfill your needs on time.</p>

                    <p><strong>Global:</strong>You don’t need a local vendor in your city for translation because translation service is online and global in nature. You will find finest linguists as well as most cost efficient & affordable translators in every language right here. So, you can choose accordingly & contact us any time on our Toll-Free Number- and we are also available on Skype also for queries.</p>

                    <p className="mb-0"><strong>What We Do</strong></p>
                    <p className="mb-0">- Translation</p>
                    <p className="mb-0">- Content Writing</p>
                    <p className="mb-0">- Localization</p>
                    <p className="mb-0">- Transcription</p>
                    <p className="mb-0">- Interpretation</p>
                    <p className="mb-0">- Subtitling And Voice Over</p>
                    <p className="mb-0">- Proofreading & Editing</p>
                    <p className="mb-0">- Desk Top Publishing (Dtp)</p>
                    <p>- Amazon Product Listing Services</p>

                    <p className="mb-0"><strong>Industries Covered</strong></p>
                    <p>Academic, Advertising, Automobile, Banking, Boutique, Business, Education, Digital Marketing, Food and Beverage, E-Learning, Fashion, Financial, Government, Healthcare, Hospitality, Manufacturing, Marketing, B2B, Ecommerce, Medical, Real Estate, Software, Finance, Information Technology</p>

                    <p className="mb-0"><strong>Language Catering</strong></p>
                    <p>Italian, Spanish, German, French, Dutch, Danish, Finnish, Russian, Swedish, Polish, Romanian & Arabic.</p>

                    <p>If you don’t find your preferable language in list. Don’t worry we will make resource ready for you.</p>

                    <p className="mb-0"><strong>Multiple File Format</strong></p>
                    <p>Translate Any Kind of Document. We Translate Most File Format.</p>
                  </div>

                  <div className="tab-pane fade" id="german">
                    <p>Tech2globe ist ein führendes Übersetzungsunternehmen in Indien. Wir haben die Tendenz, als übergeordneter Sprachdienstleister und Übersetzer zu arbeiten. Wir arbeiten für viele wertvolle Unternehmen, gemeinnützige Organisationen, Regierungen, viele kleine Unternehmen. Nicht nur End-to-End-Kunden, sondern mehrere internationale Übersetzungsunternehmen vertrauen auf unsere Übersetzungsdienste und liefern von Zeit zu Zeit in die USA.</p>

                    <p>Wir sind nicht nur auf die Qualität und Genauigkeit unserer Arbeit stolz, sondern auch auf die wunderbare Kundenbetreuung und die Vielfalt unserer Kunden. Unabhängig davon, wie lang oder kurz Ihr Dokument ist, wir sind bereit, jede Art von Dokument zu übersetzen, entweder juristische Dokumente, medizinische Dokumente, Heiratsurkunden, Firmenberichte oder Sterbeurkunden. Wir haben unsere eigene Zeit von 24 Stunden eingestellt, um ein Dokument mit einem bestimmten Bereich zu vervollständigen.</p>

                    <p className="mb-0"><strong>Unsere Leistungsmerkmale</strong></p>
                    <ul className="">
                      <li>Professionelle erfahrungen übersetzer</li>
                      <li>Übersetzung lösungen</li>
                      <li>Qualität Managment</li>
                      <li>Stand der Technik</li>
                    </ul>

                    <p>Wir haben ein spezialisiertes Team von hochqualifizierten Übersetzern, Redakteuren und Korrektoren.Wir haben ein professionelles Team von Sprachübersetzungen, und es ist nicht nur ein Dokument zu übersetzen, sondern es geht darum, der jeweiligen Sprache, die der Klient benötigt, eine Bedeutung zu geben.Hier finden Sie die komplette Lösung entsprechend Ihrem Bedarf.</p>

                    <p><strong>Warum tech2globe für das Sprachenoutsourcing</strong></p>
                    <p>Es ist eine bekannte Tatsache, dass Fremdsprachen wahrscheinlich nie verschwinden werden.Daher wird die Notwendigkeit, Übersetzungen auszulagern, offensichtlich, wenn Sie neue Marktsegmente erkunden und neue Unternehmungen der Domain eingehen wollen.Wir streben stets danach, mit allen unseren Kunden beratende Beziehungen zu pflegen, um authentische und fehlerfreie Übersetzungen innerhalb eines festgelegten Zeitrahmens zu gewährleisten.Wenn Ihr Projekt kostensensibel ist, teilen Sie uns Ihr am besten recherchiertes Angebot für dieses Leistungs- und Service-Niveau mit und wir werden es übertreffen.</p>

                    <p><strong>Fast:</strong> Ein übersetzer übersetze ca.2000 wörter pro-tag.Sie sind immer bereit, Ihre Bedürfnisse pünktlich zu erfüllen.</p>

                    <p><strong>Globale:</strong> Sie brauchen nicht ein lokale Verkäufer in ihre statten zu übersetzen,weil übersetzungdienst Online ist.Sie finden hier die besten Linguisten sowie die kosteneffizient und kostengünstigsten Übersetzer in jeder Sprache.Sie können also entsprechend wählen und uns jederzeit über unsere gebührenfreie Nummer erreichen - und wir stehen Ihnen auch auf Skype für Rückfragen zur Verfügung.</p>

                    <p className="mb-0"><strong>Was machen wir</strong></p>
                    <p className="mb-0">- Übersetzung</p>
                    <p className="mb-0">- Inhaltliches schreiben</p>
                    <p className="mb-0">- Localisierung</p>
                    <p className="mb-0">- Transkription</p>
                    <p className="mb-0">- Interpretation/Dolmetscher</p>
                    <p className="mb-0">- Subtitling und voice over</p>
                    <p className="mb-0">- Proofreading und Bearbeitung</p>
                    <p className="mb-0">- Desk Top Publishing(DTP)</p>
                    <p>- Amazon-Produktlistendienste</p>

                    <p className="mb-0"><strong>Industrie Gedeckt</strong></p>
                    <p>Akademisch, Werbung, Automobil, Bankwesen, Boutique, Geschäft, Bildung, Digital Marketing, Essen und Trinken, E-Learning, Mode, Finanziell, Regierung, Gesundheitswesen, Gastfreundschaft, Herstellung, Marketing, B2B, E-Commerce, Medizinisch, Immobilien, Software, Finanzen, Informationstechnologie</p>

                    <p className="mb-0"><strong>Sprach Catering</strong></p>
                    <p>Italienisch, Spanisch, Deutsch, Französisch, Niederländisch, Dänisch, Finnisch, Russisch,  Schwedisch, Polnisch, Rumänisch und Arabisch.</p>

                    <p>Wenn Sie Ihre bevorzugte Sprache nicht in der Liste finden. Machen Sie sich keine Sorgen, wir machen die Ressource für Sie bereit.</p>

                    <p className="mb-0"><strong>Mehrfaches Dateiformat</strong></p>
                    <p>Übersetzen Sie jede Art von Dokument. Wir übersetzen das meiste Dateiformat.</p>
                  </div>

                  <div className="tab-pane fade" id="french">
                    <p>Tech2globe est une grande entreprise de traduction en Inde.</p>

                    <p>Nous avons une tendance à travailler comme fournisseur de services linguistiques de qualité supérieure et intermédiaire de traduction.</p>

                    <p>Nous travaillons pour de nombreuses sociétés, des organismes à but non lucratif, des gouvernements et de nombreuses autre petites entreprises.</p>

                    <p>Il ne s&apos;agit pas simplement des clients de bout en bout, mais cependant de plusieurs sociétés de traduction internationales qui font confiance en nos services.</p>

                    <p>Nous sommes non seulement fiers de la qualité et de l&apos;exactitude de notre travail, mais aussi de la qualité de notre service à la clientèle ainsi que de la diversité de nos clients.</p>

                    <p>Nous sommes prêts à traduire tout type de document, peu importe que son contenu soit court ou long, qu&apos;il s&apos;agisse des documents légaux et médicaux, des certificats de mariage ou de décès, et de tout rapport d&apos;entreprise; notre équipe travaille dans pratiquement tous les domaines.</p>

                    <p>Nous avons fixé notre propre temps de travail à 24 heures sur 24 pour compléter toute tâche au temps voulu et avec une meilleure qualité de traduction.</p>

                    <p className="mb-0"><strong>Nos Performances De Référence</strong></p>
                    <ul className="">
                      <li>Traductions professionnelles expérimentées</li>
                      <li>Solutions de traduction</li>
                      <li>Gestion de la qualité</li>
                      <li>Technologie de pointe</li>
                    </ul>

                    <p>Nous disposons d&apos;une équipe spécialisée de traducteurs, d&apos;éditeurs et de correcteurs d’épreuves hautement qualifiés.</p>

                    <p>Le travail de traduction que font nos traducteurs professionnels ne se limite pas seulement sur traduction d&apos;un document. Il s&apos;agit aussi de donner un sens à cette langue particulière dont le client a besoin.</p>

                    <p>Ici vous pouvez trouver une bonne résolution à votre requête.</p>

                    <p><strong>Pourquoi Tech2globe Pour L’externisation De Langue</strong></p>
                    <p>C&apos;est un fait connu que les langues étrangères ne disparaîtront probablement jamais. Ainsi, la nécessité d&apos;externaliser la traduction devient évidente si vous souhaitez explorer de nouveaux segments de marché et entrer dans des nouveaux domaines d&apos;entreprises. Nous cherchons constamment à maintenir des relations de consultation avec tous nos clients, afin de rendre des traductions authentiques et sans erreur dans un délai déterminé.</p>
                    <p>Si votre projet s&apos;avère coûteux, faites-nous connaître votre devis et nous allons vous offrir la production et le service au prix concurrentiel. Et si vous cherchez la meilleure traduction en matière de qualité et non en matière de prix, vous êtes au bon endroit.</p>

                    <p><strong>RAPIDE:</strong> Nos traducteurs traduissent jusqu&apos;à 2000 mots par jour. Ils sont toujours prêts à répondre à vos besoins à temps.</p>

                    <p><strong>Global:</strong> Vous n&apos;avez pas besoin d&apos;un fournisseur local dans votre ville pour la traduction car le service de traduction est en ligne et de nature globale. Vous trouverez chez nous les meilleurs linguistes ainsi que les traducteurs disponibles pour beaucoup de langues. Donc, vous pouvez choisir de nous contacter à tout moment sur notre numéro sans frais, nous sommes également disponibles sur Skype pour toutes vos requêtes.</p>

                    <p className="mb-0"><strong>Ce Que Nous Faisons</strong></p>
                    <p className="mb-0">Traduction</p>
                    <p className="mb-0">Écriture de contenu</p>
                    <p className="mb-0">Localisation</p>
                    <p className="mb-0">Transcription</p>
                    <p className="mb-0">Interprétation</p>
                    <p className="mb-0">Sous-titrage et voix off</p>
                    <p className="mb-0">Correction d’épreuves et édition</p>
                    <p className="mb-0">Publication assistée par ordinateur (PAO)</p>
                    <p>Services de listing de produits amazoniens</p>

                    <p className="mb-0"><strong>Industries Couvertes</strong></p>
                    <p>Académique, Publicité, Automobile, Banque, Boutique, Entreprise, éducation, Marketing numérique, Aliments et boissons, Apprentissage électronique, Mode, Gouvernement, Services Médicaux, Hospitalité, Fabrication, Marketing, B2 B, Commerce électronique, Médical, Immobilier, Logiciel, Finance, Technologie de l&apos;information</p>

                    <p className="mb-0"><strong>Restauration De Langue</strong></p>
                    <p>Italien, Espagnol, Allemand, Français, Néerlandais, Danois, Finnois, Russe, Suédois, Polonais, Roumain et Arabe.</p>

                    <p>Si vous ne trouvez pas votre langue préférée dans la liste ci-haut, ne vous inquiétez pas, nous allons préparer des ressources pour vous.</p>

                    <p className="mb-0"><strong>Format De Fichier Multiple</strong></p>
                    <p>Nous traduisons la plupart de format de fichier disponible dans le marché.</p>
                  </div>

                  <div className="tab-pane fade" id="spanish">
                    <p>Tech2globe es una empresa de traducción líder en India. Tenemos una tendencia a trabajar como un proveedor de servicios de idiomas superior y un trabajador de traducción. Estamos trabajando para muchas corporaciones valiosas, organizaciones sin fines de lucro, gobiernos, muchas pequeñas empresas también. No son simplemente clientes de extremo a extremo, Sin embargo, varias empresas de traducción internacionales confían en nuestros servicios de traducción y en su origen a los Estados Unidos de vez en cuando.</p>
                    <p>Nos enorgullecemos no solo por la calidad y precisión de nuestro trabajo, sino también por brindar una excelente atención al cliente y también por la diversidad de nuestros clientes. No importa cuán largo o corto sea su documento, estamos listos para traducir cualquier tipo de documento ya sea que se trate de documentos legales, documentos médicos, certificados de matrimonio, cualquier informe de la compañía o cualquier certificado de defunción. Hemos establecido nuestro propio tiempo de 24 horas para completar un documento con un rango específico establecido.</p>

                    <p className="mb-0"><strong>Nuestros Referencia De Desempeño</strong></p>
                    <ul className="">
                      <li>Traductores Profesionales Experimentados</li>
                      <li>Soluciones de Traducción.</li>
                      <li>Gestión de la Calidad.</li>
                      <li>Estado - del - Arte de la Tecnología.</li>
                    </ul>

                    <p>Contamos con un equipo especializado de traductores, editores y correctores de pruebas altamente calificados</p>

                    <p>Tenemos un equipo profesional de traducción de idiomas, bueno, no se trata solo de traducir un documento, se trata de dar un significado en ese idioma particular que el cliente necesita. Aquí puede encontrar una solución completa según su necesidad.</p>

                    <p><strong>¿Por Qué Tech2globe Para La Subcontratación De Idiomas?</strong></p>
                    <p>Es un hecho conocido que los idiomas extranjeros probablemente nunca desaparecerán. Por lo tanto, la necesidad de subcontratación la traducción se vuelve obvia, si desea explorar nuevos segmentos de mercado y entrar en nuevas empresas del dominio. Constantemente apuntamos a mantener consultas con todos nuestros clientes, a fin de brindar traducciones auténticas y sin errores dentro de un marco de tiempo estipulado.</p>
                    <p>Si su proyecto es sensible a los costos, háganos saber su presupuesto mejor investigado para ese nivel de producción y servicio, y lo superaremos. Pero si busca la mejor traducción y no la más barata, también se encuentra en el lugar correcto.</p>

                    <p><strong>Rápido:</strong> Un traductor traduce hasta 2000 palabras por día. Siempre listos para satisfacer sus necesidades a tiempo.</p>

                    <p><strong>Global:</strong> No necesita un proveedor local en su ciudad para la traducción porque el servicio de traducción es en línea y de naturaleza global. Encontrarás los mejores lingüistas, así como los traductores más económicos y rentables en todos los idiomas aquí. Por lo tanto, puede elegir y ponerse en contacto con nosotros en cualquier momento en nuestro número gratuito, y también estamos disponibles en Skype para consultas.</p>

                    <p className="mb-0"><strong>Ce Que Nous Faisons</strong></p>
                    <p className="mb-0">Traduction</p>
                    <p className="mb-0">Écriture de contenu</p>
                    <p className="mb-0">Localisation</p>
                    <p className="mb-0">Transcription</p>
                    <p className="mb-0">Interprétation</p>
                    <p className="mb-0">Sous-titrage et voix off</p>
                    <p className="mb-0">Correction d’épreuves et édition</p>
                    <p className="mb-0">Publication assistée par ordinateur (PAO)</p>
                    <p>Services de listing de produits amazoniens</p>

                    <p className="mb-0"><strong>Industrias Cubiertas</strong></p>
                    <p>Académico, Publicidad, Automóvil, Banca, Boutique, Negocios, Educación, Marketing digital, Alimentos y bebidas, Educación a distancia, Moda, Financiera, Gobierno, Propiedad inmobiliaria , Hospitalidad, Fabricación, Comercialización, B2B, Comercio electrónico, Médico, Software, Finanzas, Tecnología de la información.</p>

                    <p className="mb-0"><strong>Catering De Idiomas</strong></p>
                    <p>Italiano, Español, Aleman, Frances, Holandes, Danes, Finlandes, Ruso, Sueco, Polaco, Rumano y Arabe.</p>

                    <p>Si no encuentra su idioma preferido en la lista. No se preocupe, haremos que los recursos estén listos para usted.</p>

                    <p className="mb-0"><strong>Formato De Archivo Múltiple</strong></p>
                    <p>Traducir cualquier tipo de documento. Traducimos la mayoría del formato de archivo.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development </Link></p>
                <p><FaAngleRight /> <Link href="/volusion-development" className="text-decoration-none fw-normal">Volusion Development</Link> </p>
                <p><FaAngleRight /> <Link href="/3dcart-development" className="text-decoration-none fw-normal">3Dcart Development</Link></p>
                <p><FaAngleRight /> <Link href="/open-cart-development-services" className="text-decoration-none fw-normal">Open Cart Development </Link></p>
                <p><FaAngleRight /> <Link href="/amazon-consulting-services" className="text-decoration-none fw-normal">Amazon Consulting Services </Link></p>
                <p><FaAngleRight /> <Link href="/flipkart-seller-account-management" className="text-decoration-none fw-normal">Flipkart </Link></p>
                <p><FaAngleRight /> <Link href="/online-business-management-amazon-in" className="text-decoration-none fw-normal">Amazon India </Link></p>
                <p><FaAngleRight /> <Link href="/eBay-management" className="text-decoration-none fw-normal">eBay India </Link></p>

              </div>


            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>
        </div>

      </section >

    </>
  )
};
