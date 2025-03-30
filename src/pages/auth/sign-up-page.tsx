import { FC, useContext } from "react";
import CenterBox from "../../components/style/center-box";
import { Box } from "@mui/material";
import { GlobalContext } from "../../contexts/global-context";
import { Link } from "react-router-dom";
import { InputApp } from "../../components/style/inputs";
import { LoadingButton } from "@mui/lab";
import Lottie from "react-lottie";
import LoginLutties from "../../utils/login-lotties";
import getRandomInt from "../../utils/random";

const options = {
  loop: true,
  autoplay: true,
  animationData: LoginLutties[getRandomInt(LoginLutties.length)],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SignUpPage: FC = () => {
  const context = useContext(GlobalContext);
  return (
    <CenterBox style={{ flexDirection: "column" }} overflow={35.19}>
      <h3 style={{ textAlign: "center", width: " 80%" }}>
        Mais um projeto que saiu da Federal do Piauí
      </h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box sx={{ "@media(max-width: 720px)": { display: "none" } }}>
          <Lottie options={options} height={400} width={400} />
        </Box>
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            width: "300px",
          }}
        >
          <h3 style={{ color: context?.colors.blue }}>IFpotenusa</h3>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <InputApp
              id="register-name"
              type={"email"}
              placeholder="Nome"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="register-phone"
              type={"tel"}
              placeholder="Telefone"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="register-email"
              type={"email"}
              placeholder="E-mail"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="register-password"
              type={"password"}
              placeholder="Senha"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LoadingButton type="submit" variant="outlined">
                Cadastrar
              </LoadingButton>
            </Box>
          </form>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <p>Já possui uma conta?</p>
            <Link
              to={"/"}
              style={{ color: context?.colors.blue, textDecoration: "none" }}
            >
              Faça login!
            </Link>
            <p>ou</p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
                border: `1px solid ${context?.colors.text}`,
                padding: "0 0.3rem",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <img
                style={{ width: "1.5rem" }}
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Logo do Google"
              />
              <p style={{ fontSize: "0.8rem" }}>Entre com o Google</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </CenterBox>
  );
};

export default SignUpPage;
