class MainController {
  async home(req, res) {
    res.send("Home saxifa");
  }

  async createUser(req, res) {
    console.log(req.body);

    res.send("Backenddan salomlar");
  }
}

export default new MainController();
