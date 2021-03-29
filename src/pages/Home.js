import '../App.css';
import Main from '../components/main';
import Adver from '../components/adver';
import Content from '../components/content';
import Email from '../components/email'
import Footer from '../components/footer';






function Home() {
  return (

    <div className="App">
      <Main /> 
      <Adver />
      <Content />
      <Email />
      <Footer />
    </div>

  );
}

export default Home;
