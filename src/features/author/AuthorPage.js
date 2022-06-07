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
                    o profilu matematyczno fizyczno informatycznym z rozszerzonym <strong>językiem angielskim na poziomie B1/B2</strong>, studiowałem
                    na Politechnice Białostockiej przez 1 rok. Interesuję się <strong> programowaniem, grafiką komputerową, 
                    montażem filmów i fotografią</strong>. <b>Pomimo młodego wieku</b> przez ostatnie 5 lat zdobywałem doświadczenie
                    jako druga kamera w firmie zajmującęj się nagrywaniem i składaniem filmów z przeróżncyh uroczystości między innymi wesel, ślubów i 
                    komunii. Ponadto <strong>pracowałem jako grafik w firmie zajmującą się tworzeniem stron, wizytówek, oraz logotypów.</strong> 
                    Samodzielnie prowadziłem blog ukazujący moje własne fotografie i prace graficzne oraz nagrane teledyski. Aktualnie przeznaczam swój 
                    czas w 100% na naukę programowania i mam nadzieje że w przyszłości będę wykonywał zawód programisty.
                </Content>
                
            }
        />
    </Container>
);