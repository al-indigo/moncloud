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
            },{id: "news-первый-релиз-платформы-алан-перлис",
          title: 'Первый релиз платформы: Алан Перлис.',
          description: "",
          section: "News",},{id: "news-релиз-1-1-морис-уилкс",
          title: 'Релиз 1.1: Морис Уилкс',
          description: "",
          section: "News",},{id: "news-регистрация-в-реестре-отечественного-по-министерства-цифрового-развития-отечественная-облачная-платформа-1-0-коробочные-продукты-монклауд-vdi-дорабатываемые-продукты-публичное-облако-любой-paas-openstack-as-a-service",
          title: 'Регистрация в Реестре Отечественного ПО Министерства Цифрового Развития: Отечественная облачная платформа 1.0. Коробочные...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
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
