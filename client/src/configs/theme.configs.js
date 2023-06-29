import { createTheme } from "@mui/material/styles"
import { colors } from "@mui/material"

export const themeModes = {
    dark: "dark",
    light: "light"
};

const themeConfigs = {
    custom: ({mode}) => {
        const customPalette = mode === themeModes.dark ? {
            primary: {
                main: "#4d207a",
                contrastText: "ffffff"
            },
            secondary: {
                main: "#9966cc",
                contrastText: "ffffff"
            },
            background: {
                default: "#000000",
                paper: "#131313"
            }
        } : {
            primary: {
                main: "#4d207a"
            },
            secondary: {
                main: "#9966cc"
            },
            background: {
                default: colors.grey["100"],
            } 
        }

        return createTheme({
            palette:{
                mode,
                ...customPalette
            },
            components: {
                MuiButton: {
                    defaultProps: { disableElevation: true }
                }
            }
        });
    }
};

export default themeConfigs;