import TriviaComponent from '../components/filmtrivia';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Trivia App</h1>
                <TriviaComponent />
            </main>
            <Footer />
        </div>
    );
}
