import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Title from "./components/Title";
import Game from "./components/Game";
import Footer from "./components/Footer";
import images from "./images.json";
import ImageCard from "./components/ImageCard";

class App extends Component {
  state = {
    guessed: "Click an image to begin",
    currentScore: 0,
    highScore: 0,
    images,
    usedImages: []
  }

  componentDidMount() {
    this.randomizeImages(this.state.images);
  }

  randomizeImages = images => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }
    this.setState({ images });
  }

  // shuffleArray = array => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   this.setState({ images: array });
  // }

  incrementScore = () => {
    this.setState({
      guessed: "Correct!",
      currentScore: this.state.currentScore + 1
    })
  }

  getHighScore = score => {
    let newHighScore;
    return (score > this.state.highScore) ? newHighScore = score : newHighScore = this.state.highScore;
  }

  resetGameData = () => {
    let newHighScore = this.getHighScore(this.state.currentScore);
    this.setState({
      guessed: `Incorrect! Try again?`,
      highScore: newHighScore,
      currentScore: 0,
      usedImages: []
    })
  }

  winner = () => {
    this.setState({
      guessed: "You won! Play again?",
      highScore: 12,
      currentScore: 0,
      usedImages: []
    })
  }

  chooseImage = event => {
    const { id } = event.target;
    if (this.state.usedImages.includes(id)) {
      this.resetGameData();
      this.randomizeImages(this.state.images);
    } else {
      this.incrementScore();
      this.state.usedImages.push(id);
      if (this.state.usedImages.length === 12) {
        this.winner();
      }
      this.randomizeImages(this.state.images);
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          guessed={this.state.guessed}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Main>
          <Title />
          <Game>
            {this.state.images.map(image => (
              <ImageCard
                id={image.id}
                key={image.id}
                name={image.name}
                image={image.image}
                chooseImage={() => this.chooseImage}
              />
            ))}
          </Game>
        </Main>
        <Footer />
      </div>
    );
  }

}

export default App;