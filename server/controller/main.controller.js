import { pool } from "../services/db.service.js";

class MainController {
  async home(req, res) {
    res.send("Home saxifa");
  }

  async createUser(req, res) {
    const { id, first_name, last_name, username } = req.body;
    const name = `${first_name ?? ""} ${last_name ?? ""}`.trim();
    const user = await pool.query(
      `
      INSERT INTO users (id, name, username)
      VALUES ($1, $2, $3)
      ON CONFLICT (id) DO NOTHING 
      RETURNING *`,
      [id, name, username]
    );

    console.log(user.rows[0]);

    res.send("Backenddan salomlar");
  }
}

export default new MainController();
