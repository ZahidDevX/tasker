import Container from "../layout/Container";

const Header = () => {
    return (
        <header>
            <Container>
                <div className="my-3 shadow shadow-blue-400 p-4 rounded flex justify-center items-center">
                    <div className="font-bold text-3xl text-slate-600 text-shadow-xs text-shadow-blue-400">ZahidDevX</div>
                </div>
            </Container>
        </header>
    );
};

export default Header;