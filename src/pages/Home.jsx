function Home() {
    return (
        <>
            <h1 className="font-heading text-5xl mb-4 text-snow">Hey! I'm <span className="text-green">Klaas</span></h1>
            <p className="max-w-2xl text-snow/80 leading-relaxed mt-4">
                I'm currently studying Computer-Science as a Bachelor at <span className="text-green">CvO-University-Oldenburg</span> in Oldenburg. I love learning new things, which I will be documenting here on my website. Feel free to write me an E-Mail :)
            </p>
            <div className="mt-6 flex gap-4">
                <a className="text-snow/70 hover:text-green transition-colors font-body hover:underline" href="https://github.com/klaas16">Github</a>
                <a className="text-snow/70 hover:text-green transition-colors font-body hover:underline" href="https://linkedin.com/in/klaas-petermann-4385ba37b">LinkedIn</a>
            </div>
        </>
    )
}

export default Home;