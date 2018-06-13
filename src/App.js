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
    gameStatus: "Click an image to begin",
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

  clickImage = event => {
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

  incrementScore = () => {
    this.setState({
      gameStatus: "Correct!",
      currentScore: this.state.currentScore + 1
    })
  }

  resetGameData = () => {
    let newHighScore = this.getHighScore(this.state.currentScore);
    this.setState({
      gameStatus: `Incorrect! Try again?`,
      highScore: newHighScore,
      currentScore: 0,
      usedImages: []
    })
  }

  getHighScore = score => {
    let newHighScore;
    (score > this.state.highScore) ? newHighScore = score : newHighScore = this.state.highScore;
    return newHighScore;
  }

  winner = () => {
    this.setState({
      gameStatus: "You won! Play again?",
      highScore: 12,
      currentScore: 0,
      usedImages: []
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          gameStatus={this.state.gameStatus}
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
                clickImage={() => this.clickImage}
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