import React,{Component} from 'react';
import './App.css';
// import Clarifai from 'Clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";


// const particlesOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//          enable: true,
//          color: "#3CA9D1",
//          blur: 5
//     }
//   }
// }
// }
// const app = new Clarifai. App({
//  apikey: "4dd6f2c3b81340f4a5e824d516adf02b"
// });

 const particlesInit = (main) => {
    console.log(main);

  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

class App extends Component 
{
   constructor ()
   {
    super();
    this.state =
    {
      input:'',
    }
   }

 onInputChange = (event) =>
 {
console.log(event.target.value);
 }

onButtonSubmit = () =>
{
  console.log('Submit');
  // app. models.predict("4dd6f2c3b81340f4a5e824d516adf02b",
  // "https://samples.clarifai.com/face-det.jpg").
  // then(
  // function(response) {
  // console.log(response);
  // },
  // function(error){
  //   // there is an error
  // }
  // );
}

  render()
  {
  return (
    <div className="App">
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#3CA9D1",
        //   },
        // },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }
    }
    />





   <Navigation />
       <Logo />
       <Rank />
<ImageLinkForm  onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
     

    </div>
  );
}
}

export default App;
