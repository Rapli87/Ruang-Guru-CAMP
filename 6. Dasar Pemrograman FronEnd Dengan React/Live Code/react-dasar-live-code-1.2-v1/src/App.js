import React from "react";
import Card from "./Card";

const App = () => {
    const charList = [
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/6/431152.jpg",
            name: "Sukuna",
            species: "Cursed Spirit",
            affiliation: "Himself",
            grade: "Special Grade",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/11/427601.jpg",
            name: "Itadori Yūji",
            species: "Human",
            affiliation: "Tokyo Metropolitan Curse Technical College",
            grade: "-",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/15/422168.jpg",
            name: "Gojō Satoru",
            species: "Human",
            affiliation: "Tokyo Metropolitan Curse Technical College",
            grade: "Special Grade",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/2/392689.jpg",
            name: "Fushiguro Megumi",
            species: "Human",
            affiliation: "Tokyo Jujutsu High School",
            grade: "Grade 2",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/12/422313.jpg",
            name: "Kugisaki Nobara",
            species: "Human",
            affiliation: "Tokyo Jujutsu High School",
            grade: "Grade 3",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/3/440469.jpg",
            name: "Zen'in Maki",
            species: "Human",
            affiliation: "Tokyo Jujutsu High School",
            grade: "Grade 4",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/16/428791.jpg",
            name: "Inumaki Toge",
            species: "Human",
            affiliation: "Tokyo Jujutsu High School",
            grade: "Semi-Grade 1",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/16/423950.jpg",
            name: "Panda",
            species: "Cursed Corpse",
            affiliation: "Tokyo Jujutsu High School",
            grade: "Semi-Grade 2",
        },
        {
            imageUrl: "https://cdn.myanimelist.net/images/characters/10/461503.jpg",
            name: "Okkotsu Yūta",
            species: "Human",
            affiliation: "Tokyo Jujutsu High School",
            grade: "Special Grade",
        },
    ];

    return (
        <>
            <div
                data-testid="app"
                style={{ maxWidth: "1040px", padding: "0 14px" }}
            >
                <h2 style={{ color: "#49515b", marginBottom: "0.2em" }}>
                    Jujutsu Kaisen
                </h2>
            </div>
            <div style={{ maxWidth: "1040px", display: "flex" }}>
                <div style={{ padding: "14px" }}>
                    <img
                        style={{ borderRadius: "4px" }}
                        src="https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
                        alt="jujutsu-kaisen"
                    />
                </div>
                <div style={{ padding: "14px" }}>
                    <section>
                        <h3 style={{ color: "#49515b", marginTop: "0" }}>Synopsis</h3>
                        <hr />
                        <p style={{ color: "#49515b" }}>
                            Idly indulging in baseless paranormal activities with the Occult
                            Club, high schooler Yuuji Itadori spends his days at either the
                            clubroom or the hospital, where he visits his bedridden
                            grandfather. However, this leisurely lifestyle soon takes a turn
                            for the strange when he unknowingly encounters a cursed item.
                            Triggering a chain of supernatural occurrences, Yuuji finds
                            himself suddenly thrust into the world of Curses—dreadful beings
                            formed from human malice and negativity—after swallowing the said
                            item, revealed to be a finger belonging to the demon Sukuna
                            Ryoumen, the "King of Curses."
                            <br />
                            <br />
                            Yuuji experiences first-hand the threat these Curses pose to
                            society as he discovers his own newfound powers. Introduced to the
                            Tokyo Metropolitan Jujutsu Technical High School, he begins to
                            walk down a path from which he cannot return—the path of a Jujutsu
                            sorcerer.
                        </p>
                    </section>
                    <section>
                        <h3 style={{ color: "#49515b", marginTop: "0" }}>Characters</h3>
                        <hr />
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "20px 10px",
                                justifyItems: "center",
                            }}
                        >
                            {charList&&charList.map((character, index) => (
                                <Card key={index} data={character} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default App;


