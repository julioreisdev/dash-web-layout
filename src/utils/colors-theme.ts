import { IThemeColors } from "../interfaces/theme.interface";

function colorsTheme(theme: string): IThemeColors {
  if (theme === "light") {
    return {
      background: "#f8f8f2", // fundo claro
      text: "#282a36", // texto escuro
      selection: "#44475a", // cor de seleção
      comments: "#d1d1d1", // cor de comentários
      cyan: "#8be9fd", // ciano
      pink: "#ff79c6", // rosa
      orange: "#ffb86c", // laranja
      yellow: "#f1fa8c", // amarelo
      green: "#50fa7b", // verde
      red: "#ff5555", // vermelho
      blue: "#00a0c2", // azul (para destacar funções, palavras-chave, etc.)
      purple: "#bd93f9", // roxo (para strings, variáveis)
      blueDark: "#91B3FA",
    };
  }

  // Default: Dark Theme (Dracula Dark)
  return {
    background: "#282a36", // fundo escuro
    text: "#f8f8f2", // texto claro
    selection: "#44475a", // cor de seleção
    comments: "#4a4a4a", // cor de comentários
    cyan: "#8be9fd", // ciano
    pink: "#ff79c6", // rosa
    orange: "#ffb86c", // laranja
    yellow: "#f1fa8c", // amarelo
    green: "#50fa7b", // verde
    red: "#ff5555", // vermelho
    blue: "#91B3FA", // azul
    purple: "#bd93f9", // roxo
    blueDark: "#91B3FA",
  };
}

export default colorsTheme;
