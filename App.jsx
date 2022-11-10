import styles from './App.module.css';
import Card from './components/card/Card';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Card />
        <Content />
        <Footer />

        
      </div>
    </div>
  );
}

export default App;
