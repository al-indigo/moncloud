// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-о-нас",
    title: "О нас",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-события",
          title: "События",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-продукты",
          title: "Продукты",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/products/";
          },
        },{id: "nav-контакты",
          title: "Контакты",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contacts/";
          },
        },{id: "dropdown-обучение",
              title: "Обучение",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/education/";
              },
            },{id: "dropdown-публикации",
              title: "Публикации",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/articles/";
              },
            },{id: "dropdown-технологии",
              title: "Технологии",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-сертификаты-товарные-знаки-рид",
              title: "Сертификаты, товарные знаки, РИД",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/patents/";
              },
            },{id: "news-регистрация-компании-ооо-системные-решения",
          title: 'Регистрация компании ООО “Системные решения”.',
          description: "",
          section: "News",},{id: "news-стратегическое-партнёрство-с-институтом-системного-программирования-им-в-п-иванникова-российской-академии-наук-исп-ран",
          title: 'Стратегическое партнёрство с Институтом Системного Программирования им. В.П. Иванникова Российской Академии Наук (ИСП...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ispras_collab/";
            },},{id: "news-начало-внедрения-технологий-компании-ооо-акцентос-в-дистрибутив-moncloud",
          title: 'Начало внедрения технологий компании ООО «Акцентос» в дистрибутив moncloud',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accentos_collab/";
            },},{id: "news-первый-релиз-платформы-алан-перлис",
          title: 'Первый релиз платформы: Алан Перлис.',
          description: "",
          section: "News",},{id: "news-дистрибутив-асперитас-получил-сертификат-фстэк-4880-на-соответствие-следующим-требованиям-требования-доверия-4-требования-к-средствам-виртуализации-4",
          title: 'Дистрибутив Асперитас получил сертификат ФСТЭК №4880 на соответствие следующим требованиям: Требования доверия(4), Требования...',
          description: "",
          section: "News",},{id: "news-рассказали-на-nexthop-yandex-как-устроен-наш-собственный-sdn-движок-ссылка-на-рассказ",
          title: 'Рассказали на NextHop (Yandex) как устроен наш собственный SDN-движок. Ссылка на рассказ.',
          description: "",
          section: "News",},{id: "news-регистрация-в-реестре-отечественного-по-министерства-цифрового-развития-отечественная-облачная-платформа-1-0",
          title: 'Регистрация в Реестре Отечественного ПО Министерства Цифрового Развития: Отечественная облачная платформа 1.0.',
          description: "",
          section: "News",},{id: "news-релиз-1-1-морис-уилкс",
          title: 'Релиз 1.1: Морис Уилкс',
          description: "",
          section: "News",},{id: "news-релиз-1-2-ричард-хэмминг",
          title: 'Релиз 1.2: Ричард Хэмминг',
          description: "",
          section: "News",},{id: "news-начата-сертификация-moncloud-по-требованиям-фстэк-на-соответствие-требованиям-доверия-4-и-к-средствам-виртуализации-4",
          title: 'Начата сертификация moncloud по требованиям ФСТЭК на соответствие требованиям доверия(4) и к средствам...',
          description: "",
          section: "News",},{id: "news-релиз-1-3-марвин-минский",
          title: 'Релиз 1.3: Марвин Минский',
          description: "",
          section: "News",},{id: "news-релиз-1-4-джеймс-уилкинсон",
          title: 'Релиз 1.4: Джеймс Уилкинсон',
          description: "",
          section: "News",},{id: "projects-openstack-as-a-service",
          title: 'Openstack as a Service',
          description: "on-prem облако в нашем/Вашем датацентре. Всё готово, только попросите.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-mlm",
          title: 'MLM',
          description: "облачный сервис MLOps в on-prem формате",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlm/";
            },},{id: "projects-moncloud",
          title: 'moncloud',
          description: "on-prem дистрибутив облачной среды, промышленное облако на базе OpenStack",
          section: "Projects",handler: () => {
              window.location.href = "/projects/moncloud/";
            },},{id: "projects-публичное-облако",
          title: 'Публичное облако',
          description: "whitelabel-публичное облако на базе наших технологий",
          section: "Projects",handler: () => {
              window.location.href = "/projects/public_cloud/";
            },},{id: "projects-унс",
          title: 'УнС',
          description: "Сервис для РБПО, доступный локально в организации",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uns/";
            },},{id: "projects-wormhole",
          title: 'wormhole',
          description: "движок предоставления доступа к удалённым рабочим столам",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wormhole/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
