import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { Content } from "./styled";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Damian Michałowski"
            body={
                 <Content>
                    Nazwyam się <strong>Damian Michałowski</strong>, ukończyłem szkołę średnią
                    o profilu matematyczno-fizyczno-informatycznym dwujęzycznym z <strong>językiem angielskim</strong> na poziomie <strong>B1/B2</strong>, studiowałem
                    na Politechnice Białostockiej przez 1 rok. Interesuję się <strong> programowaniem, grafiką komputerową, 
                    montażem filmów i fotografią</strong>. Pomimo młodego wieku <strong>w ciągu ostatnich 5 lat zdobywałem doświadczenie</strong> między innymi
                    jako druga kamera w firmie nagrywającej wesela i śluby. Ponadto <strong>pracowałem jako grafik</strong> w firmie zajmującą się tworzeniem stron, wizytówek, 
                    oraz logotypów. Zajmowałem się <strong>freelancingiem</strong> odnośnie fotografii/obróbki zdjęć i tym podobnych. Prowadziłem <strong>blog</strong> ukazujący moje własne 
                    fotografie, prace graficzne oraz filmy. Z <b>programowaniem</b> mam styczność od rozpoczęcia nauki w liceum gdzie miałem <strong>rozszerzoną informatykę</strong>,
                    przygotowałem się do <strong>rozszerzonej matury z informatyki</strong> posługująć się <strong>C++</strong>, na studiach informatycznych nauczyłem się podstaw języka C, aktualnie 
                    uczę się na własną rękę z pomocą <strong>kursu youcode</strong>, wszystkie technologie potrzebne do pracy jako Junior Front-End-Developer między innymi <strong>html, css, React,
                    JavaScript(ES6+) i wiele innych</strong>. Czerpię przyjemność z programowania i wiążę z nim przyszłość.
                </Content>
                
            }
        />
    </Container>
);