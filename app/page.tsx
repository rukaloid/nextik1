import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";


export default function Home() {
  return (
    <div>
        <Container><Title text="Все пиццы" className="font-extrabold" size="xl"/></Container>
        <TopBar></TopBar>
    </div>
    );
}
