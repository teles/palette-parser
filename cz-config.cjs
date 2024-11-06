module.exports = {
  types: [
    { value: "feat", name: "✨ feat:     Adição de uma nova funcionalidade" },
    { value: "fix", name: "🐛 fix:      Correção de bug" },
    { value: "docs", name: "📚 docs:     Alterações na documentação" },
    {
      value: "style",
      name: "🎨 style:    Mudanças que não afetam o significado do código (ex.: formatação, espaçamento, etc.)",
    },
    {
      value: "refactor",
      name: "🔨 refactor: Refatoração de código sem correção de bugs ou adição de funcionalidades",
    },
    {
      value: "perf",
      name: "🚀 perf:     Mudança de código que melhora a performance",
    },
    {
      value: "test",
      name: "✅ test:     Adição ou correção de testes",
    },
    {
      value: "build",
      name: "📦 build:    Mudanças que afetam o sistema de build ou dependências externas",
    },
    {
      value: "ci",
      name: "🔧 ci:       Mudanças na configuração de CI e scripts (ex.: Travis, Circle, Jenkins)",
    },
    {
      value: "chore",
      name: "📝 chore:    Tarefas de manutenção que não alteram o código fonte ou testes",
    },
    { value: "revert", name: "↩️ revert:   Reverte um commit anterior" },
  ],
  scopes: [
    { name: "frontend" },
    { name: "backend" },
    { name: "api" },
    { name: "config" },
    { name: "tests" },
    { name: "docs" },
    { name: "build" },
    { name: "auth" },
    { name: "deps" },
  ],
  messages: {
    type: "Selecione o tipo de mudança que você está cometendo:",
    customScope: "Denomine o escopo desta mudança (opcional):",
    subject: "Escreva uma descrição breve e clara da mudança:\n",
    body: "Forneça uma descrição detalhada da mudança (opcional). Use '|' para quebras de linha:\n",
    breaking: "Liste quaisquer mudanças que quebram a compatibilidade (opcional):\n",
    footer: "Liste quaisquer issues fechadas por esta mudança (ex: #123, #456) (opcional):\n",
    confirmCommit: "Tem certeza que deseja continuar com o commit acima?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  subjectLimit: 100,
};
