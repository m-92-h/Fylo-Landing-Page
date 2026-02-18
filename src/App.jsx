import Header from "./components/header.jsx";
import ComponentOne from "./components/componentOne.jsx";
import ComponentTwo from "./components/componentTwo.jsx";
import ComponentThree from "./components/componentThree.jsx";
import Cards from "./components/cards.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
    return (
        <div style={styles}>
            <Header />
            <div className="text-center">
                <ComponentOne />
                <ComponentTwo />
                <ComponentThree />
                <Cards />
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    backgroundColor: "hsl(218, 28%, 13%)",
    height: "100vh !important",
};
