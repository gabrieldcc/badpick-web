export type LanguageCode = 'pt-BR' | 'en' | 'es'

export type ContentBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'list'
      items: string[]
    }
  | {
      type: 'notice'
      text: string
    }

export interface PolicySectionContent {
  id: string
  title: string
  subtitle?: string
  blocks: ContentBlock[]
}

export interface TranslationContent {
  languageName: string
  htmlLang: string
  seoTitle: string
  seoDescription: string
  ui: {
    languageLabel: string
    tocTitle: string
    backToTop: string
    lastUpdatedLabel: string
    footerRights: string
    contactLabel: string
    countryLabel: string
    emailLabel: string
  }
  hero: {
    title: string
    subtitle: string
  }
  policySections: PolicySectionContent[]
}

export const translations: Record<LanguageCode, TranslationContent> = {
  'pt-BR': {
    languageName: 'Português',
    htmlLang: 'pt-BR',
    seoTitle: 'Política de Privacidade | {appName}',
    seoDescription:
      'Política de Privacidade oficial do app {appName}, com informações sobre coleta, uso, retenção e direitos do titular de dados.',
    ui: {
      languageLabel: 'Idioma',
      tocTitle: 'Índice',
      backToTop: 'Voltar ao topo',
      lastUpdatedLabel: 'Última atualização',
      footerRights: 'Todos os direitos reservados.',
      contactLabel: 'Contato',
      countryLabel: 'País',
      emailLabel: 'E-mail de privacidade',
    },
    hero: {
      title: 'Política de Privacidade',
      subtitle:
        'Este documento explica como os dados são coletados, utilizados, compartilhados e protegidos durante o uso do aplicativo.',
    },
    policySections: [
      {
        id: 'dados-coletados',
        title: '1. Quais dados são coletados',
        subtitle: 'Categorias de dados tratadas pelo aplicativo',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} pode coletar e processar diferentes categorias de dados para permitir o funcionamento do app e a experiência da comunidade.',
          },
          {
            type: 'list',
            items: [
              'Identificador anônimo do usuário (UID via Firebase Auth anônimo), com fallback local quando necessário.',
              'Perfil salvo localmente no dispositivo: nome, sobrenome e nome de exibição.',
              'Conteúdo gerado pelo usuário: sugestões de dilemas, comentários, curtidas e favoritos.',
              'Eventos de uso e analytics: abertura do app, visualização e resposta de perguntas, compartilhamento e interação com anúncios intersticiais.',
              'Dados técnicos de falha e diagnóstico: erros, logs de contexto e informações de dispositivo/sessão.',
              'Dados relacionados à publicidade: exibição de anúncio, clique e falha no carregamento.',
            ],
          },
        ],
      },
      {
        id: 'finalidades',
        title: '2. Finalidades de uso dos dados',
        blocks: [
          {
            type: 'list',
            items: [
              'Operar as funcionalidades do jogo e manter a experiência estável.',
              'Manter recursos de comunidade, incluindo favoritos, comentários e sugestões de conteúdo.',
              'Personalizar e medir a experiência de uso para melhoria contínua do produto.',
              'Exibir e otimizar anúncios de forma segura e eficiente.',
              'Monitorar estabilidade, investigar incidentes e corrigir bugs.',
              'Ativar, desativar e testar recursos remotamente por meio de Remote Config e feature flags.',
            ],
          },
        ],
      },
      {
        id: 'base-legal',
        title: '3. Base legal para tratamento (LGPD)',
        blocks: [
          {
            type: 'paragraph',
            text: 'O tratamento de dados é realizado com base em hipóteses legais previstas na LGPD, conforme a natureza de cada operação.',
          },
          {
            type: 'list',
            items: [
              'Execução do serviço: para disponibilizar as funcionalidades essenciais do aplicativo.',
              'Legítimo interesse: para segurança, prevenção de abuso, melhoria de desempenho e manutenção do produto.',
              'Consentimento, quando aplicável: especialmente para rastreamento/publicidade em cenários que exijam banner de consentimento.',
            ],
          },
        ],
      },
      {
        id: 'terceiros',
        title: '4. Compartilhamento com terceiros',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} utiliza provedores de tecnologia para autenticação, armazenamento, configuração remota, diagnóstico e monetização.',
          },
          {
            type: 'list',
            items: [
              'Google Firebase: Auth, Firestore, Remote Config, Crashlytics e possivelmente Analytics.',
              'Google AdMob: entrega, medição e operação de anúncios no aplicativo.',
              'Esses provedores podem processar dados fora do Brasil, conforme suas infraestruturas globais e respectivas políticas de privacidade.',
            ],
          },
        ],
      },
      {
        id: 'publicidade',
        title: '5. Publicidade',
        blocks: [
          {
            type: 'paragraph',
            text: 'O aplicativo exibe anúncios para apoiar a operação do serviço.',
          },
          {
            type: 'list',
            items: [
              'Atualmente, o código está configurado para solicitar anúncios não personalizados (requestNonPersonalizedAdsOnly: true).',
              'Mesmo com essa configuração, pode haver tratamento de dados técnicos mínimos para entrega, medição antifraude e segurança dos anúncios.',
            ],
          },
          {
            type: 'notice',
            text: 'Importante: políticas de plataformas e provedores podem exigir mecanismos adicionais de consentimento conforme país, idade e contexto de uso.',
          },
        ],
      },
      {
        id: 'conteudo-publico',
        title: '6. Conteúdo público e comunitário',
        blocks: [
          {
            type: 'list',
            items: [
              'Comentários e sugestões enviados no app podem ficar visíveis para outros usuários.',
              'O nome exibido pode ser definido pelo usuário ou apresentado como rótulo anônimo, como Anon-xxxx.',
              'Há processo de moderação e possibilidade de remoção de conteúdo inadequado, ofensivo ou que viole regras da comunidade.',
              'Ao participar dos recursos comunitários, o usuário deve respeitar regras básicas de conduta e civilidade.',
            ],
          },
        ],
      },
      {
        id: 'armazenamento-local',
        title: '7. Armazenamento local no dispositivo',
        blocks: [
          {
            type: 'paragraph',
            text: 'Parte das informações pode ser armazenada localmente para melhorar desempenho e continuidade de uso.',
          },
          {
            type: 'list',
            items: [
              'Tutorial já visualizado e estado de primeiro acesso.',
              'Perfil local do usuário e fallback de ID quando necessário.',
              'Preferências operacionais que ajudam o app a iniciar mais rápido.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Esses dados podem permanecer no aparelho e, conforme o sistema operacional, podem ser removidos ao limpar os dados do app ou ao desinstalá-lo.',
          },
        ],
      },
      {
        id: 'retencao-exclusao',
        title: '8. Retenção e exclusão de dados',
        blocks: [
          {
            type: 'paragraph',
            text: 'Diferentes categorias de dados podem ser mantidas por períodos distintos, conforme finalidade operacional, segurança da plataforma e obrigações legais aplicáveis.',
          },
          {
            type: 'paragraph',
            text: 'Comentários, sugestões, favoritos e logs técnicos podem ter retenção variável. O usuário pode solicitar exclusão ou anonimização de dados armazenados no backend pelos canais de contato indicados nesta política.',
          },
        ],
      },
      {
        id: 'direitos-titular',
        title: '9. Direitos do titular (LGPD)',
        blocks: [
          {
            type: 'paragraph',
            text: 'Nos termos da LGPD, o titular pode solicitar:',
          },
          {
            type: 'list',
            items: [
              'Confirmação e acesso aos dados.',
              'Correção de dados incompletos, inexatos ou desatualizados.',
              'Anonimização, bloqueio ou eliminação, quando cabível.',
              'Portabilidade dos dados, observadas limitações legais e técnicas.',
              'Oposição ao tratamento em hipóteses previstas em lei.',
              'Revogação do consentimento, quando esta for a base legal aplicável.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Para exercer esses direitos, entre em contato pelos dados informados na seção de Controlador e contato.',
          },
        ],
      },
      {
        id: 'seguranca',
        title: '10. Segurança da informação',
        blocks: [
          {
            type: 'paragraph',
            text: 'Adotamos medidas técnicas e organizacionais compatíveis com o porte e a natureza do serviço para proteger os dados contra acessos não autorizados e uso indevido.',
          },
          {
            type: 'list',
            items: [
              'Controle de acesso e autenticação nos ambientes e serviços utilizados.',
              'Regras de banco de dados para restringir operações indevidas.',
              'Monitoramento e registros técnicos para prevenção de abuso e correção de falhas.',
              'Procedimentos internos para análise de incidentes e melhoria contínua de segurança.',
            ],
          },
        ],
      },
      {
        id: 'permissoes',
        title: '11. Permissões do app',
        blocks: [
          {
            type: 'list',
            items: [
              'Internet: necessária para autenticação, sincronização de conteúdo, recursos comunitários e carregamento de anúncios.',
              'Vibração: utilizada para feedback de interação e experiência de jogo em momentos específicos.',
              'Armazenamento (Android legado, quando aplicável): pode ser usado para compatibilidade com versões antigas e recursos locais específicos.',
            ],
          },
        ],
      },
      {
        id: 'publico-faixa-etaria',
        title: '12. Público-alvo e faixa etária',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} possui modo adulto (18+) e pode aplicar restrições etárias conforme conteúdo, região e requisitos das lojas.',
          },
          {
            type: 'paragraph',
            text: 'Quando houver uso por menores, recomenda-se supervisão ativa dos responsáveis legais. Pais e responsáveis podem nos contatar para orientações sobre uso, moderação e solicitações relacionadas a dados.',
          },
        ],
      },
      {
        id: 'alteracoes',
        title: '13. Alterações nesta política',
        blocks: [
          {
            type: 'paragraph',
            text: 'Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças legais, técnicas ou operacionais.',
          },
          {
            type: 'paragraph',
            text: 'A versão mais recente estará sempre disponível nesta página, com revisão da data de última atualização.',
          },
        ],
      },
      {
        id: 'controlador-contato',
        title: '14. Controlador e contato',
        blocks: [
          {
            type: 'paragraph',
            text: 'Responsável pelo tratamento: {legalEntityName}',
          },
          {
            type: 'paragraph',
            text: 'E-mail de privacidade e suporte: {privacyEmail}',
          },
          {
            type: 'paragraph',
            text: 'País: {country}',
          },
        ],
      },
    ],
  },
  en: {
    languageName: 'English',
    htmlLang: 'en',
    seoTitle: 'Privacy Policy | {appName}',
    seoDescription:
      'Official privacy policy for {appName}, covering data collection, usage, retention, and data subject rights.',
    ui: {
      languageLabel: 'Language',
      tocTitle: 'Table of contents',
      backToTop: 'Back to top',
      lastUpdatedLabel: 'Last updated',
      footerRights: 'All rights reserved.',
      contactLabel: 'Contact',
      countryLabel: 'Country',
      emailLabel: 'Privacy email',
    },
    hero: {
      title: 'Privacy Policy',
      subtitle:
        'This document explains how data is collected, used, shared, and protected while using the app.',
    },
    policySections: [
      {
        id: 'data-collected',
        title: '1. What data is collected',
        subtitle: 'Data categories processed by the app',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} may collect and process different categories of data to run the app and support community features.',
          },
          {
            type: 'list',
            items: [
              'Anonymous user identifier (UID via anonymous Firebase Auth), with local fallback when needed.',
              'Locally stored profile on device: first name, last name, and display name.',
              'User-generated content: dilemma suggestions, comments, likes, and favorites.',
              'Usage and analytics events: app open, question view/answer, sharing, and interstitial ad interaction.',
              'Technical crash and diagnostic data: errors, context logs, and device/session data.',
              'Ad-related data: ad impression, click, and ad load failure.',
            ],
          },
        ],
      },
      {
        id: 'purposes',
        title: '2. Purposes of processing',
        blocks: [
          {
            type: 'list',
            items: [
              'Operate core game functionality and keep the service stable.',
              'Maintain community features such as favorites, comments, and user suggestions.',
              'Personalize and measure user experience for product improvement.',
              'Display and optimize ads in a safe and efficient way.',
              'Monitor stability, investigate incidents, and fix bugs.',
              'Enable, disable, and test features remotely through Remote Config and feature flags.',
            ],
          },
        ],
      },
      {
        id: 'legal-basis',
        title: '3. Legal basis (LGPD)',
        blocks: [
          {
            type: 'paragraph',
            text: 'Data processing relies on legal bases established by Brazil\'s LGPD, depending on each processing activity.',
          },
          {
            type: 'list',
            items: [
              'Service performance: to provide essential app functionality.',
              'Legitimate interest: for security, abuse prevention, performance improvements, and maintenance.',
              'Consent where applicable: especially for tracking/advertising in scenarios that require a consent banner.',
            ],
          },
        ],
      },
      {
        id: 'third-parties',
        title: '4. Data sharing with third parties',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} uses technology providers for authentication, storage, remote configuration, diagnostics, and monetization.',
          },
          {
            type: 'list',
            items: [
              'Google Firebase: Auth, Firestore, Remote Config, Crashlytics, and possibly Analytics.',
              'Google AdMob: ad delivery, measurement, and ad operations in the app.',
              'These providers may process data outside Brazil according to their global infrastructure and privacy policies.',
            ],
          },
        ],
      },
      {
        id: 'advertising',
        title: '5. Advertising',
        blocks: [
          {
            type: 'paragraph',
            text: 'The app displays ads to support service operation.',
          },
          {
            type: 'list',
            items: [
              'The current implementation requests non-personalized ads (requestNonPersonalizedAdsOnly: true).',
              'Even with this setting, minimal technical data may still be processed for delivery, anti-fraud measurement, and ad security.',
            ],
          },
          {
            type: 'notice',
            text: 'Important: platform and provider rules may require additional consent flows depending on country, age, and usage context.',
          },
        ],
      },
      {
        id: 'public-community-content',
        title: '6. Public and community content',
        blocks: [
          {
            type: 'list',
            items: [
              'Comments and suggestions submitted in the app may be visible to other users.',
              'Displayed names may come from the user profile or from an anonymous label such as Anon-xxxx.',
              'Content moderation exists, and inappropriate content may be removed.',
              'Users must follow basic conduct and community standards.',
            ],
          },
        ],
      },
      {
        id: 'local-storage',
        title: '7. Local storage on device',
        blocks: [
          {
            type: 'paragraph',
            text: 'Some information may be stored locally to improve performance and continuity.',
          },
          {
            type: 'list',
            items: [
              'Tutorial completion and first-access state.',
              'Local profile and ID fallback when required.',
              'Operational preferences that help the app start faster.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Part of this data remains on the device and may be removed when clearing app data or uninstalling the app, depending on the operating system.',
          },
        ],
      },
      {
        id: 'retention-deletion',
        title: '8. Data retention and deletion',
        blocks: [
          {
            type: 'paragraph',
            text: 'Different data categories may be retained for different periods based on operational needs, security purposes, and legal obligations.',
          },
          {
            type: 'paragraph',
            text: 'Comments, suggestions, favorites, and technical logs may have variable retention periods. Users may request deletion or anonymization of backend-stored data through the contact channels in this policy.',
          },
        ],
      },
      {
        id: 'data-subject-rights',
        title: '9. Data subject rights (LGPD)',
        blocks: [
          {
            type: 'paragraph',
            text: 'Under LGPD, users may request:',
          },
          {
            type: 'list',
            items: [
              'Confirmation and access to personal data.',
              'Correction of incomplete, inaccurate, or outdated data.',
              'Anonymization, blocking, or deletion where applicable.',
              'Data portability, subject to legal and technical limits.',
              'Objection to processing in legally permitted cases.',
              'Withdrawal of consent when consent is the applicable legal basis.',
            ],
          },
          {
            type: 'paragraph',
            text: 'To exercise these rights, use the contact details listed in the Controller and contact section.',
          },
        ],
      },
      {
        id: 'security',
        title: '10. Security',
        blocks: [
          {
            type: 'paragraph',
            text: 'We adopt technical and organizational measures compatible with the service scope to protect data against unauthorized access and misuse.',
          },
          {
            type: 'list',
            items: [
              'Access control and authentication in used environments and services.',
              'Database rules to restrict unauthorized operations.',
              'Monitoring and technical logs for abuse prevention and failure correction.',
              'Internal procedures for incident analysis and continuous security improvement.',
            ],
          },
        ],
      },
      {
        id: 'permissions',
        title: '11. App permissions',
        blocks: [
          {
            type: 'list',
            items: [
              'Internet: required for authentication, content sync, community features, and ad loading.',
              'Vibration: used for gameplay and interaction feedback in specific moments.',
              'Storage (legacy Android, when applicable): may be used for compatibility with older versions and specific local features.',
            ],
          },
        ],
      },
      {
        id: 'audience-age',
        title: '12. Audience and age rating',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} includes an adult mode (18+) and may apply age restrictions depending on content, region, and store requirements.',
          },
          {
            type: 'paragraph',
            text: 'When minors use the app, active supervision by legal guardians is recommended. Parents or guardians may contact us for guidance about use, moderation, and data-related requests.',
          },
        ],
      },
      {
        id: 'policy-changes',
        title: '13. Changes to this policy',
        blocks: [
          {
            type: 'paragraph',
            text: 'This Privacy Policy may be updated periodically to reflect legal, technical, or operational changes.',
          },
          {
            type: 'paragraph',
            text: 'The latest version will always be available on this page, and the last updated date will be revised accordingly.',
          },
        ],
      },
      {
        id: 'controller-contact',
        title: '14. Controller and contact',
        blocks: [
          {
            type: 'paragraph',
            text: 'Data controller: {legalEntityName}',
          },
          {
            type: 'paragraph',
            text: 'Privacy and support email: {privacyEmail}',
          },
          {
            type: 'paragraph',
            text: 'Country: {country}',
          },
        ],
      },
    ],
  },
  es: {
    languageName: 'Español',
    htmlLang: 'es',
    seoTitle: 'Política de Privacidad | {appName}',
    seoDescription:
      'Política de privacidad oficial de {appName}, con información sobre recopilación, uso, conservación y derechos de los titulares.',
    ui: {
      languageLabel: 'Idioma',
      tocTitle: 'Tabla de contenido',
      backToTop: 'Volver arriba',
      lastUpdatedLabel: 'Última actualización',
      footerRights: 'Todos los derechos reservados.',
      contactLabel: 'Contacto',
      countryLabel: 'País',
      emailLabel: 'Correo de privacidad',
    },
    hero: {
      title: 'Política de Privacidad',
      subtitle:
        'Este documento explica cómo se recopilan, usan, comparten y protegen los datos durante el uso de la aplicación.',
    },
    policySections: [
      {
        id: 'datos-recopilados',
        title: '1. Qué datos se recopilan',
        subtitle: 'Categorías de datos tratadas por la aplicación',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} puede recopilar y procesar distintas categorías de datos para permitir el funcionamiento de la app y la experiencia comunitaria.',
          },
          {
            type: 'list',
            items: [
              'Identificador anónimo del usuario (UID vía Firebase Auth anónimo), con respaldo local cuando sea necesario.',
              'Perfil guardado localmente en el dispositivo: nombre, apellido y nombre visible.',
              'Contenido generado por el usuario: sugerencias de dilemas, comentarios, me gusta y favoritos.',
              'Eventos de uso y analítica: apertura de la app, visualización y respuesta de preguntas, compartición e interacción con anuncios intersticiales.',
              'Datos técnicos de fallos y diagnóstico: errores, registros de contexto y datos de dispositivo/sesión.',
              'Datos relacionados con anuncios: impresión, clic y fallo de carga de anuncios.',
            ],
          },
        ],
      },
      {
        id: 'finalidades',
        title: '2. Finalidades del uso de datos',
        blocks: [
          {
            type: 'list',
            items: [
              'Operar las funciones principales del juego y mantener la estabilidad del servicio.',
              'Mantener recursos de comunidad, incluidos favoritos, comentarios y sugerencias.',
              'Personalizar y medir la experiencia para mejorar continuamente el producto.',
              'Mostrar y optimizar anuncios de forma segura y eficiente.',
              'Monitorear la estabilidad, investigar incidentes y corregir errores.',
              'Activar, desactivar y probar funciones de forma remota mediante Remote Config y feature flags.',
            ],
          },
        ],
      },
      {
        id: 'base-legal',
        title: '3. Base legal (LGPD)',
        blocks: [
          {
            type: 'paragraph',
            text: 'El tratamiento de datos se realiza con base en fundamentos legales previstos en la LGPD de Brasil, según cada operación.',
          },
          {
            type: 'list',
            items: [
              'Ejecución del servicio: para proporcionar funciones esenciales de la app.',
              'Interés legítimo: para seguridad, prevención de abusos, mejora de rendimiento y mantenimiento.',
              'Consentimiento cuando corresponda: especialmente para rastreo/publicidad en escenarios que exijan banner de consentimiento.',
            ],
          },
        ],
      },
      {
        id: 'terceros',
        title: '4. Compartición con terceros',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} utiliza proveedores tecnológicos para autenticación, almacenamiento, configuración remota, diagnóstico y monetización.',
          },
          {
            type: 'list',
            items: [
              'Google Firebase: Auth, Firestore, Remote Config, Crashlytics y posiblemente Analytics.',
              'Google AdMob: entrega, medición y operación de anuncios en la aplicación.',
              'Estos proveedores pueden procesar datos fuera de Brasil según su infraestructura global y sus políticas de privacidad.',
            ],
          },
        ],
      },
      {
        id: 'publicidad',
        title: '5. Publicidad',
        blocks: [
          {
            type: 'paragraph',
            text: 'La aplicación muestra anuncios para sostener la operación del servicio.',
          },
          {
            type: 'list',
            items: [
              'Actualmente, el código solicita anuncios no personalizados (requestNonPersonalizedAdsOnly: true).',
              'Aun con esa configuración, puede existir tratamiento de datos técnicos mínimos para entrega, medición antifraude y seguridad publicitaria.',
            ],
          },
          {
            type: 'notice',
            text: 'Importante: las reglas de plataformas y proveedores pueden exigir mecanismos adicionales de consentimiento según país, edad y contexto de uso.',
          },
        ],
      },
      {
        id: 'contenido-publico',
        title: '6. Contenido público y comunitario',
        blocks: [
          {
            type: 'list',
            items: [
              'Los comentarios y sugerencias enviados pueden quedar visibles para otros usuarios.',
              'El nombre mostrado puede provenir del perfil del usuario o de una etiqueta anónima como Anon-xxxx.',
              'Existe moderación y posibilidad de remover contenido inadecuado.',
              'Los usuarios deben respetar reglas básicas de conducta y convivencia.',
            ],
          },
        ],
      },
      {
        id: 'almacenamiento-local',
        title: '7. Almacenamiento local en el dispositivo',
        blocks: [
          {
            type: 'paragraph',
            text: 'Parte de la información puede guardarse localmente para mejorar el rendimiento y la continuidad de uso.',
          },
          {
            type: 'list',
            items: [
              'Tutorial visto y estado de primer acceso.',
              'Perfil local del usuario y respaldo de ID cuando sea necesario.',
              'Preferencias operativas que ayudan a iniciar la app más rápido.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Una parte de estos datos permanece en el dispositivo y puede eliminarse al borrar los datos de la app o desinstalarla, según el sistema operativo.',
          },
        ],
      },
      {
        id: 'retencion-eliminacion',
        title: '8. Retención y eliminación de datos',
        blocks: [
          {
            type: 'paragraph',
            text: 'Las distintas categorías de datos pueden conservarse por periodos diferentes según finalidad operativa, seguridad y obligaciones legales.',
          },
          {
            type: 'paragraph',
            text: 'Comentarios, sugerencias, favoritos y registros técnicos pueden tener retención variable. El usuario puede solicitar eliminación o anonimización de datos almacenados en backend a través de los canales de contacto indicados en esta política.',
          },
        ],
      },
      {
        id: 'derechos-titular',
        title: '9. Derechos del titular (LGPD)',
        blocks: [
          {
            type: 'paragraph',
            text: 'Según la LGPD, el titular puede solicitar:',
          },
          {
            type: 'list',
            items: [
              'Confirmación y acceso a los datos.',
              'Corrección de datos incompletos, inexactos o desactualizados.',
              'Anonimización, bloqueo o eliminación cuando corresponda.',
              'Portabilidad de datos, respetando límites legales y técnicos.',
              'Oposición al tratamiento en los casos previstos por ley.',
              'Revocación del consentimiento cuando sea la base legal aplicable.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Para ejercer estos derechos, utilice los datos de contacto de la sección Controlador y contacto.',
          },
        ],
      },
      {
        id: 'seguridad',
        title: '10. Seguridad',
        blocks: [
          {
            type: 'paragraph',
            text: 'Adoptamos medidas técnicas y organizativas compatibles con el alcance del servicio para proteger los datos frente a accesos no autorizados y usos indebidos.',
          },
          {
            type: 'list',
            items: [
              'Control de acceso y autenticación en los entornos y servicios utilizados.',
              'Reglas de base de datos para restringir operaciones no autorizadas.',
              'Monitoreo y registros técnicos para prevenir abusos y corregir fallos.',
              'Procedimientos internos para análisis de incidentes y mejora continua de seguridad.',
            ],
          },
        ],
      },
      {
        id: 'permisos',
        title: '11. Permisos de la app',
        blocks: [
          {
            type: 'list',
            items: [
              'Internet: necesaria para autenticación, sincronización, recursos comunitarios y carga de anuncios.',
              'Vibración: utilizada para retroalimentación de interacción y momentos específicos del juego.',
              'Almacenamiento (Android legado, cuando aplique): puede usarse por compatibilidad con versiones antiguas y funciones locales específicas.',
            ],
          },
        ],
      },
      {
        id: 'publico-edad',
        title: '12. Público objetivo y franja etaria',
        blocks: [
          {
            type: 'paragraph',
            text: '{appName} incluye modo adulto (18+) y puede aplicar restricciones de edad según contenido, región y requisitos de las tiendas.',
          },
          {
            type: 'paragraph',
            text: 'Cuando haya uso por menores, se recomienda supervisión activa de responsables legales. Padres y tutores pueden contactarnos para orientaciones sobre uso, moderación y solicitudes relacionadas con datos.',
          },
        ],
      },
      {
        id: 'cambios-politica',
        title: '13. Cambios en esta política',
        blocks: [
          {
            type: 'paragraph',
            text: 'Esta Política de Privacidad puede actualizarse periódicamente para reflejar cambios legales, técnicos u operativos.',
          },
          {
            type: 'paragraph',
            text: 'La versión más reciente siempre estará disponible en esta página y la fecha de última actualización se revisará en consecuencia.',
          },
        ],
      },
      {
        id: 'controlador-contacto',
        title: '14. Controlador y contacto',
        blocks: [
          {
            type: 'paragraph',
            text: 'Responsable del tratamiento: {legalEntityName}',
          },
          {
            type: 'paragraph',
            text: 'Correo de privacidad y soporte: {privacyEmail}',
          },
          {
            type: 'paragraph',
            text: 'País: {country}',
          },
        ],
      },
    ],
  },
}
