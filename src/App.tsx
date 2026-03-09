import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
