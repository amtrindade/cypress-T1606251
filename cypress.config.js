const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      charts: true, // Gerar gráficos no relatório
      reportPageTitle: 'Relatório de Testes - Curso Cypress TargetTrust', // Título da página HTML
      embeddedScreenshots: true, // Embutir screenshots no relatório
      inlineAssets: true, // Embutir todos os assets (CSS, JS) no HTML para portabilidade
      saveAllAttempts: false, // Não salvar screenshots/vídeos para tentativas de re-execução que passaram    
      reportDir: 'cypress/reports', // Diretório onde os relatórios serão salvos
      overwrite: true, // Sobrescrever relatórios anteriores
      html: true, // Gerar relatório HTML
      indexHtml: true, // Gerar um arquivo index.html para fácil acesso
      indexPageName: 'index.html', // Nome do arquivo index
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao',  
    defaultCommandTimeout: 4000,
  },
  video: false, 
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,
  retries: {
      runMode: 2,
      openMode: 0
  },
  
});
