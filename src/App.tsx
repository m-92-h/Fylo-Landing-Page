import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Productive from "./components/productive";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

import type { CSSProperties } from "react";

export default function App() {
    return (
        <div style={styles}>
            <Header />
            <div className="text-center">
                <Hero />
                <Features />
                <Productive />
                <Testimonials />
            </div>
            <Footer />
        </div>
    );
}

const styles: CSSProperties = {
    backgroundColor: "hsl(218, 28%, 13%)",
    height: "100vh !important",
};
