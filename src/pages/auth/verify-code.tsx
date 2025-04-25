import { FC, useContext } from "react";
import CenterBox from "../../components/style/center-box";
import { Box } from "@mui/material";
import { GlobalContext } from "../../contexts/global-context";
import { Link } from "react-router-dom";
import { InputApp } from "../../components/style/inputs";
import { LoadingButton } from "@mui/lab";

const VerifyCodePage: FC = () => {
  const context = useContext(GlobalContext);
  return (
    <CenterBox style={{ flexDirection: "column" }} overflow={35.19}>
      <h3 style={{ textAlign: "center", width: " 80%" }}>Olhe seu WhatsApp.</h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
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
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <InputApp
              id="restore-code"
              type={"text"}
              placeholder="Código"
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
                Verificar
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
            <Link
              to={"/"}
              style={{ color: context?.colors.blue, textDecoration: "none" }}
            >
              Voltar para a tela inicial
            </Link>
          </Box>
        </Box>
      </Box>
    </CenterBox>
  );
};

export default VerifyCodePage;
