import { FC, useContext } from "react";
import CenterBox from "../../components/style/center-box";
import { Box } from "@mui/material";
import { GlobalContext } from "../../contexts/global-context";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

const RestorePasswordPage: FC = () => {
  const context = useContext(GlobalContext);
  return (
    <CenterBox style={{ flexDirection: "column" }} overflow={35.19}>
      <h3 style={{ textAlign: "center", width: " 80%" }}>
        Enviamos o link de recuperação no seu e-mail
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
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LoadingButton type="submit" variant="outlined">
                Reenviar e-mail
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

export default RestorePasswordPage;
