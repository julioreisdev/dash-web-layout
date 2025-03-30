import styled from "styled-components";

// Definindo os tipos das props do input
interface InputAppProps {
  bgColor?: string; // Cor de fundo personalizada (opcional)
  borderColor?: string; // Cor da borda personalizada (opcional)
  focusBorderColor?: string; // Cor da borda quando o input é focado (opcional)
  color?: string; // Cor da borda quando o input é focado (opcional)
}

export const InputApp = styled.input<InputAppProps>`
  padding: 0.5rem;
  color: ${(props) => props.color || "#000"}; // Cor de fundo, padrão branco;
  background-color: ${(props) =>
    props.bgColor || "#fff"}; // Cor de fundo, padrão branco
  border: none; // Cor da borda, padrão cinza claro
  border-radius: 4px;

  // Quando o input for focado
  &:focus {
    border-color: ${(props) =>
      props.focusBorderColor ||
      "#007bff"}; // Cor da borda ao focar, padrão azul
    outline: none; // Remove o contorno padrão do navegador
  }
`;
