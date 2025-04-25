import { FC, useContext } from "react";
import CenterBox from "../../components/style/center-box";
import { Box } from "@mui/material";
import { GlobalContext } from "../../contexts/global-context";
import { Link, useNavigate } from "react-router-dom";
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

const LoginPage: FC = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  function submit() {
    localStorage.setItem("authorization", "token");
    navigate("/dashboard/inicio");
  }
  return (
    <CenterBox style={{ flexDirection: "column" }} overflow={35.19}>
      <h3 style={{ textAlign: "center", width: " 80%" }}>
        {" "}
        Base de dashboard para aplicações web
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
          <h3 style={{ color: context?.colors.blue }}>Dash-Web-Layout</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <InputApp
              id="login-email"
              type={"email"}
              placeholder="E-mail"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="login-password"
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
                Entrar
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
            <p>Não tem uma conta?</p>
            <Link
              to={"/cadastro"}
              style={{ color: context?.colors.blue, textDecoration: "none" }}
            >
              Cadastre-se
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
          <Link
            style={{ color: context?.colors.text, fontSize: "0.8rem" }}
            to={"/esqueci-minha-senha"}
          >
            Esqueci minha senha
          </Link>
        </Box>
      </Box>
    </CenterBox>
  );
};

export default LoginPage;
