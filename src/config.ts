export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavLink {
  label: string
  targetId: string
}

export interface NavigationConfig {
  brandMark: string
  links: NavLink[]
}

export interface HeroConfig {
  wordmarkText: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  descriptionLine1: string
  descriptionLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface PhilosophyConfig {
  eyebrow: string
  title: string
  body: string
  rollingWords: string[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface ProjectData {
  id: string
  title: string
  location: string
  year: string
  image: string
  subtitle: string
  meta: ProjectMeta[]
  paragraphs: string[]
}

export interface GalleryConfig {
  sectionLabel: string
  title: string
  projects: ProjectData[]
}

export interface MediumItem {
  cn: string
  en: string
  description: string
}

export interface MediumsConfig {
  sectionLabel: string
  items: MediumItem[]
}

export interface FooterConfig {
  visionText: string
  brandName: string
  columns: FooterColumn[]
  copyright: string
  videoPath: string
}

export interface ProjectDetailConfig {
  backLabel: string
}

export interface FooterEntry {
  text: string
  href?: string
}

export interface FooterColumn {
  heading: string
  entries: FooterEntry[]
}

export interface TestimonialData {
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

export interface TestimonialsConfig {
  eyebrow: string
  title: string
  testimonials: TestimonialData[]
}

export interface ContactConfig {
  eyebrow: string
  title: string
  phone: string
  whatsapp: string
  email: string
  address: string
  hours: string
  mapEmbedUrl: string
}

// ============== CONFIG VALUES ==============

export const siteConfig: SiteConfig = {
  language: "pt-BR",
  siteTitle: "Proteção Fire - Extintores e Segurança Contra Incêndio",
  siteDescription: "Especialistas em extintores de incêndio, recargas, manutenção e projetos de combate a incêndio. Atendimento 24h. Mais de 15 anos de experiência.",
}

export const navigationConfig: NavigationConfig = {
  brandMark: "PF",
  links: [
    { label: "Home", targetId: "hero-section" },
    { label: "Serviços", targetId: "philosophy" },
    { label: "Produtos", targetId: "gallery" },
    { label: "Sobre", targetId: "mediums" },
    { label: "Contato", targetId: "contact" },
  ],
}

export const heroConfig: HeroConfig = {
  wordmarkText: "PROTEÇÃO FIRE",
  eyebrow: "SEGURANÇA CONTRA INCÊNDIO DESDE 2009",
  titleLine1: "Protegemos o",
  titleLine2: "que é seu.",
  descriptionLine1: "Especialistas em extintores, recargas, manutenção",
  descriptionLine2: "e projetos de combate a incêndio. Atendimento 24h.",
  ctaText: "SOLICITAR ORÇAMENTO",
  ctaTargetId: "contact",
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: "NOSSOS SERVIÇOS",
  title: "Soluções completas em segurança",
  body: "Oferecemos serviços técnicos especializados para garantir a segurança do seu patrimônio e o cumprimento das normas técnicas. Equipe certificada e atendimento personalizado.",
  rollingWords: ["RECARGA", "MANUTENÇÃO", "VENDAS", "PROJETOS", "SINALIZAÇÃO", "CONSULTORIA"],
}

export const galleryConfig: GalleryConfig = {
  sectionLabel: "NOSSOS PRODUTOS / 004",
  title: "Equipamentos Certificados",
  projects: [
    {
      id: "001",
      title: "Pó Químico",
      location: "CLASSE BC",
      year: "2024",
      image: "images/product-1.jpg",
      subtitle: "Proteção multiuso para fogos de classe B e C",
      meta: [
        { label: "TIPO", value: "Pó Químico Seco" },
        { label: "CAPACIDADE", value: "4kg a 12kg" },
        { label: "CERTIFICAÇÃO", value: "INMETRO" },
        { label: "APLICAÇÃO", value: "Indústria, Comércio, Residencial" },
      ],
      paragraphs: [
        "O extintor de Pó Químico é o equipamento mais versátil e amplamente utilizado em proteção contra incêndio. Indicado para combater fogos de classe B (líquidos inflamáveis) e classe C (equipamentos elétricos), é a escolha ideal para indústrias, comércios e residências.",
        "Nossos extintores de Pó Químico possuem certificação INMETRO e seguem rigorosamente as normas técnicas NBR. Oferecemos capacidades de 4kg, 6kg, 8kg e 12kg, atendendo às necessidades de cada tipo de ambiente.",
        "A recarga deve ser realizada anualmente ou após o uso, garantindo que o equipamento esteja sempre pronto para atuar em caso de emergência. Nossa equipe técnica realiza a manutenção completa com agilidade e profissionalismo.",
      ],
    },
    {
      id: "002",
      title: "CO2",
      location: "CLASSE BC",
      year: "2024",
      image: "images/product-2.jpg",
      subtitle: "Proteção limpa para equipamentos sensíveis",
      meta: [
        { label: "TIPO", value: "Dióxido de Carbono" },
        { label: "CAPACIDADE", value: "6kg a 20kg" },
        { label: "CERTIFICAÇÃO", value: "INMETRO" },
        { label: "APLICAÇÃO", value: "Data Centers, Laboratórios, Indústria" },
      ],
      paragraphs: [
        "O extintor de CO2 (dióxido de carbono) é a escolha perfeita para ambientes com equipamentos eletrônicos sensíveis e materiais de alto valor. Ao atuar, não deixa resíduos, preservando a integridade de servidores, máquinas e documentos importantes.",
        "Indicado para fogos de classe B (líquidos inflamáveis) e classe C (equipamentos elétricos energizados), o extintor de CO2 é essencial em data centers, laboratórios, hospitais e indústrias de precisão.",
        "Disponível em capacidades de 6kg, 10kg e 20kg, todos com certificação INMETRO. A manutenção e recarga devem ser realizadas anualmente por técnicos especializados, conforme determina a norma técnica.",
      ],
    },
    {
      id: "003",
      title: "Água Pressurizada",
      location: "CLASSE A",
      year: "2024",
      image: "images/product-3.jpg",
      subtitle: "Proteção eficiente para materiais combustíveis",
      meta: [
        { label: "TIPO", value: "Água Pressurizada" },
        { label: "CAPACIDADE", value: "10L a 20L" },
        { label: "CERTIFICAÇÃO", value: "INMETRO" },
        { label: "APLICAÇÃO", value: "Residencial, Comercial, Escritórios" },
      ],
      paragraphs: [
        "O extintor de Água Pressurizada é o equipamento mais indicado para combater fogos de classe A, que envolvem materiais combustíveis como madeira, papel, tecidos e plásticos. É a escolha econômica e eficiente para residências e escritórios.",
        "O funcionamento é simples e eficaz: a água é expelida sob pressão, resfriando o material em combustão e eliminando o calor do incêndio. É um equipamento ecologicamente correto e de fácil operação.",
        "Oferecemos modelos com capacidade de 10 litros e 20 litros, todos certificados pelo INMETRO. A manutenção anual garante que o sistema de pressão esteja em perfeitas condições de funcionamento.",
      ],
    },
    {
      id: "004",
      title: "Espuma Mecânica",
      location: "CLASSE AB",
      year: "2024",
      image: "images/product-4.jpg",
      subtitle: "Proteção versátil para líquidos e sólidos",
      meta: [
        { label: "TIPO", value: "Espuma Mecânica" },
        { label: "CAPACIDADE", value: "10L a 50L" },
        { label: "CERTIFICAÇÃO", value: "INMETRO" },
        { label: "APLICAÇÃO", value: "Indústria, Postos, Galpões" },
      ],
      paragraphs: [
        "O extintor de Espuma Mecânica é ideal para combater fogos de classe A (materiais combustíveis) e classe B (líquidos inflamáveis). A espforma cria uma camada protetora que isola o combustível do oxigênio, apagando o fogo eficientemente.",
        "É o equipamento recomendado para indústrias, postos de combustível, galpões e áreas onde há risco de incêndio envolvendo líquidos inflamáveis. A espuma também proporciona proteção contra re-ignição.",
        "Disponível em capacidades de 10 litros, 25 litros e 50 litros, todos com certificação INMETRO. A recarga e manutenção periódicas garantem a prontidão do equipamento em qualquer situação de emergência.",
      ],
    },
  ],
}

export const mediumsConfig: MediumsConfig = {
  sectionLabel: "POR QUE NOS ESCOLHER",
  items: [
    {
      cn: "15 Anos",
      en: "EXPERIÊNCIA",
      description: "Mais de 15 anos atuando no mercado de segurança contra incêndio, com milhares de clientes atendidos em todo o estado.",
    },
    {
      cn: "INMETRO",
      en: "CERTIFICAÇÃO",
      description: "Todos os nossos produtos e serviços possuem certificação do INMETRO e atendem às normas técnicas NBR.",
    },
    {
      cn: "24 Horas",
      en: "ATENDIMENTO",
      description: "Equipe de emergência disponível 24 horas por dia, 7 dias por semana, para atendimentos urgentes.",
    },
    {
      cn: "Técnicos",
      en: "ESPECIALIZADOS",
      description: "Nossa equipe é formada por técnicos especializados e constantemente treinados nas melhores práticas do setor.",
    },
    {
      cn: "Garantia",
      en: "TOTAL",
      description: "Garantia completa em todos os serviços realizados, com acompanhamento pós-venda e suporte técnico.",
    },
  ],
}

export const testimonialsConfig: TestimonialsConfig = {
  eyebrow: "DEPOIMENTOS",
  title: "O que nossos clientes dizem",
  testimonials: [
    {
      name: "Carlos Mendes",
      role: "Gerente de Facilities - Shopping Plaza",
      quote: "A Proteção Fire mantém todos os extintores do nosso shopping em dia há mais de 5 anos. Atendimento impecável e equipe sempre pontual.",
      avatar: "images/avatar-1.jpg",
      rating: 5,
    },
    {
      name: "Ana Paula Ribeiro",
      role: "Diretora de Operações - Indústria Metalúrgica LTDA",
      quote: "Profissionalismo e competência. O projeto de combate a incêndio implementado pela equipe foi fundamental para nossa certificação.",
      avatar: "images/avatar-2.jpg",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      role: "Síndico - Condomínio Residencial Jardins",
      quote: "Desde que contratamos a Proteção Fire, nossa segurança patrimonial nunca esteve tão completa. Recomendo sem hesitar.",
      avatar: "images/avatar-3.jpg",
      rating: 5,
    },
  ],
}

export const contactConfig: ContactConfig = {
  eyebrow: "ENTRE EM CONTATO",
  title: "Solicite um orçamento",
  phone: "(11) 9999-9999",
  whatsapp: "(11) 98888-8888",
  email: "contato@protecaofire.com.br",
  address: "Av. Paulista, 1000 - Bela Vista\nSão Paulo - SP, 01310-100",
  hours: "Segunda a Sexta: 08h às 18h\nSábado: 08h às 12h",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.65!3d-23.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzM2LjAiUyA0NsKwMzknMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1",
}

export const footerConfig: FooterConfig = {
  visionText: "Nossa missão é proteger vidas e patrimônios através de soluções técnicas em segurança contra incêndio. Acreditamos que a prevenção salva, e trabalhamos todos os dias para oferecer o melhor em equipamentos e serviços.",
  brandName: "PROTEÇÃO FIRE",
  columns: [
    {
      heading: "SERVIÇOS",
      entries: [
        { text: "Recarga de Extintores" },
        { text: "Manutenção Preventiva" },
        { text: "Venda de Extintores" },
        { text: "Projetos Técnicos" },
        { text: "Sinalização de Emergência" },
      ],
    },
    {
      heading: "PRODUTOS",
      entries: [
        { text: "Extintores de Pó Químico" },
        { text: "Extintores de CO2" },
        { text: "Extintores de Água" },
        { text: "Extintores de Espuma" },
        { text: "Acessórios e Peças" },
      ],
    },
    {
      heading: "CONTATO",
      entries: [
        { text: "(11) 9999-9999" },
        { text: "contato@protecaofire.com.br" },
        { text: "Av. Paulista, 1000\nSão Paulo - SP", href: "#contact" },
      ],
    },
  ],
  copyright: "© 2024 Proteção Fire. Todos os direitos reservados.",
  videoPath: "",
}

export const projectDetailConfig: ProjectDetailConfig = {
  backLabel: "← VOLTAR",
}

// Helper function
export function getProjectById(id: string): ProjectData | undefined {
  return galleryConfig.projects.find((p) => p.id === id)
}
