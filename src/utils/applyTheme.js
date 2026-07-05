import siteConfig from "../config/siteConfig";

function applyTheme() {

    document.documentElement.style.setProperty(
        "--primary",
        siteConfig.primaryColor
    );

    document.documentElement.style.setProperty(
        "--secondary",
        siteConfig.secondaryColor
    );

}

export default applyTheme;