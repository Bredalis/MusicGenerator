
from flask import Flask, render_template

def generador_musica():
	app = Flask(__name__)

	@app.route("/")
	def index():
		return render_template("index.html")

	@app.errorhandler(404)
	def error_404(e):
		return render_template("404.html"), 404

	return app

if __name__ == "__main__":
	app = generador_musica()
	app.run()