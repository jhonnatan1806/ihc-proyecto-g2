var projectData;

var teamData;

if (teamData === undefined) {
  teamData = {};
}

if (projectData === undefined) {
  projectData = {};
}

projectData.getProjectInfo = function() {
  return {
    name: "ihc-proyecto-g2",
  };
}

teamData.getTeams = function() {
  return [
    {
      id: 1,
      name: 'Gabriel Barrientos',
      avatar: 'https://avatars.githubusercontent.com/u/129352498?v=4',
      role: 'Lorem ipsum',
      socials: [
        {id: 1, name: 'Linkedin', url: 'https://www.linkedin.com/in/gabriel-adrian-barrientos-cardenas-a488892a4/'},
        {id: 2, name: 'Github', url: 'https://www.github.com/GabrielBarrientos99'},
      ],
    },
    {
      id: 2,
      name: 'João Guimaraes',
      avatar: 'https://avatars.githubusercontent.com/u/50991009?v=4',
      role: 'Lorem ipsum',
      socials: [
        {id: 1, name: 'Linkedin', url: 'https://www.linkedin.com/in/joaorafaelguimaraes/'},
        {id: 2, name: 'Github', url: 'https://github.com/JoaoRafaelGuimaraes'},
      ],
    },
    {
      id: 3,
      name: 'Jhonnatan Espinoza',
      avatar: 'https://avatars.githubusercontent.com/u/62492146?v=4',
      role: 'Lorem ipsum',
      socials: [
        {id: 1, name: 'Linkedin', url: 'https://www.linkedin.com/in/jhonnatan1806'},
        {id: 2, name: 'Github', url: 'https://www.github.com/jhonnatan1806'},
      ],
    },
  ];
}