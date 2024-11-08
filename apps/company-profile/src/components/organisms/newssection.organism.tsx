import { NewestNewsSection, SosmedSection } from '../molecules';
export default function NewsSection() {
    return (
        <section
            className="flex w-full h-[110vh]">
            <div
                style={{
                    backgroundImage: "url('/images/assets/background.JPG')",
                }}
                className="flex w-full bg-contain">
                    <SosmedSection/>
                    <NewestNewsSection />
            </div>
        </section>
    )
}
