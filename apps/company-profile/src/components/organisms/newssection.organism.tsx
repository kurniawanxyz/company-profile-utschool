import { NewestNewsSection, SosmedSection } from '../molecules';
export default function NewsSection() {
    return (
        <section
            className="flex w-full">
            <div
                style={{
                    backgroundImage: "url('/images/assets/background.JPG')",
                }}
                className="flex flex-col lg:flex-row w-full bg-contain">
                    <SosmedSection/>
                    <NewestNewsSection />
            </div>
        </section>
    )
}
