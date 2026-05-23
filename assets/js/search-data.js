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
            },{id: "dropdown-лицензии-сертификаты-товарные-знаки-рид",
              title: "Лицензии, сертификаты, товарные знаки, РИД",
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
          title: 'Начало внедрения технологий компании ООО «Акцентос» в дистрибутив moncloud.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accentos_collab/";
            },},{id: "news-релиз-1-0-алан-перлис",
          title: 'Релиз 1.0: Алан Перлис.',
          description: "",
          section: "News",},{id: "news-дистрибутив-асперитас-получил-сертификат-фстэк-4880-на-соответствие-требованиям-доверия-4-к-средствам-виртуализации-4",
          title: 'Дистрибутив Асперитас получил сертификат ФСТЭК №4880 на соответствие требованиям: доверия(4), к средствам виртуализации(4)....',
          description: "",
          section: "News",},{id: "news-рассказали-на-nexthop-yandex-как-устроен-наш-собственный-sdn-ссылка-на-рассказ",
          title: 'Рассказали на NextHop (Yandex) как устроен наш собственный SDN. Ссылка на рассказ.',
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
          section: "News",},{id: "news-участие-в-выставке-kazan-digital-week-2025",
          title: 'Участие в выставке Kazan Digital Week 2025.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/kazan_digital_week_2025/";
            },},{id: "news-релиз-1-5-джон-мак-карти",
          title: 'Релиз 1.5: Джон Мак-Карти',
          description: "",
          section: "News",},{id: "news-облачная-платформа-moncloud-подтвердила-совместимость-с-сервером-yadro-g4208p-g3",
          title: 'Облачная платформа moncloud подтвердила совместимость с сервером Yadro® G4208P G3',
          description: "",
          section: "News",},{id: "news-облачная-платформа-moncloud-подтвердила-совместимость-с-схд-yadro-tatlin-unified",
          title: 'Облачная платформа moncloud подтвердила совместимость с СХД Yadro® TATLIN.UNIFIED',
          description: "",
          section: "News",},{id: "news-облачная-платформа-moncloud-подтвердила-совместимость-с-по-mind-migrate-от-компании-mind-software",
          title: 'Облачная платформа moncloud подтвердила совместимость с ПО MIND Migrate от Компании MIND Software...',
          description: "",
          section: "News",},{id: "news-релиз-1-6-эдсгер-дейкстра",
          title: 'Релиз 1.6: Эдсгер Дейкстра',
          description: "",
          section: "News",},{id: "news-облачная-платформа-moncloud-подтвердила-совместимость-с-серверами-тринити",
          title: 'Облачная платформа moncloud подтвердила совместимость с серверами Тринити',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/triniti_press_release/";
            },},{id: "news-облачная-платформа-moncloud-подтвердила-совместимость-с-платформой-контейнеризации-боцман-для-управления-мультикластерами-kubernetes",
          title: 'Облачная платформа moncloud подтвердила совместимость с платформой контейнеризации «Боцман» для управления мультикластерами Kubernetes...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/bootsman_press_release/";
            },},{id: "news-облачная-платформа-moncloud-провела-тестирование-миграции-виртуальных-машин-с-использованием-решения-mind-migrate",
          title: 'Облачная платформа moncloud провела тестирование миграции виртуальных машин с использованием решения MIND Migrate...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/mind_press_release/";
            },},{id: "news-релиз-1-7-чарльз-бахман",
          title: 'Релиз 1.7: Чарльз Бахман',
          description: "",
          section: "News",},{id: "news-дистрибьютерское-соглашение-с-axoft",
          title: 'Дистрибьютерское соглашение с Axoft',
          description: "",
          section: "News",},{id: "projects-openstack-as-a-service",
          title: 'Openstack as a Service',
          description: "on-prem облако по запросу в нашем/Вашем датацентре",
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
            },},{id: "projects-среда-безопасной-разработки-полного-цикла",
          title: 'Среда безопасной разработки полного цикла',
          description: "сервис для РБПО, доступный локально в организации",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uns/";
            },},{id: "projects-wormhole",
          title: 'wormhole',
          description: "технология предоставления доступа к удалённым рабочим столам",
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
