import indexBackgroundImg from './css/images/indexPageBackground.jpg';

export default class Styling {
    static IndexPageStyle() {
        document.body.removeAttribute("data-bs-theme");
        document.body.style.backgroundImage = `url('${indexBackgroundImg}')`;
    }

    static PlainBlackBackground() {
        document.body.style.backgroundImage = `none`;
        document.body.setAttribute("data-bs-theme", "dark");
    }

    static GrayGradientBackground() {
        document.body.removeAttribute("data-bs-theme");
        document.body.style.backgroundImage = "radial-gradient(#ffffff, #808080)";
    }
}