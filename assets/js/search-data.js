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
  },{id: "nav-новости",
          title: "Новости",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-продукты",
          title: "Продукты",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/products/";
          },
        },{id: "nav-технологии",
          title: "Технологии",
          description: "Мы придерживаемся идеологии коллаборитивной разработки и разумеется опираемся на open-source технологии. Более того, всё что мы можем, мы стараемся отправлять обратно в upstream, насколько это возможно в нынешних условиях. Поэтому мы не можем обойти вниманием технологии, которые используем в качестве основы. Все мы перечислить не можем, но постараемся подсветить самые важные (в том числе и технологии, которые заопенсорсили сами)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-развёртывания",
          title: "Развёртывания",
          description: "Развёртывания, о которых мы можем писать публично. Их существенно больше, однако мы уважаем право наших клиентов на конфиденциальность, поэтому пишем только о тех, о которых можем.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-первый-релиз-платформы-алан-перлис-https-docs-moncloud-ru-ru-release-notes-release-notes-ver-1-0-0-html-ver-1-0-0",
          title: 'Первый релиз платформы: (Алан Перлис)[https://docs.moncloud.ru/ru/release_notes/release_notes/ver_1.0.0.html#ver-1-0-0].',
          description: "",
          section: "News",},{id: "news-релиз-1-1-морис-уилкс-https-docs-moncloud-ru-ru-release-notes-release-notes-ver-1-1-0-html-ver-1-1-0",
          title: 'Релиз 1.1: (Морис Уилкс)[https://docs.moncloud.ru/ru/release_notes/release_notes/ver_1.1.0.html#ver-1-1-0].',
          description: "",
          section: "News",},{id: "news-регистрация-в-реестре-отечественного-по-министерства-цифрового-развития-отечественная-облачная-платформа-1-0-https-reestr-digital-gov-ru-reestr-3050301",
          title: 'Регистрация в Реестре Отечественного ПО Министерства Цифрового Развития: (Отечественная облачная платформа 1.0)[https://reestr.digital.gov.ru/reestr/3050301/].',
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
