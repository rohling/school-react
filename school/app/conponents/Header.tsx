export default function Header() {
    return (
        <header className="bg-[#4d4d4d4d] text-center text-white py-8 md:flex justify-between px-2 ">
           <a href="/"> <h2>🏫 ESCOLA DE INFORMÁTICA 📕</h2> </a>
            <nav>
                <a href="#">Produtos</a>
                <a href="/courses/html">Cursos HTML</a>
                <a href="">Cursos JS</a>
                <a href="">Sobre</a>
            </nav>
        </header>
    )
}