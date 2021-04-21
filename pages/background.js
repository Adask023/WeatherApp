const handleBackgroundChange = (data) => {
  if (typeof data.main != "undefined") {
    // const celsius = data.main.temp.toFixed(1);
    const celsius = data.main.temp.toFixed(1);
    switch (true) {
      case celsius <= 0:
        return "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
      case celsius > 0 && celsius <= 10:
        return "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)";
      case celsius > 10 && celsius <= 20:
        return "linear-gradient(to top, #37ecba 0%, #72afd3 100%)";
      case celsius > 20 && celsius <= 30:
        return "linear-gradient(120deg, #f6d365 0%, #fda085 100%)";
      case celsius > 30:
        return "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)";
    }
  }

};

export default handleBackgroundChange;
