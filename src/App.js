import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";
import "./App.css";

class App extends Component {

    state = {
        characters,
        message: "Click an image to begin. Dont click the same image twice!",
        score: 0,
        highScore: 0
    };
    
    clickHandler = id => {
        //searches array for id that matches
        this.state.characters.find((character, i) => {
            if (character.id === id) {
                //checks clicked and toggles true
                if(characters[i].clicked === false) {
                    characters[i].clicked = true;
                    //adds to score and update message
                    this.setState({score : this.state.score + 1, message: "Good job, Keep it up!!"});

                    //checks if user wins
                    if(this.state.score >= 11) {
                       //resets each character.clicked to false
                      this.state.characters.forEach(character => {
                        character.clicked = false;
                      });
                      this.setState({score: 0, message: "You won! You must be a Xenogears fan!", highScore: 12});
                    }
                    //shuffles characters
                    this.state.characters.sort(() => Math.random() - 0.5);
                    return true; 
                } else {
                this.gameOver();
                }
            }
            return false;
        });
    }

    gameOver = () => {
        //checks to set new highscore
        if (this.state.score > this.state.highScore) {
          this.setState({highScore: this.state.score});
        }
        //resets each character.clicked to false
        this.state.characters.forEach(character => {
          character.clicked = false;
        });
        this.setState({score: 0, message: "Game Over! Click an image to try again."});
      }

    render() {
      return (
        <Wrapper>
            <Header score={this.state.score} highScore={this.state.highScore} message={this.state.message}></Header>
            <div className="logo"></div>
          {this.state.characters.map(character => (
            <Cards
              clickHandler={this.clickHandler}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
          <footer>Xenogears React Fan Game</footer>
        </Wrapper>
      );
    }
  }

export default App;
