import React, { Component } from 'react';
import ScrollReveal from './components/UI/ScrollReveal/ScrollReveal';

class App extends Component {
  render() {
    return (
      <div>

        <div
          style={{
            backgroundImage: `url("https://unsplash.it/1024/768?image=1080")`,
            height: "400px"
          }}
        >
          <p>
            Hello world1
          </p>
        </div>

        <div style={{
          height: "2000px",
          backgroundColor: "rgba(0,0,0,0.05)"  
        }}>
        </div>

        <ScrollReveal
          duration={200}
        >
          {(ref) => (
            <p 
              ref={ref} 
              style={{
                margin: "100px",
                width: "300px",
                textAlign: "center",
              }}>
                asdfew 23452345 2345Literacy, put simply, is the ability to read and write. It involves all of the skills necessary to interpret and use language confidently. It is the art of communication and so is essential for effective participation in society. It is also an important foundation for successful learning of many other skills. Confidence and fluency with literacy is the first important skill needed for success in every school subject. Later on, when you become an adult, literacy skills will be something that you make use of every day.  
              </p>
          )}
        </ScrollReveal>

        <ScrollReveal
          revealThreshold={0.99}
          duration={300}
        >
          {(ref) => (
            <p 
              ref={ref} 
              style={{
                margin: "100px",
                width: "300px",
                textAlign: "center",
              }}>
                Literacy, put simply, is the ability to read and write. It involves all of the skills necessary to interpret and use language confidently. It is the art of communication and so is essential for effective participation in society. It is also an important foundation for successful learning of many other skills. Confidence and fluency with literacy is the first important skill needed for success in every school subject. Later on, when you become an adult, literacy skills will be something that you make use of every day.  
              </p>
          )}
        </ScrollReveal>

        <ScrollReveal
          revealThreshold={0.9}
          duration={400}
        >
          {(ref) => (
            <p 
              ref={ref} 
              style={{
                width: "300px",
                textAlign: "center",
              }}>
                Literacy, put simply, is the ability to read and write. It involves all of the skills necessary to interpret and use language confidently. It is the art of communication and so is essential for effective participation in society. It is also an important foundation for successful learning of many other skills. Confidence and fluency with literacy is the first important skill needed for success in every school subject. Later on, when you become an adult, literacy skills will be something that you make use of every day.  
              </p>
          )}
        </ScrollReveal>

        <div style={{
          height: "2000px",
          // backgroundColor: "blue"
        }}>
        </div>
      </div>
    );
  }
}

export default App;
