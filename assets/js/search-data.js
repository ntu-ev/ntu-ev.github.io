// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-2026-ev",
    title: "2026 EV",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-logistics",
          title: "Logistics",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/logistics/";
          },
        },{id: "nav-lectures",
          title: "Lectures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lectures/";
          },
        },{id: "nav-announcements",
          title: "Announcements",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/announcements/";
          },
        },{id: "nav-instructors",
          title: "Instructors",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/instructors/";
          },
        },{id: "nav-calendar",
          title: "Calendar",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/calendar/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
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
