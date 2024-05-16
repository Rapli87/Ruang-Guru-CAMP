import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Card from "./Card";

describe("App", () => {
    it("should render the Card component as direct children", async () => {
        const { container } = render(<App />);
        await waitFor(() => screen.findByText("Itadori Yūji"));
        expect(container.querySelectorAll("character-card")).toBeTruthy();
    });
});

describe("Card", () => {
    it("should render image with 'src' from the 'imageUrl' and 'alt' from the 'name'", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/431152.jpg",
                    name: "Sukuna",
                    species: "Cursed Spirit",
                    affiliation: "Himself",
                    grade: "Special Grade",
                }}
            />
        );
        let image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute(
            "src",
            "https://cdn.myanimelist.net/images/characters/6/431152.jpg"
        );
        expect(image).toHaveAttribute("alt", "Sukuna");
    });

    it("should render species from the 'species' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/431152.jpg",
                    name: "Sukuna",
                    species: "Cursed Spirit",
                    affiliation: "Himself",
                    grade: "Special Grade",
                }}
            />
        );
        expect(screen.getByText(/Cursed Spirit/)).toBeInTheDocument();
    });

    it("should render name from the 'name' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/431152.jpg",
                    name: "Sukuna",
                    species: "Cursed Spirit",
                    affiliation: "Himself",
                    grade: "Special Grade",
                }}
            />
        );
        expect(screen.getByText(/Sukuna/)).toBeInTheDocument();
    });

    it("should render affiliation name from the 'affiliation' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/431152.jpg",
                    name: "Sukuna",
                    species: "Cursed Spirit",
                    affiliation: "Himself",
                    grade: "Special Grade",
                }}
            />
        );
        expect(screen.getByText(/Himself/)).toBeInTheDocument();
    });

    it("should render grade from the 'grade' using the 'p' tag", async () => {
        render(
            <Card
                data={{
                    imageUrl:
                        "https://cdn.myanimelist.net/images/characters/6/431152.jpg",
                    name: "Sukuna",
                    species: "Cursed Spirit",
                    affiliation: "Himself",
                    grade: "Special Grade",
                }}
            />
        );
        expect(screen.getByText(/Special Grade/)).toBeInTheDocument();
    });
});
