import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FlexEndBox from "../style/flex-end-box";
import { GlobalContext } from "../../contexts/global-context";
import Icons from "../style/icons/icons";
import SidebarList from "../../utils/sidebar-list";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { logout } from "../../utils/auth";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

interface DrawerProps {
  open: boolean;
  bgColor?: string; // bgColor é opcional e deve ser do tipo string
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "bgColor", // Não encaminha bgColor para o DOM
})<DrawerProps>(({ theme, bgColor }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: bgColor, // Usa a cor de fundo passada
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": {
          ...openedMixin(theme),
          backgroundColor: bgColor, // Cor de fundo também no estado aberto
        },
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": {
          ...closedMixin(theme),
          backgroundColor: bgColor, // Cor de fundo também no estado fechado
        },
      },
    },
  ],
}));

interface IProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<IProps> = ({ children }) => {
  const width = window.innerWidth;
  const context = React.useContext(GlobalContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(() =>
    localStorage.getItem("sidebar") === "open"
      ? true
      : localStorage.getItem("sidebar") === "close"
      ? false
      : width < 720
      ? false
      : true
  );
  const [route, setRoute] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setRoute(window.location.href);
  }, [window.location.href]);

  const handleDrawerOpen = () => {
    localStorage.setItem("sidebar", "open");
    setOpen(true);
  };

  const handleDrawerClose = () => {
    localStorage.setItem("sidebar", "close");
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: context?.colors.background }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon sx={{ color: context?.colors.text }} />
          </IconButton>
          <div
            style={{
              width: "100%",
            }}
          >
            <FlexEndBox>
              <IconButton onClick={() => context?.changeTheme()}>
                {context?.theme === "light" ? (
                  <Icons.NightsStayIcon
                    sx={{ fontSize: "1.5rem", color: context?.colors.text }}
                  />
                ) : (
                  <Icons.LightModeIcon
                    sx={{ fontSize: "1.5rem", color: context?.colors.text }}
                  />
                )}
              </IconButton>
              <IconButton onClick={handleClick}>
                <Icons.AccountCircleIcon
                  sx={{ fontSize: "1.5rem", color: context?.colors.text }}
                />
              </IconButton>
            </FlexEndBox>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        bgColor={
          context?.theme === "dark"
            ? context.colors.background
            : context?.colors.text
        }
      >
        <DrawerHeader>
          <h3 style={{ color: context?.colors.blueDark || "" }}>
            Dash-Web-Layout
          </h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon
                sx={{
                  color:
                    context?.theme === "dark"
                      ? context.colors.text
                      : context?.colors.background,
                }}
              />
            ) : (
              <ChevronLeftIcon
                sx={{
                  color:
                    context?.theme === "dark"
                      ? context.colors.text
                      : context?.colors.background,
                }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {SidebarList.map((item, index) => (
            <Link
              key={`${item.route}${index}`}
              onClick={() => {
                setRoute(item.route);
              }}
              style={{
                textDecoration: "none",
                color:
                  context?.theme === "dark"
                    ? context.colors.text
                    : context?.colors.background,
              }}
              to={`/dashboard${item.route}`}
            >
              <ListItem
                key={`${item.route}${index}`}
                disablePadding
                sx={{
                  display: "block",
                  color: route.includes(item.route)
                    ? context?.colors.blueDark || ""
                    : context?.theme === "dark"
                    ? context.colors.text
                    : context?.colors.background,
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <IconButton>
                      {React.createElement(item.icon, {
                        sx: {
                          color: route.includes(item.route)
                            ? context?.colors.blueDark || ""
                            : context?.theme === "dark"
                            ? context.colors.text
                            : context?.colors.background,
                        },
                      })}
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ paddingTop: "2rem" }}> {children}</Box>
      </Box>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <MenuItem
          sx={{
            color: context?.colors.red,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          <p>Sair</p>
          <Icons.ExitToAppIcon />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Sidebar;
